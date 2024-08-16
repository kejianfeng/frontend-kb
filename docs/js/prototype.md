# 运型与原型链
这个知识点可谓说JS知识点里的经典中的经典了，但时间一久又是有点遗忘，所以把一些核心的点记录一下，注意，这不是从0到1的了解，而是对一些核心点的梳理。
先放个关系总览图
![](https://image.jianfengke.com/kbprototype-flow.png)
## prototype

每个函数都有一个 prototype 属性，
这个属性是一个对象，这个对象包含了可以由特定类型的所有实例共享的属性和方法。
也就是说，当我们创建一个函数时，JavaScript会自动为这个函数创建一个 prototype 对象。


## __proto__
这是每一个JavaScript对象(除了 null )都具有的一个属性，叫__proto__，这个属性会指向该对象的原型。

## constructor
每个原型都有一个 constructor 属性，这个属性指向了构造函数。也就是说，实例的constructor属性指向了创建该实例的原型的constructor。


## 原型链？
何谓原型链？
原型链，js高程上清楚的写着，原型链是实现继承的主要方法，基本思想是利用原型让一个引用类型继承另一个引用类型的属性和方法；


## 问答

### 为什么Object.__proto__指向Function.prototype?
因为：Object其实是函数对象，是通过new Function()创建的, Function也是对象函数，通过new Function()创建

## 原型链的尽头

所以 Object.prototype.__proto__ 的值为 null 跟 Object.prototype 没有原型，其实表达了一个意思。
所以查找属性的时候查到 Object.prototype 就可以停止查找了。

## 原型链实现的真的是继承吗？
“每一个对象都会从原型‘继承’属性”，实际上，继承是一个十分具有迷惑性的说法，引用《你不知道的JavaScript》中的话，就是：

继承意味着复制操作，然而 JavaScript 默认并不会复制对象的属性，相反，JavaScript 只是在两个对象之间创建一个关联，这样，一个对象就可以通过委托访问另一个对象的属性和函数，所以与其叫继承，委托的说法反而更准确些。

## 如何创造一个没有原型
通过 Objet.create(null) 可以创建一个没有任何属性的对象，甚至没有__proto__属性，没有构造函数，什么都没又

### 参考

- [JavaScript深入之从原型到原型链](https://github.com/mqyqingfeng/Blog/issues/2)