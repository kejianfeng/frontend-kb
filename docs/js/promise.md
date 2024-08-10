>手写promise其实不难
要清楚Promise/A+规范，照着这个来实现的Promise的都是好的
现在ES6上的Promise是官网按照这个规范做的
ES6额外加了几个APi， 例如Promise.all、 Promsie.race、 Promise.any等，这实际上A+ 标准没有提到，都是ESCM官方考虑到日常使用场景，基于已经实现的Promise在Promise原型上新加的几个方法。


### Promise这个类里面有哪些属性或者方法
看下Promsie的宏观结构

```
const PENDING = 'pending'; 
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';

class Promise {
    state = PENDING; // promise状态
    value = undefined; // 状态为成功时resolve回的值
    reason = undefined;  // 状态为失败时rejected原因
    /**
        当then执行时，状态为fulfilled则执行onFulfilled(this.value)，但如果是pending呢，就用onFulfilledCallback这字段来存回调函数
    */
    onFulfilledCallback = []; 
    /**
        当then执行时，状态为rejected则执行onRejected(this.reason)，但如果是pending呢，就用onRejectedCallback这字段来存回调函数
    */
    onRejectedCallback = []; 


    // 构造器
    constructor(executor) {
        const resolve = value => {  // PENDING -> FULFILLED
        if (this.state === PENDING) {
            this.state = FULFILLED;  // 状态流转
            console.log('还要传递参数 value');
        }
        };
        const reject = reason => {
        if (this.state === PENDING) {  // PENDING -> REJECTED
            this.state = REJECTED;  // 状态流转
            console.log('还要传递参数 reason');
        }
        };
        try {
        executor(resolve, reject); // 防止这里执行报错做个trycach
        } catch (error) {
        reject(error); 
        };
    };
    then(onFulfilled, onRejected) {

    }
}
```




### 调用各个函数会发生

#### 调用resolve
我们在函数里调用的resolve， 如 resolve('123')
这时候得把看下现在状态是否是pending,不是的话就不理了，是的话就把当前状态改为fulfilled，value改为123
然后如果现在onFulfilledCallback字段里不为空，那就遍历这个list挨个执行，毕竟可能会连续调了多个then

#### 调用rejected
我们在函数里调用的rejected， 如 rejected('123')
这时候得把看下现在状态是否是pending,不是的话就不理了，是的话就把当前状态改为rejected，reason改为123
然后如果现在onRejectedCallback字段里不为空，那就遍历这个list挨个执行，毕竟可能会连续调了多个then

### 调用then
这里的逻辑比较主要
then(onFulfilled, onRejected) {}
首先明确一点是，then返回值也是一个promise,,所以该API功能肯定得包裹在一个Promise实例里面

要考虑传进来的onFulfilled，onRejected是函数，或者是值或者是空
然后分别真的现阶段为三个状态分别进行探讨

是的话直接onFulfilled(this.value),如果还是在等待中，那就只能入队了
onFulfilled为函数时，看现在的状态是否为完成了，是的话直接onFulfilled(this.value),如果还是在等待中，那就只能入队了
onFulfilled不为函数时，状态是否为完成了


Promises/A+ 规范指出 onFulfilled 和 onRejected 并不是 promise 解决或者拒绝后就立即调用的，而是放到的任务队列中，具体何时执行需要根据实现的机制来。实践中要确保 onFulfilled 和 onRejected 函数异步地执行，并且应该是在 then 方法被调用后的新一轮事件循环的新执行栈中执行。这个机制可以采用 "宏任务（macro-task）"机制来实现，比如： setTimeout 或 setImmediate；也可以采用 “微任务（micro-task）” 机制来实现，比如 MutationObserver 或者 process.nextTick。

这里采用宏任务 setTimeout 来实现：

大体框架是这样：
```
then(onFulfilled, onRejected) {
    if (this.state === FULFILLED) {  // 执行函数为同步且执行了 resolve
      typeof onFulfilled === 'function' && setTimeout(() => {
         onFulfilled(this.value);
      }, 0);
    } else if (this.state === REJECTED) {  // 执行函数为同步且执行了 reject
      typeof onRejected === 'function' && setTimeout(() => {
        onRejected(this.reason);
      }, 0);
    } else {  // 执行函数为异步
      if (typeof onFulfilled === 'function') {
        this.onFulfilledCallback.push(value => setTimeout(() => onFulfilled(value), 0));
      };
      if (typeof onRejected === 'function') {
        this.onRejectedCallback.push(reason => setTimeout(() => onRejected(reason), 0));
      };
    };
  };
```



调用then的时候，首先检测当前promise状态，如果是完成了的而且onFulfilled是函数，则调用onFulfilled(value)
如是rejected状态，而且onRejected是函数，则调用onRejected(reason)

这就容易解释了假如我先定一下Promise,调用执行代码
```
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
      resolve('111111')
  }, 2000)
})
```

这时候只是返回一个Promise实例


无论过了多久，你调用
```
const result = promise1.then(value =>  {
    console.log(value)
})
```
都会输出111111


### 但万一多个then连续执行，而且这个Promise状态还是pending,那咋整

