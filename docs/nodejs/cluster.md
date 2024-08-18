# cluster - 集群

## 介绍

Node 在 v0.8 时直接引入了 cluster 模块，用以解决多核 CPU 的利用率问题，同时也提供了较完善的 API，用以处理进程的健壮性问题。
cluster 模块调用 fork 方法来创建子进程，该方法与 child_process 中的 fork 是同一个方法（玩转 node 子进程 — child_process）。 cluster 模块采用的是经典的主从模型，cluster 会创建一个 master，然后根据你指定的数量复制出多个子进程，可以使用cluster.isMaster 属性判断当前进程是 master 还是 worker (工作进程)。由 master 进程来管理所有的子进程，`主进程不负责具体的任务处理，主要工作是负责调度和管理`。
cluster 模块使用内置的负载均衡来更好地处理线程之间的压力，该负载均衡使用了 Round-robin 算法（也被称之为循环算法）。当使用 Round-robin 调度策略时，master accepts() 所有传入的连接请求，然后将相应的TCP请求处理发送给选中的工作进程（该方式仍然通过 IPC 来进行通信）。

集群模块可以轻松创建共享服务器端口的子进程。工作进程都是独立的进程，它们可以根据程序的需要被杀死或重新衍生，而不会影响其他工作进程。只要还有工作进程仍然活动，服务器就会继续接受连接。如果没有工作进程活动，则现有的连接将被丢弃，且新的连接将被拒绝。尽管 node:cluster 模块的主要使用场景是网络，但它也可用于需要工作进程的其他使用场景。


## 代码示例
```javascript
const cluster = require('node:cluster');
const http = require('node:http');
const numCPUs = require('node:os').availableParallelism();
const process = require('node:process');

if (cluster.isPrimary) {
  console.log(`Primary ${process.pid} is running`);

  // Fork工作进程
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
  });
} else {
  // 实际请求会被主进程调度到子进程处理
  http.createServer((req, res) => {
    res.writeHead(200);
    res.end('hello world\n');
  }).listen(8000);

  console.log(`Worker ${process.pid} started`);
}
```




# 参考链接
- [cluster官方文档](https://nodejs.org/dist/latest-v14.x/docs/api/cluster.html)