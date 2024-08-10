注意这些工具函数的操作对象都是类型，
例如使用 `Partial`，那他的参数得要是联合类型或者说 `interface` 才行，你不能把真实对象传进去。

# Partial

`Partial<T>` 将 `T` 的所有属性变成可选的。

```typescript
/**
 * 核心实现就是通过映射类型遍历 `T` 上所有的属性，
 * 然后将每个属性设置为可选属性
 */
type Partial<T> = {
  [P in keyof T]?: T[P];
}
```

- `[P in keyof T]` 通过映射类型，遍历 `T` 上的所有属性
- `?:` 设置为属性为可选的
- `T[P]` 设置类型为原来的类型

注意，由于设置了可选，导致每个 `key` 都可能为 `undefined`。

```typescript
type EP = Partial<{
  color: string,
  age: string,
}>
```

![](https://image.jianfengke.com/20220514191252.png)

# Readonly

```typescript
/**
 * 主要实现是通过映射遍历所有 `key`，
 * 然后给每个 `key` 增加一个 `readonly` 修饰符
 */
type Readonly<T> = {
  readonly [P in keyof T]: T[P]
}
```

```typescript
/**
 * @example
 * type Eg = {
 *   readonly key1: string;
 *   readonly key2: number;
 * }
 */
type Eg = Readonly<{
  key1: string,
  key2: number,
}>

Eg 结果如图：
![](https://image.jianfengke.com/20220514191017.png)
```

# Pick

从某接口挑选若干属性并组成一个新的类型。

```typescript
type Pick<T, K extends keyof T> = {
    [P in K]: T[P];
};
```

记住 `K` 是联合类型，因为是 `keyof` 取得的类型
如：

```typescript
interface Eg2 {
  color: string,
  age: string,
}

type IPick = Pick<Eg2, 'color' | 'age'>
```

![](https://image.jianfengke.com/20220514223834.png)

# Record

核心实现就是遍历 `K`，将值设置为 `T`，记住，`K` 为联合类型，每个 `key` 的 `value` 类型均为 `T`。

```typescript
type Record<K extends keyof any, T> = {
  [P in K]: T
}
```

```typescript
/**
 * @example
 * type Eg2 = {a: B, b: B}
 */
interface A {
  a: string,
  b: number,
}
interface B {
  key1: number,
  key2: string,
}
type Eg2 = Record<keyof A, B>
```

![](https://image.jianfengke.com/20220514230655.png)

# Exclude

如意思，意为排除

`Exclude<T, U>` 提取存在于 `T`，但不存在于 `U` 的类型组成的联合类型。

```typescript
// 语法
Exclude<UnionType, ExcludedMembers>

// 定义
type Exclude<T, U> = T extends U ? never : T;
```

```typescript
type Exclude<T, U> = T extends U ? never : T
// `never` 表示一个不存在的类型
// `never` 与其他类型的联合后，是没有 `never` 的
```

一图胜千言

![](https://image.jianfengke.com/20220515014350.png)

# Extract

`Extract<T, U>` 提取联合类型 `T` 和联合类型 `U` 的所有交集。

`type Extract<T, U> = T extends U ? T : never;`

```typescript
/**
* type Eg = "key1"
*/
type Eg = Extract<'key1' | 'key2', 'key1'>
```

# Omit

通过从 `Type` 中选择所有属性然后删除 `Keys`（字符串文字或字符串文字的联合）来构造一个类型。

```typescript
Omit<Type, Keys>
```

`Omit<T, K>` 从类型 `T` 中剔除 `K` 中的所有属性。

# ConstructorParameters

`ConstructorParameters` 可以获取类的构造函数的参数类型，存在一个元组中。

### 注意

`keyof any` 得到的结果是 `string | number | symbol`，原因在于类型 `key` 的类型只能为 `string | number | symbol`

### 同态与非同态

`Partial`、`Readonly` 和 `Pick` 都属于同态的，即其实现需要输入类型 `T` 来拷贝属性，因此属性修饰符（例如 `readonly`、`?:`）都会被拷贝。

`Record` 是非同态的，不需要拷贝属性，因此不会拷贝属性修饰符

因为 `Pick`、`Partial`、`readonly` 这几个类型工具，无一例外，都是使用到了 `keyof T` 来辅助拷贝传入类型的属性。而 `Record` 的实现中，并没有遍历所有输入的类型，`K` 只是约束为 `keyof any` 的子类型即可