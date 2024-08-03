# CSS属性选择器
日常开发中，需要对一些符合某些规则的css类型进行样式设置，这时候就需要用到css属性选择器了。

## 具体规则


**`[attr]`**表示带有以 attr 命名的属性的元素。

**`[attr=value]`**表示带有以 attr 命名的属性，且属性值为 value 的元素。

**`[attr~=value]`**表示带有以 attr 命名的属性的元素，并且该属性是一个以空格作为分隔的值列表，其中至少有一个值为 value。

**`[attr|=value]`**表示带有以 attr 命名的属性的元素，属性值为“value”或是以“value-”为前缀（"`-`"为连字符，Unicode 编码为 U+002D）开头。典型的应用场景是用来匹配语言简写代码（如 zh-CN，zh-TW 可以用 zh 作为 value）。

**`[attr^=value]`**表示带有以 attr 命名的属性，且属性值是以 value 开头的元素。

**`[attr$=value]`**表示带有以 attr 命名的属性，且属性值是以 value 结尾的元素。

**`[attr*=value]`**表示带有以 attr 命名的属性，且属性值至少包含一个 value 值的元素。**`[*attr* *operator* *value* i]`**在属性选择器的右方括号前添加一个用空格隔开的字母 `i`（或 `I`），可以在匹配属性值时忽略大小写（支持 ASCII 字符范围之内的字母）。**`[*attr* *operator* *value* s]`** 在属性选择器的右方括号前添加一个用空格隔开的字母 `s`（或 `S`），可以在匹配属性值时区分大小写（支持 ASCII 字符范围之内的字母）。

## 参考链接：

[https://developer.mozilla.org/zh-CN/docs/Web/CSS/Attribute_selectors](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Attribute_selectors)