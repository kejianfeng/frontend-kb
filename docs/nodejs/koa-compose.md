# Koa洋葱模型实现原理

## 简介
洋葱模型是Koa中间件的核心思想，通过`koa-compose`实现。洋葱模型能实现什么效果就不赘述了有兴趣看这篇文章的自然懂。

分析洋葱模型前我们要了解`koa-compose`是怎么被koa用起来的，So下面我们先看Koa的大致结构跟启动流程

## 用Koa启动一个简单的服务
```javascript
const Koa = require('koa');
const app = new Koa();
app.use(async (ctx, next) => {
  console.log('1');
  await next();
  console.log('2');
});
app.use(async (ctx, next) => {
  console.log('3');
  await next();
  console.log('4');
});
app.listen(3000);
```
以上,在端口`3000`启动了服务，访问 `http://localhost:3000`，控制台输出如下
```
1
3
4
2
```

好了，这个时候我们就要有以下几个疑问
- 为什么输出顺序是这样的
- app.use做了什么
- next函数做了什么
- koa-compose是怎么发挥作用的

带着这些疑问我们一起继续往下看


## Koa总体结构
我们对koa源码中`Koa函数类`做了一些删减，保留了最核心的结构，方便我们分析，以下让我们来逐行分析。

```javascript
const Emitter = require('events');
// Koa继承自Emitter，可以知道koa示例拥有node events的全部能力，方便事件触发
module.exports = class Application extends Emitter {
    constructor() {
        super();
        // middleware数组存储整个流程use的所有的中间件
        this.middleware = [];
    }
    // use方法相当简单，主要作用就是把中间件函数push到middleware数组中
    use(fn) {
        this.middleware.push(fn);
        // 重中之重,返回了this，每一个use完的结果都是指向koa实例，这样就可以实现链式调用
        return this;
    }
    // app.listen的时候指向的回调,正是在这里面，从第一个中间件开始依次执行
    callback() {
      // fn为中间件执行的入口函数，fn里面会从第一个中间件开始调用
      const fn = compose(this.middleware);
      // 创建上下文，传递ctx以及中间件执行的入口函数开始执行
      const handleRequest = (req, res) => {
        const ctx = this.createContext(req, res);
        return this.handleRequest(ctx, fn);
      };
      return handleRequest;
    }
    handleRequest(ctx, fnMiddleware) {
      // 全部错误捕捉，捕获到错误后触发error事件， ctx.onerror实际会执行: this.app.emit('error', err, this), 如果我们在在app实例上监听了error事件，就可以轻松捕捉到全局错误并上报。
      // 别忘了Koa继承了events的全部能力，支持this.app.emit以及this.app.on
      const onerror = err => ctx.onerror(err);
      // 处理响应，respond内部实现逻辑稍微复杂，这里不展开，简单来说就是处理转换响应数据body, 通过res.end(body) 返回给客户端
      const handleResponse = () => respond(ctx);
      // 重点 ！！！！ fnMiddleware(ctx)执行，会自动执行下一个中间件，通过这样实现：
      // `Promise.resolve(fn(context, dispatch.bind(null, i + 1)));` fn为中间件函数
      return fnMiddleware(ctx).then(handleResponse).catch(onerror);
    }
    // 这里不用多说了,app.listen调用的就是这里, 可以知道，,app.listen可以传的参数还不止一个，跟node的server.listen的参数保持一致
    listen(...args) {
      // 这里最为关键，this.callback()作为创建服务后的回调函数，正是由此触发了中间件的执行。
      const server = http.createServer(this.callback());
      return server.listen(...args);
    }
}
```

## koa-compose实现原理

好了，有了以上对Koa大概结构以及启动流程的分析，我们知道了app.use中间件实际上是往middleware数组里面push中间件函数，而app.listen的时候，会调用koa-compose，把middleware数组转换成函数，并返回给koa，koa在handleRequest的时候，执行这个函数，从而实现了洋葱模型。那么，koa-compose是怎么实现的呢？下面我们来看一下koa-compose的源码。

