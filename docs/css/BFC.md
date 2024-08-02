以下是将您提供的内容整理成Markdown格式的示例：

# 前言

BFC初看比较抽象，很难理解，经常忘记，写下这篇文章加深一下学习的成果。

## 块级格式化上下文的理解

根据字面意思（块级格式化上下文）知道它是一个作用范围。这个范围特指在块盒下，其内容的位置或布局的范围。在默认情况下，整个页面只有一个块级格式化上下文(BFC), 就是根元素HTML, 所以说根元素下的所有其他元素都会在这个HTML下BFC范围中布局，永远不会超出这个规定的范围。

## 通过一个浮动的例子来理解BFC

```html
<div id="outer">
    <div id="inner"></div>
</div>
```
```css
#outer {
    width: 100px;
    border: 1px solid red;
}
#inner {
    width: 50px;
    height: 200px;
    float: left;
    background-color: blue;
}
```

效果在我们预料之中，由于子元素`inner`的浮动，使得父元素的高度坍塌，我们常常采用清除浮动来使得父元素的高度能够被正常的计算。这里使用清除浮动手段实际就是开辟一个BFC，使得在这个BFC内的一些布局、浮动能够被正常的计算和渲染。那又通过第二张图我们发现根元素HTML的高度并没有坍塌，因为我们上面提到过，页面默认会有一个BFC那就是根元素，且`body`元素、`div`元素都是在这个HTML的BFC中的, 所以根元素的高度正常的被计算出来了。

## 通过外边距重叠的例子来理解BFC

```html
<body>
    <div id="dv1"></div>
    <div id="dv2"></div>
</body>
```
```css
#dv1 {
    width: 50px;
    height: 50px;
    background-color: red;
    margin-bottom: 20px;
}
#dv2 {
    width: 50px;
    height: 50px;
    background-color: blue;
    margin-top: 20px;
}
```

有点经验的，都知道这个结果在我们的意料之中的，因为发生了外边距重叠，准确来说是垂直方向的外边距重叠。为什么会发生呢？因为这是BFC的一个特性，在同一个BFC中，子元素在垂直方向上会发生外边距重叠，外边距值取最大的，而不是相加。

## 解决外边距重叠的方案

```html
<body>
    <div id="dv1"></div>
    <div id="bfc">
        <div id="dv2"></div>
    </div>
</body>
```
```css
#dv1 {
    /* ... */
}
#dv2 {
    /* ... */
}
#bfc {
    overflow: auto;
}
```

## BFC的创建、特点、应用

### 创建

- 根元素（`<html>`）
- 浮动元素（`float` 不为 `none`）
- 绝对定位元素（`position` 为 `absolute` 或 `fixed`）
- 表格的标题和单元格（`display` 为 `table-caption`，`table-cell`）
- 匿名表格单元格元素（`display` 为 `table` 或 `inline-table`）
- 行内块元素（`display` 为 `inline-block`）
- `overflow` 的值不为 `visible` 的元素
- 弹性元素（`display` 为 `flex` 或 `inline-flex` 的元素的直接子元素）
- 网格元素（`display` 为 `grid` 或 `inline-grid` 的元素的直接子元素`）

### 特点

- BFC 内部的块级盒会在垂直方向上一个接一个排列
- 同一个 BFC 下的相邻块级元素可能发生外边距折叠，创建新的 BFC 可以避免的外边距折叠
- 每个元素的外边距盒（margin box）的左边与包含块边框盒（border box）的左边相接触（从右向左的格式化，则相反），即使存在浮动也是如此
- 浮动盒的区域不会和 BFC 重叠
- 计算 BFC 的高度时，浮动元素也会参与计算

### 应用

- 清除浮动
- 防止外边距重叠
- 自适应多栏布局

## 总结

BFC可以看出是一个独立的渲染区域，规定在这区域内其元素的定位、布局、相互作用，且并不会影响到外面，通用外面的也不会影响到内部。页面默认存在一个BFC，就是根元素HTML，也正是普通文档流。所以像脱离文档流都会产生一个BFC，也是因为脱离了HTML的BFC，自成BFC区域。
```
