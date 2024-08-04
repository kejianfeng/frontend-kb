# 搞不懂path.join的path.resolve的区别就来看这个
`path.join`与`path.resolve`都是我们在node.js编程中常用到的路径操作的方法，但对于两者的差别，相信还是有不少人存疑的，特别是对于新手，趁着最近在整理自己的笔记，顺便输出一下

## path.join
官方说明： 方法使用平台特定的分隔符作为分隔符将所有给定的路径段连接在一起，然后规范化结果路径

读下来可能用点蒙！也就是在不同系统下用对应的分隔符（如在linux分隔符是 `/`, 在window里是 `\`）,将所有给定的片段连接在一起，然后规范化生成的路径.注意，生成的结果只是一段相对路径片段， `并不一定是绝对路径`

### 原理

只需要记住，path.join就是简单把路径拼在一起，`./xx `与  `/xx`是等价的，都代表后面拼多一个 `/xx`;
`.`代表当前, 拼接时忽略，如 `path.join('.', '/folder2')` 其实还是 `folder2`
但遇到  `..`就需要跟 'cd..'一样回到上一级了，看下面例子你就懂了

### 示例
```js
console.log('1:', path.join('folder1', 'folder2', 'folder3'));
console.log('2:', path.join('folder1', './folder2', '/folder3'));
console.log('3:', path.join('folder1', '/folder2', '../../folder3'));
```

输出

```
1: folder1/folder2/folder3
2: folder1/folder2/folder3
3: folder3

```

**挑第三个说下**

```javascript
path.join('folder1', '/folder2', '../../folder3')

```

  - 第一步：拼接 folder1, 此时路径为 `folder1`
  - 第二步：再拼folder2， 此时路径为 `folder1/folder2`
  - 第三步：`cd ..` 回到上一级，此时路径为 `folder1`, 再`cd ..`回到上一级, 此时路径为 `.`, 再拼接`folder3`, 即 最后结果为`folder3`, 

## path.resolve

官方解释是：将路径或路径片段的序列解析为【绝对路径】。

显然，看起来很蒙，更是不知道到底跟path.join有什么区别。以上这句话你要记住一个点就是：解析为绝对路径，什么是绝对路径，看这个你就懂了

`/Users/user/Documents/Learn-Project/test-platform/folder1` 这个就是绝对路径， test-platform是项目地址，通过这个路径可以在系统任意的终端通过命令行直接拿到这个路径上的东西，而上面path.join得出的结果是 `相对路径`片段，即只有一段路径，可能是不完整的。


### 原理

path.resolve的原理是，从左到右，每遇到一个路径片段，就把它和之前的路径片段拼接起来，然后得到一个绝对路径。如果路径片段是`/`，则直接替换为根目录。

所以，只需要记住，path.resolve的时候，会从左到右，**每遇到一个参数，就跟你进行cd目录操作一样!谨记！**
### 示例

下面示例均使用 __dirname 作为当前目录，如`/Users/user/Documents/Learn-Project/test-platform`，仅用作示例


```javascript
  path.resolve ('folder1', 'folder2', 'folder3'))
```
这行代码换成我们正常cd操作就是:
```bash
  cd folder1 # 此时路径为/Users/user/Documents/Learn-Project/test-platform/folder1
  cd folder2 # 此时路径为/Users/user/Documents/Learn-Project/test-platform/folder1/folder2
  cd folder3 # 此时路径为/Users/user/Documents/Learn-Project/test-platform/folder1/folder2/folder3
```
所以，输出结果就是：`/Users/user/Documents/Learn-Project/test-platform/folder1/folder2/folder3`

再看个例子

```javascript
  path.resolve ('folder1', './folder2', 'folder3')
```
所以，输出结果就是：`/Users/user/Documents/Learn-Project/test-platform/folder1/folder2/folder3`

**再来看个难点的**

```javascript
path.resolve ('folder1', './folder2', '/folder3')

```
这个直接考验你是否真正领会到`path.resolve`的原理！

直接揭晓，我们从左右换成正常的cd操作是

```bash
cd folder1 #  进去当前目录的folder1文件夹, 此时结果为   /Users/user/Documents/Learn-Project/test-platform/folder1
cd ./folder2 # 进去当前目录的folder2文件夹 此时结果为   /Users/user/Documents/Learn-Project/test-platform/folder1/folder2
cd /folder3 # 这里要注意了，cd / 实际是回到根目录了，此时结果为  /folder3 
```
所以，输出结果就是`/folder3 `,即系统根目录下的`/folder3`目录


## 总结

- path.join 是简单拼接路径，遇到`..`就返回上一级, 遇到 `.`, `./`, `/`都一视同仁拼接当前路径
- path.resolve 是从左到右，每遇到一个参数，就跟你进行cd目录操作一样!
  
理解即无敌






