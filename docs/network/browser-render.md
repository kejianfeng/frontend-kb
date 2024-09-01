## 构建Dom树
过程
![dom树构建过程](https://static001.geekbang.org/resource/image/12/79/125849ec56a3ea98d4b476c66c754f79.png )


Dom可通过控制台doucument查看，DOM 和 HTML 内容几乎是一样的，但是和 HTML 不同的是，DOM 是保存在内存中树状结构，可以通过 JavaScript 来查询或修改其内容。



现在我们已经生成 DOM 树了，但是 DOM 节点的样式我们依然不知道，要让 DOM 节点拥有正确的样式，这就需要样式计算了。

## 样式计算（Recalculate Style）

### 1. 把 CSS 转换为浏览器能够理解的结构


渲染引擎会把获取到的 CSS 文本全部转换为 styleSheets 结构中的数据，并且该结构同时具备了查询和修改功能，这会为后面的样式操作提供基础.
查看styleSheets:
```
document.styleSheets
```
![](https://static001.geekbang.org/resource/image/8e/ab/8ec7d5ecfadcd05b3f1ec762223a9aab.png)

### 2. 转换样式表中的属性值，使其标准化

CSS 文本中有很多属性值，如 2em、blue、bold，这些类型数值不容易被渲染引擎理解，所以需要将所有值转换为渲染引擎容易理解的、标准化的计算值，这个过程就是属性值标准化


![](https://static001.geekbang.org/resource/image/12/60/1252c6d3c1a51714606daa6bdad3a560.png)

### 3. 计算出 DOM 树中每个节点的具体样式
创建布局树


要知道布局树跟Dom树不一样，dom树包括了完整的document对象，当然包含了那些不可见元素，如head、display为none的元素。
在显示之前，我们还要额外地构建一棵只包含可见元素布局树。布局树不包含那些不可见元素

布局树构建过程如下：
![](https://static001.geekbang.org/resource/image/8e/0e/8e48b77dd48bdc509958e73b9935710e.png)

从上图可以看出，DOM 树中所有不可见的节点都没有包含到布局树中。


## 小总结

渲染流程的前三个阶段：DOM 生成、样式计算和布局。要点可大致总结为如下：

浏览器不能直接理解 HTML 数据，所以第一步需要将其转换为浏览器能够理解的 DOM 树结构；生成 DOM 树后，还需要根据 CSS 样式表，来计算出 DOM 树所有节点的样式；最后计算 DOM 元素的布局信息，使其都保存在布局树中。



# F&Q

## CSSOM？渲染树？
和DOM不一样，在源码里面并没有CSSOM这个词，所谓CSSOM 就是styleSheets，这个styleSheets是能直观感受的到的。

渲染树也是16年之前的东西了，现在的代码完全重构了，可以把LayoutTree看成是渲染树，不过和之前的渲染树还是有一些差别的。






渲染进程总体流程：

![](https://static001.geekbang.org/resource/image/97/37/975fcbf7f83cc20d216f3d68a85d0f37.png)

结合上图，一个完整的渲染流程大致可总结为如下：
- 渲染进程将 HTML 内容转换为能够读懂的 DOM 树结构。
- 渲染引擎将 CSS 样式表转化为浏览器可以理解的 styleSheets，计算出 DOM 节点的样式。
- 创建布局树，并计算元素的布局信息。
- 对布局树进行分层，并生成分层树。
- 为每个图层生成绘制列表，并将其提交到合成线程。
- 合成线程将图层分成图块，并在光栅化线程池中将图块转换成位图。
- 合成线程发送绘制图块命令 DrawQuad 给浏览器进程。
- 浏览器进程根据 DrawQuad 消息生成页面，并显示到显示器上。


代码修改样式，如：
```
 document.querySelector('.render').style.color="green"
```
重新渲染过程如下

![](https://image.jianfengke.com/20220430154011.png)



