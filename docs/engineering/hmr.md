## updateCompier
一个方法，作用是把更更新的client跟server入口文件都添加到entry里，打包的时候变把热更新相关的文件都打进去浏览器端文件，实现热更新功能。

## 说明

客户端保存的hash值有两个，一个新的旧的，webpack重新构建之后，触发done钩子，然后socket emit 两个通知给客户端， 一个hash, 带上这次最新的hash, 一个是ok，不带参数，浏览器接到ok信号就执行reloadApp, 接受到hash就设置当前hash为最新的那个，然后要用旧的哈希发起请求，第一此请求是 hot-update.json， 返回说哪些内容改变了，hash是啥，这实际上是一个描述说明，minifest随后发起请求hot-update.js， 把改变的内容拿回来。至于怎么拿到本次改变的内容？webpack重新编译之后，伴随这次新生的hash,会产生一个补丁包，说明改变的内容是啥。那客户端拿到了这个改变的内容，重新执行下这个内容文件，页面内容就发生改变了，这时候那些记录状态的文件没变也没重新执行，于是状态也不会改变。hotDownloadManifest方法会发起ajax请求把描述文件取回来，看下哪些文件改变了，从c字段的拿内容数据，里面就是改变的文件的list，一般来说是个主文件，例如['main'],但像多入口的话也会有多个。然后遍历这个list去发起请求，通过hotDownloadUpdateChunk去获取改变的内容，也就是发起这个[chunkId].[lastHash].hot-update.js请求。请求完之后，把currentHash赋值给lastHash, 下一次文件发生改变了，webpack重新编译完成之后，客户端接到hash的emit之后就会把currentHash改为最新的hash, 然后拿旧的hash去请求更新内容。

### 注入热更新太多

#### 热更新代码注入浏览器
![热更新代码注入浏览器](https://image.jianfengke.com/20220403192646.png)

#### 请求manifest跟update-js
![请求manifest跟update-js](https://image.jianfengke.com/20220404001237.png)
#### 单个module的结构
![](https://image.jianfengke.com/20220404012919.png)

#### 模块里热更新字段hot里的结构
![](https://image.jianfengke.com/20220404013028.png)


#### hot-update.json跟js哪里生成的？
HotModuleReplacementPlugin插件生成的，而且就是它注入了运行时代码，即hotModuleReplacement.runtime，代码里那些包裹业务代码的热更新相关的方法、变量等等，都是这个插件给生的


## 各插件作用

首先得申明一下，一直疑惑webpack-dev-server咋工作的，下面这张图非常简要的说明了它的工作原理：
![](https://image.jianfengke.com/20220508142729.png)

当我们不用webpack-dev-server时，我们就要实现类型的功能了

### webpack-dev-middleware
接受一个compiler, 负责把文件编译到内存里。
并且提供文件中间件，当有文件请求，会拦截并匹配到并从内存文件系统中返回 
![](https://image.jianfengke.com/20220508134722.png)

### webpack-hot-middleware


这个模块只关心将浏览器客户端连接到 webpack 服务器与接收更新的机制，它将订阅来自服务器的更改并使用 webpack 的 HMR API 执行这些更改, [HMR AP](Ihttps://webpack.docschina.org/concepts/hot-module-replacement/)

打包时：
```
 entry: {
    'js/app': ['webpack-hot-middleware/client?path=/__webpack_hmr&reload=false', './_client/index.tsx'],
  },
```
以上代码是往客户端添加热更新代码，这会连接到服务器（如利用socket）以在捆绑包重建时接收通知，然后相应地更新您的客户端捆绑包。


### HotModuleReplacementPlugin
用于生成热更新的相关文件。例如hot-update.json, hot-update.js 
添加各种运行时代码，为每个模块添加了parents与children属性，以及其他各种热更新api,如apply, check
![](https://image.jianfengke.com/20220508133033.png)

### react-fresh

使用了 Webpack 的 HMR API，但是在实现方式上更复杂和强大！
会更细粒度地调用 module.hot.accept() API 来抓取每个组件的更新，而不会让这些更新 “冒泡” 到根组件。
同时，这些 Proxy Component 还会拥有自己的状态管理机制，来管理被包裹的真实 React 组件。所以，当你代码改了之后，组件的状态还是会保留下来，而不会重新 “刷新”。



# 参考
 - [https://juejin.cn/post/6844903953092591630](https://juejin.cn/post/6844903953092591630)
 - [https://juejin.cn/post/6976082291428704292](https://juejin.cn/post/6976082291428704292)










