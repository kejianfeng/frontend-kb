## 想要手写Promise，必须先了解PromiseA+规范,为了方便查看规范，在官方文档找了一份翻译一下，方便复习对照

## PromiseA+规范

1. 术语
1.1. promise: 一个拥有符合这个规范的行为的then方法的对象或函数。<br />
1.2. thenable: 定义了一个then方法的对象或函数。 <br />
1.3. 值(value): 任意合法的JavaScript值(包括undefined,thenable,promise)。 <br />
1.4. 异常(exception): 使用throw语句抛出的一个值 <br />
1.5. 原因(reason): 表示promise为什么被拒绝的一个值 <br />
2. 必要条件 <br /> 
2.1. Promise 状态 <br />
promise必须是这三个状态中的一种：等待态pending,解决态fulfilled或拒绝态rejected <br />

2.1.1. 当一个promise处于等待状态的时候：<br />
2.1.1.1. 可能变为解决或者拒绝状态。 <br />

2.1.2. 当一个promise处于解决状态的时候： <br />
2.1.2.1. 一定不能转换为任何其它状态 <br />
2.1.2.2. 必须有一个不能改变的值 <br />
2.1.3. 当一个promise处于拒绝状态的时候： <br />
2.1.3.1. 一定不能转换为任何其它状态 <br />
2.1.3.2. 必须有一个不能改变的值 <br />
在这里，"一定不能改变"意味着不变的身份(例如 ===)，但是并不意味着深度不可变性。(译注者：这里应该是说只要值的引用相同即可，并不需要引用中的每一个值都相等) <br />

2.2. then 方法 <br />
Promise必须提供一个then方法来访问当前或最终的值或原因。<br />

Promise的then方法接受俩个参数： <br />

promise.then(onFulfilled, onRejected) <br />
2.2.1 onFulfilled和onRejected都是可选的参数 <br />
2.2.1.1. 如果onFulfilled不是一个函数，它必须被忽略 <br />
2.2.1.2. 如果onRejected不是一个函数，它必须被忽略 <br />
2.2.2. 如果onFulfilled是一个函数 <br />
2.2.2.1. 它必须在promise被解决后调用，promise的值作为它的第一个参数。 <br />
2.2.2.2. 它一定不能在promise被解决前调用。 <br />
2.2.2.3. 它一定不能被调用多次。 <br />
2.2.3. 如果onRejected是一个函数 <br />
2.2.3.1. 它必须在promise被拒绝之后调用，用promise的原因作为它的第一个参数。<br />
2.2.3.2. 它一定不能在promise被拒绝之前调用。<br />
2.2.3.3. 它一定不能被调用多次。<br />
2.2.4. 在执行上下文栈中只包含平台代码之前，onFulfilled或onRejected一定不能被调用 [3.1] <br />
2.2.5. onFulfilled和onRejected一定被作为函数调用(没有this值) [3.2] <br />
2.2.6. 同一个promise上的then可能被调用多次 <br />
2.2.6.1. 如果promise被解决，所有相应的onFulfilled回调必须按照他们原始调用then的顺序执行 <br />
2.2.6.2. 如果promise被拒绝，所有相应的onRejected回调必须按照他们原始调用then的顺序执行 <br />
2.2.7. then必须返回一个promise [3.3] <br />
promise2 = promise1.then(onFulfilled,onRejected) <br />
2.2.7.1. 如果onFulfilled或onRjected返回一个值x，运行promise解决程序[[Resolve]](promise2,x) <br />
2.2.7.2. 如果onFulfilled或onRejected抛出一个异常e，promise2必须用e作为原因被拒绝 <br />
2.2.7.3. 如果onFulfilled不是一个函数并且promise1被解决，promise2必须用与promise1相同的值被解决 <br />
2.2.7.4. 如果onRejected不是一个函数并且promise1被拒绝，promise2必须用与promise1相同的原因被拒绝 <br />
2.3. Promise解决程序 <br />
promise解决程序是一个抽象操作，它以一个promise和一个值作为输入，我们将其表示为[[Resolve]](promise, x)。如果x是一个thenable，它尝试让promise采用x的状态，并假设x的行为至少在某种程度上类似于promise。否则，它将会用值x解决 promise。 <br />

这种thenable的特性使得Promise的实现更具有通用性：只要其暴露一个遵循Promise/A+协议的then方法即可。这同时也使遵循Promise/A+规范的实现可以与那些不太规范但可用的实现能良好共存。<br />

要运行[[Resolve]](promise, x)，需要执行如下步骤： <br />

2.3.1. 如果promise和x引用同一个对象，用一个TypeError作为原因来拒绝promise <br />
2.3.2. 如果x是一个promise，采用它的状态：[3.4] <br />
2.3.2.1. 如果x是等待态，promise必须保持等待状态，直到x被解决或拒绝 <br />
2.3.2.2. 如果x是解决态，用相同的值解决promise <br />
2.3.2.3. 如果x是拒绝态，用相同的原因拒绝promise <br />

2.3.3. 否则，如果x是一个对象或函数 <br />
2.3.3.1. 让then成为x.then。[3.5] <br />
2.3.3.2. 如果检索属性x.then导致抛出了一个异常e，用e作为原因拒绝promise <br />
2.3.3.3. 如果then是一个函数，用x作为this调用它。then方法的参数为俩个回调函数，第一个参数叫做resolvePromise，第二个参数叫做rejectPromise：<br />
2.3.3.3.1. 如果resolvePromise用一个值y调用，运行[[Resolve]](promise, y)。译者注：这里再次调用[[Resolve]](promise,y)，因为y可能还是promise <br />
2.3.3.3.2. 如果rejectPromise用一个原因r调用，用r拒绝promise。译者注：这里如果r为promise的话，依旧会直接reject，拒绝的原因就是promise。并不会等到promise被解决或拒绝 <br />
2.3.3.3.3. 如果resolvePromise和rejectPromise都被调用，或者对同一个参数进行多次调用，那么第一次调用优先，以后的调用都会被忽略。译者注：这里主要针对thenable，promise的状态一旦更改就不会再改变。 <br />
2.3.3.3.4. 如果调用then抛出了一个异常e, <br />
2.3.3.4.1. 如果resolvePromise或rejectPromise已经被调用，忽略它 <br />
2.3.3.4.2. 否则，用e作为原因拒绝promise <br />
2.3.3.4. 如果then不是一个函数，用x解决promise  <br />

2.3.4. 如果x不是一个对象或函数，用x解决promise <br />
如果promise用一个循环的thenable链解决，由于[[Resolve]](promise, thenalbe)的递归特性，最终将导致[[Resolve]](promise, thenable)被再次调用，遵循上面的算法将会导致无限递归。规范中并没有强制要求处理这种情况，但也鼓励实现者检测这样的递归是否存在，并且用一个信息丰富的TypeError作为原因拒绝promise。[3.6] <br />