```javascript
function compose(middleware) {
  // 检查middleware是否为数组，如果不是则抛出错误。
  if (!Array.isArray(middleware)) throw new TypeError('Middleware stack must be an array!')
  // 遍历middleware数组，检查每个中间件是否为函数，如果不是则抛出错误。
  for (const fn of middleware) {
    if (typeof fn !== 'function') throw new TypeError('Middleware must be composed of functions!')
  }
  // 这里的next可以不传，像koa执行第一个中间件的时候就传了第一个参数ctx
  return function(context, next) {
    // last called middleware #
    let index = -1
    return dispatch(0)
    function dispatch(i) {
      // 检查当前索引是否小于等于上一个索引，如果是则抛出错误，防止多次调用next函数。
      if (i <= index) return Promise.reject(new Error('next() called multiple times'))
      // 将当前索引赋值给index变量。
      index = i
      // 获取当前中间件函数fn，如果当前索引等于middleware数组的长度，则将fn设置为next函数。
      // 为什么这样做？ 因为当i等于middleware数组的长度时，说明已经执行完了所有的中间件，此时fn为空，此时应该执行next函数。
      let fn = middleware[i]
      if (i === middleware.length) fn = next
      // 如果fn不存在，则返回一个Promise.resolve()。
      if (!fn) return Promise.resolve()
      try {
        //重点：调用fn函数，传入context和下一个中间件函数，也就是所谓的next，并返回一个Promise
        return Promise.resolve(fn(context, function next() {
          return dispatch(i + 1) // 这里是执行所有中间件的精髓, 利用递归思维,每次执行一个中间件,如果调用next,则会继续往下执行。但如果在当前中间件里执行的await next()后, next()后面的代码需要等后面所有中间件都返回了结果才能继续往下执行，这就是所谓的洋葱模型以及关键的实现所在
        }))
      } catch (err) {
        return Promise.reject(err)
      }
    }

  }
}
```
## 尝试脱离Koa使用koa-compose
之所为将`koa-compose`抽离为一个独立的包，是因为它的功能非常单一而且`与框架无关`，它就是单纯的实现了所谓的洋葱模型这种执行顺序。我们完全可以用它来实现洋葱模型功能。
如下代码示例，`koa-compose`的使用非常简单，只需要将中间件数组作为参数传入即可。

```javascript
const compose = require('koa-compose')

const compose = require('koa-compose')
const middleware1 = async (ctx, next) => {
  console.log('middleware1 start')
  await next()
  console.log('middleware1 end')
}

const middleware2 = async (ctx, next) => {
  console.log('middleware2 start')
  await next()
  console.log('middleware2 end')
}

const middleware3 = async (ctx, next) => {
  console.log('middleware3 start')
  await next()
  console.log('middleware3 end')
}

// 模拟中间件list
const middleware = [middleware1, middleware2, middleware3]

const fn = compose(middleware)
console.log('入口执行函数', fn.toString())
const ctx = {}

fn(ctx).then(() => {
  console.log('end')
})
```
执行结果如下图：

![](https://image.jianfengke.com/kb20240822230344.png)

上图执行结果展示了我们预期中的洋葱模型的执行逻辑，假设这个时候，我把`middleware2`的 `await next()`去掉，会输出什么？

![](https://image.jianfengke.com/kb20240822232129.png)

看到没，由于middleware2里面没有调用next，即实际没有调用它的下一个中间件`middleware3`, 所以`middleware2`执行完默认`retun undefined`, 然后执行`middleware1 next()`之后的 `middleware1 end`

## 总结
再回头看我们开头抛出的问题：
- 为什么输出顺序是这样的
- app.use做了什么
- next函数做了什么
- koa-compose是怎么发挥作用的
  
如果完整的看下来，应该都很容易知道答案了---
  
总体看下来，不管是`Koa`还是`koa-compose`, 实现得非常纯粹，`koa-compose`单纯使用传入的中间件数组进行递归执行, 如果某个有 `await next()`， 就先执行 `await next()`上面的逻辑，然后能后面所有中间件状态都有返回结果后，才执行 `await next()` 后面的逻辑，这样看起来，跟`二叉树中序遍历`差不多，先递归左子树，然后处理本节点，然后递归处理右子树。

以上便是我粗浅的见解啦，有啥不对劲的可以提出来哦！









