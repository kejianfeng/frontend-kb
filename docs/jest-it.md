在 Jest 测试框架中，`describe` 和 `it` 是两个非常重要的关键字，用于组织和编写测试用例, 但初学的时候容易疑惑两者的区别。

### `describe`

`describe` 用于组织和分组测试用例。它创建一个测试套件（test suite），可以包含多个测试用例。`describe` 接受两个参数：

1. **描述字符串**：用于描述测试套件的目的或功能。
2. **回调函数**：包含一个或多个 `it` 块，即具体的测试用例。

示例：
```javascript
describe('Calculator', () => {
  describe('addition', () => {
    it('should return 5 when adding 2 and 3', () => {
      expect(2 + 3).toBe(5);
    });

    it('should return 10 when adding 5 and 5', () => {
      expect(5 + 5).toBe(10);
    });
  });

  describe('subtraction', () => {
    it('should return 3 when subtracting 5 from 8', () => {
      expect(8 - 5).toBe(3);
    });

    it('should return -3 when subtracting 5 from 2', () => {
      expect(2 - 5).toBe(-3);
    });
  });
});
```

在这个例子中，`describe` 创建了两个测试套件：一个用于加法（addition），另一个用于减法（subtraction）。每个测试套件内部包含多个 `it` 块，即具体的测试用例。

### `it`

`it` 用于定义一个具体的测试用例。它接受两个参数：

1. **描述字符串**：用于描述测试用例的目的或功能。
2. **回调函数**：包含测试逻辑，通常使用 `expect` 断言来验证结果是否符合预期。

示例：
```javascript
it('should return 5 when adding 2 and 3', () => {
  expect(2 + 3).toBe(5);
});
```

在这个例子中，`it` 定义了一个测试用例，用于验证 `2 + 3` 是否等于 `5`。`expect` 断言用于验证结果是否符合预期。

### 总结

- `describe` 用于组织和分组测试用例，创建测试套件。
- `it` 用于定义具体的测试用例，包含测试逻辑和断言。

通过使用 `describe` 和 `it`，你可以清晰地组织和编写测试用例，使测试代码结构更清晰、更易于维护。