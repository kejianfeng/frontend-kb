CommonJS是一种广泛使用的模块化规范，在Node.js中得到了广泛应用, 但有时候可能会对commonjs的用法产生一些疑惑，下面是一些常见问题的简单解释说明，当然，没有很深入讲解，存当知识扫盲吧

## 基础介绍
CommonJS规范规定，每个模块内部，`module`变量代表当前模块。这个变量是一个对象，它的`exports`属性（即`module.exports`）是对外的接口。加载某个模块，其实是加载该模块的`module.exports`属性。为了方便，Node为每个模块提供一个exports变量，指向module.exports

假如有math.js文件，定义了一个数学模块：

```javascript
var x = 5;
var addX = function (value) {
  return value + x;
};
module.exports.x = x;
module.exports.addX = addX;
```
上面代码通过module.exports输出变量x和函数addX。

```javascript
var math = require('./math');
console.log(math.x); // 5
console.log(math.addX(1)); // 6
```
上面代码通过require方法，加载math模块，然后就可以调用math模块的属性和方法了。


## 知识点


### CommonJS模块语法的运行环境
  CommonJS规范主要用于服务端JavaScript环境，如Node.js。它不是为浏览器设计的，因此在浏览器中不能直接运行。要在浏览器中使用CommonJS模块，需要通过工具如Webpack进行编译。
  Node.js采用了CommonJS规范作为其模块系统的理论基础，但进行了一些改良。例如，Node.js的`require`函数会同步加载模块，为服务端不需要考虑网络延迟。

### 模块的缓存机制
模块的单例模式, 在CommonJS中，模块的加载是单例模式的。无论`require()`被调用多少次，每个模块都只会被加载一次，并在第一次加载后被缓存。
  ```javascript
    Module._load = function(request, parent, isMain) {
      // 1. 检查 Module._cache，是否缓存之中有指定模块
      // 2. 如果缓存之中没有，就创建一个新的Module实例
      // 3. 将它保存到缓存
      // 4. 使用 module.load() 加载指定的模块文件，
      //    读取文件内容之后，使用 module.compile() 执行文件代码
      // 5. 如果加载/解析过程报错，就从缓存删除该模块
      // 6. 返回该模块的 module.exports
  };
  ```

### 模块的执行时机
  即使模块没有导出任何内容，当使用`require()`加载该模块时，模块内部的代码也会被执行。这可以用来执行初始化代码。


### CommonJS的导入限制
  CommonJS不支持ES6模块的`import`语法中的解构赋值形式，如`const {a} = require('xxx')`是不正确的。正确的做法是先导入整个模块，然后从模块对象中访问需要的属性：
     ```javascript
     const module = require('xxx');
     console.log(module.a);
     ```
   

### 为什么不能直接将exports变量指向一个值
  因为这样等于切断了exports与module.exports的联系。
  在CommonJS中，`exports`是一个指向`module.exports`的引用。如果直接将`exports`指向一个值，那么`exports`将不再指向`module.exports`，导致模块的导出内容发生变化。例如：

  ```javascript
  exports = function() {
      // ...
  };
  ```
  上述代码实际上将`exports`指向了一个新的函数，而不再指向`module.exports`。因此，模块的导出内容将变为这个新的函数，而不是原来的`module.exports`。


##  Commonjs规范参考

Commonjs规范可以参考链接：[https://javascript.ruanyifeng.com/nodejs/module.html#toc6](https://javascript.ruanyifeng.com/nodejs/module.html#toc6)