例如：
```
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
      resolve('111111')
  }, 10000)
})
promise1.then(value =>  {
    console.log(value)
})
promise1.then(value =>  {
    console.log(value)
})
promise1.then(value =>  {
    console.log(value)
})
promise1.then(value =>  {
    console.log(value)
})
```
以上代码同时执行，那执行then方法的时候，状态还是pending,所以我们判断还在pending的时候就把这个函数存起来。
在Promise类里加多两个属性分别缓存onFulfilled 函数跟 onRejected函数，例如onFulfilledCallbacks|onRejectedCallbacks
还没到时机执行的话可以判断onFulfilled是否是一个函数，是的话就this.onFulfilledCallbacks.push(onFulfilled),到了调resolve的时候，我就遍历onFulfilledCallbacks，即 this.onFulfilledCallbacks.forEach(onFulfilled => onFulfilled(value))

onRejectedCallbacks处理的方案同onFulfilledCallbacks一样，只是传递的值不一样，失败传的是失败原因reason

大概逻辑可以看下一下图片：
![](https://image.jianfengke.com/20220421010145.png)






## 实现Promise.race

整体流程与 Promise 差不多，只是对数组中的 Promise 实例处理的逻辑不一样，这里我们需要将最快改变状态的 Promise 结果作为 Promise.race 的结果，相对来说就比较简单了，代码如下：

首先我们得知道 Promise.resolve('foo')  等价于  new Promise(resolve => resolve('foo'))


```
Promise.MyRace = function (promises) {
  return new Promise((resolve, reject) => {
    // 这里不需要使用索引，只要能循环出每一项就行
    for (const item of promises) {
      //为啥要这么写呢，因为resolve调用一次后，状态就变为完成，这样后面就算调了也没用，因为状态都改了不给你执行了
      // 同时也是防止item它本身不是promise, 所以要把他变成一个promise
      Promise.resolve(item).then(resolve, reject) //等价于
      <!-- new Promise(_resolve => {
        _resolve(item)
      }).then(resolve, reject) -->
    }
  })
}
```

## 实现Promise.all
all实际上是一个很简单的东西， 存在两种情况：
有报错的话立马reject返回报错
否则要等全部状态都转变完成了才 返回一个list
但记住Promise.allf返回的也是一个promise,所以该API功能肯定得包裹在一个Promise实例里面

```
Promise.MyAll = function (promises) {
  let arr = [],
  count = 0
  return new Promise((resolve, reject) => {
    promises.forEach((item, i) => {
      Promise.resolve(item).then(res => {
        arr[i] = res
        count += 1
        if (count === promises.length) resolve(arr)
      }).catch(reject)
    })
  })
}

```

## 完整实现

```javascript
const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';

/**
 * 调用实例： const x = onFulfilled(this.value);
 * resolvePromise(promise2, x, resolve, reject);
 * @param {*} promise 
 * @param {*} x 
 * @param {*} resolve 
 * @param {*} reject 
 * @returns 
 */
function resolvePromise(promise, x, resolve, reject) {
  if (promise === x) {
    reject(new TypeError('Chaining cycle detected for promise'));
  } else if (typeof x === 'function' || (typeof x === 'object' && x !== null)) {
    let called = false;
    try {
      const then = x.then;
      if (typeof then === 'function') {
        then.call(x, y => {
          if (called) return;
          called = true;
          resolvePromise(promise, y, resolve, reject);
        }, r => {
          if (called) return;
          called = true;
          reject(r);
        });
      } else {
        resolve(x);
      };
    } catch (error) {
      if (called) return;
      called = true;
      reject(error);
    }
  } else {
    // 大部分时候是这里执行
    resolve(x);
  }
}; 

class FullPromise {
  state = PENDING;
  value = undefined;
  reason = undefined;
  onFulfilledCallback = [];
  onRejectedCallback = [];

  constructor(executor) {
    const resolve = value => {
      if (this.state === PENDING) {
        this.state = FULFILLED;
        this.value = value;
        this.onFulfilledCallback.forEach(onFulfilled => onFulfilled(value));
      }
    };

    const reject = reason => {
      if (this.state === PENDING) {
        this.state = REJECTED;
        this.reason = reason;
        this.onRejectedCallback.forEach(onRejected => onRejected(reason)); 
      }
    };

    try {
      executor(resolve, reject);
    } catch (error) {
      reject(error); 
    };
  };
  
  then(onFulfilled, onRejected) {
    const promise2 = new FullPromise((resolve, reject) => {
      if (this.state === FULFILLED) {
        if (typeof onFulfilled === 'function') {
          setTimeout(() => {
            try {
              const x = onFulfilled(this.value);
              resolvePromise(promise2, x, resolve, reject);
            } catch (error) {
              reject(error);
            };
          }, 0);
        } else {
          resolve(this.value);
        };
      } else if (this.state === REJECTED) {
        if (typeof onRejected === 'function') {
          setTimeout(() => {
            try {
              const x = onRejected(this.reason);
              resolvePromise(promise2, x, resolve, reject);
            } catch (error) {
              reject(error);
            };
          }, 0);
        } else {
          reject(this.reason);
        };
      } else {

        // 下面这两段执行逻辑其实是跟上面重复了，但这样比较好理解一点
        this.onFulfilledCallback.push(value => setTimeout(() => {
          if (typeof onFulfilled === 'function') {
            try {
              const x = onFulfilled(value);
              resolvePromise(promise2, x, resolve, reject);
            } catch (error) {
              reject(error);
            }
          } else {
            resolve(value);
          };
        }, 0));

        this.onRejectedCallback.push(reason => setTimeout(() => {
          if (typeof onRejected === 'function') {
            try {
              const x = onRejected(reason);
              resolvePromise(promise2, x, resolve, reject);
            } catch (error) {
              reject(error);
            }
          } else {
            reject(reason);
          };
        }, 0));
      }
    });

    return promise2;
  };
};
```








