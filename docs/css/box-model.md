
# 盒模型
盒模型通常分为**IE盒模型**和**W3C标准盒模型**；

### IE盒模型
主要存在于IE8之前的浏览器，在HTML页面未声明<!DOCTYPE html>的情况下，一个html元素的宽高是元素内容+元素padding+元素border相加，如下图：
![](https://cdn.nlark.com/yuque/0/2023/jpeg/535505/1674964660659-08c5e295-7647-400d-a384-997c87709f79.jpeg)
IE盒模型：
width = contentWidth + paddingLeft + paddingRight + borderLeftWidth + borderRightWidth
height = contentHeight + paddingTop + paddingBottom + borderTopWidth + borderBottomWidth
### 标准盒模型
W3C规范，标准盒模型规定，元素的宽高等于元素的内容的宽高，不包含元素的padding和border，如下图：
![](https://cdn.nlark.com/yuque/0/2023/jpeg/535505/1674964775406-a954299a-fe8d-4d57-830c-c4ff697565c4.jpeg)
标准盒模型：
width = contentWidth
height = contentHeight
### 盒模型切换
通过css3的**box-sizing**属性可以切换盒模型，box-sizing有三个值：

| **值** | **解释** |
| --- | --- |
| content-box | 标准盒模型 |
| border-box | IE盒模型 |
| inherit | 继承父元素的盒模型 |

