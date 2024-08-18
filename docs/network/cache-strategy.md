# 想要理解浏览器资源缓存，先从这里开始

## 相关请求头、响应头以及优先级

### Cache-Control

在HTTP/1.1中，Cache-Control是最重要的规则，主要用于控制网页缓存，主要取值为：
        
public：所有内容都将被缓存（客户端和代理服务器都可缓存）


private：所有内容只有客户端可以缓存，Cache-Control的默认取值


no-cache：客户端缓存内容，但是是否使用缓存则需要经过协商缓存来验证决定


no-store：所有内容都不会被缓存，即不使用强制缓存，也不使用协商缓存


max-age=xxx (xxx 是一个相对数值，单位为秒)：缓存内容将在xxx秒后失效

### Expires


Expires是HTTP/1.0控制网页缓存的字段，其值为服务器返回该请求结果缓存的到期时间，是一个绝对值时间格式。即再次发起该请求时，如果客户端的时间小于Expires的值时，直接使用缓存结果。
注意：
到了HTTP/1.1，Expire已经被Cache-Control替代，原因在于Expires控制缓存的原理是使用客户端的时间与服务端返回的时间做对比，那么如果客户端与服务端的时间因为某些原因（例如时区不同；客户端和服务端有一方的时间不准确）发生误差，那么强制缓存则会直接失效，这样的话强制缓存的存在则毫无意义。



### 优先级

- Cache-Control: max-age   >  Expires， 如两者同时存在，max-age优先级更高，由于 HTTP/1.1 已被广泛使用，无需特地提供 Expires。


## 强制缓存
直接看下强制缓存成功的结果
![](https://image.jianfengke.com/kb20240818212739.png)

以上请求示例，Expire为
```
Expires: Fri, 16 Aug 2024 12:41:19 GMT
```

但同时存在优先级更高的Cache-Control：max-age

```
Cache-control: public, max-age=31536000

```
max-age 设置为 31536000 秒，这相当一年的时间。这意味着一旦资源被缓存，它可以在一年内被重复使用，而不需要再次从原始服务器请求。

上图的 `from disk cache`证明了强缓存，该资源请求走的是浏览器本地缓存的文件



存在缓存结果和缓存标识，但该结果已失效，强制缓存失效，则使用协商缓存


###  `from disk cache` 与 `from memory cache`区别
    
        
#### 内存缓存(from memory cache)
内存缓存具有两个特点，分别是快速读取和时效性：

- 快速读取：内存缓存会将编译解析后的文件，直接存入该进程的内存中，占据该进程一定的内存资源，以方便下次运行使用时的快速读取。

- 时效性：一旦该进程关闭，则该进程的内存则会清空。

#### 硬盘缓存(from disk cache)

硬盘缓存则是直接将缓存写入硬盘文件中，读取缓存需要对该缓存存放的硬盘文件进行I/O操作，然后重新解析该缓存内容，读取复杂，速度比内存缓存慢。
        


### 强制缓存的缓存规则是什么？
当浏览器向服务器发起请求时，服务器会将缓存规则放入HTTP响应报文的HTTP头中和请求结果一起返回给浏览器，控制强制缓存的字段分别是Expires和Cache-Control，其中Cache-Control优先级比Expires高。



## 协商缓存

过时的响应不会立即被丢弃。HTTP 有一种机制，可以通过询问源服务器将陈旧的响应转换为新的响应。这称为验证，有时也称为重新验证。
验证是通过使用包含 If-Modified-Since 或 If-None-Match 请求标头的条件请求完成的。

请求头：`If-Modified-Since`
对应响应头:`Last-Modified`

请求头： `If-None-Match`
对应响应头: `ETag`

实际示例如下图，下面是一张图片的请求，由于浏览器缓存了这张图片，所以请求头中包含了If-None-Match和If-Modified-Since，由于最高优先级的请求头的If-None-Match的值与响应头的ETag值一致 ，证明文件没有改变，则服务器返回304，表示浏览器缓存的图片没有过期，浏览器可以直接使用缓存的图片。

![](https://image.jianfengke.com/kb20240818195519.png)

### ETag和Last-Modified优先级
ETag优先级更高，如果ETag没有变化，再使用Last-Modified。
如果服务器回送了一个ETag，HTTP/1.1 客户端就必须使用`If-None-Match`验证。如果服务器只回送了一个 `Last-Modified` 值，客户端就可以使用  `If-Modified-Since`验证。如果实体标签和最后修改日期都提供了，客户端就会同时使用这两种方法验证，当两个验证都同时通过时，才会返回 `304 Not Modified`。

### 有了ETag为什么还要Last-Modified
ETag 是对文件的唯一标识，如果文件内容发生变化，ETag也会变化，但是Last-Modified是文件最后修改时间，如果文件内容没有变化，但是最后修改时间变了，那么ETag不会变化，但是Last-Modified会变化，所以优先使用ETag，如果ETag没有变化，再使用Last-Modified。

引用MDN文档原话：
>备注：在评估如何使用 ETag 和 Last-Modified 时，请考虑以下几点：在缓存重新验证期间，如果 ETag 和 Last-Modified 都存在，则 ETag 优先。因此，如果你只考虑缓存，你可能会认为 Last-Modified 是不必要的。然而，Last-Modified 不仅仅对缓存有用；相反，它是一个标准的 HTTP 标头，内容管理 (CMS) 系统也使用它来显示上次修改时间，由爬虫调整爬取频率，以及用于其他各种目的。所以考虑到整个 HTTP 生态系统，最好同时提供 ETag 和 Last-Modified。

### ETag如何生成与实际应用
日常开发中，ETag 通常可以是一个文档的 MD5 值，在文档未发生变化时，文档生成的 MD5 值也不会变化。在服务器端可以这样处理客户端的条件 GET 请求，这里以 Node JS 举例：

```javascript
var etag = require('etag');

fs.readFile(filePath, function(err, html) {
    // 如果有错误，或者render的内容为空，则直接响应 404，并且不设置 Cache-Control 响应头
    if (err || !html) {
        res.status(404).end('Not Found');
        return;
    }

    // 渲染成功才设置cache-control的响应头
    res.setHeader('Cache-Control', 'public, max-age=484200');

     // 设置Etag，以及检查Etag的变化
     var requestEtag = req.headers['if-none-match'];
     var currentEtag = etag(html);

    // 如果有带If-None-Match请求头，表示客户端本地有缓存，则判断Etag是否有改变
    if (requestEtag && (requestEtag === currentEtag)) return res.status(304).end();

    // 返回新的 ETag 头
    res.setHeader('ETag', currentEtag);

    res.status(200).end(html);
});
```


## 强制重新验证
```http
Cache-Control: no-cache
```
如果不希望重复使用响应，而是希望始终从服务器获取最新内容，则可以使用 no-cache 指令强制验证。

同样作用：

```http
Cache-Control: max-age=0, must-revalidate
```
max-age=0 意味着响应立即过时，而 must-revalidate 意味着一旦过时就不得在没有重新验证的情况下重用它——因此，结合起来，语义似乎与 no-cache 相同。


## 不使用缓存
```http
Cache-Control: no-store
```
no-cache 指令不会阻止响应的存储，而是阻止在没有重新验证的情况下重用响应。
no-store 指令表示响应不能被缓存，并且每次请求时都必须从服务器获取。


