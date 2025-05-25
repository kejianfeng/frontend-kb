<script setup>
import BackToTop from '../components/BackToTop.vue'
</script>
# LeetCode 题目解析大全

本文档包含86道LeetCode经典题目的详细解析，每道题目都包括：题目链接、题目内容、解析、解题思路、JavaScript代码实现以及易错点分析。

## 目录

### 简单难度题目
1. [160. 相交链表](#_160-相交链表)
2. [234. 回文链表](#_234-回文链表)
3. [226. 翻转二叉树](#_226-翻转二叉树)
4. [206. 反转链表](#_206-反转链表)
5. [169. 多数元素](#_169-多数元素)
6. [141. 环形链表](#_141-环形链表)
7. [136. 只出现一次的数字](#_136-只出现一次的数字)
8. [461. 汉明距离](#_461-汉明距离)
9. [448. 找到所有数组中消失的数字](#_448-找到所有数组中消失的数字)
10. [338. 比特位计数](#_338-比特位计数)
11. [121. 买卖股票的最佳时机](#_121-买卖股票的最佳时机)
12. [283. 移动零](#_283-移动零)
13. [543. 二叉树的直径](#_543-二叉树的直径)
14. [21. 合并两个有序链表](#_21-合并两个有序链表)
15. [20. 有效的括号](#_20-有效的括号)
16. [617. 合并二叉树](#_617-合并二叉树)
17. [104. 二叉树的最大深度](#_104-二叉树的最大深度)
18. [101. 对称二叉树](#_101-对称二叉树)
19. [94. 二叉树的中序遍历](#_94-二叉树的中序遍历)
20. [70. 爬楼梯](#_70-爬楼梯)

### 中等难度题目
21. [236. 二叉树的最近公共祖先](#_236-二叉树的最近公共祖先)
22. [739. 每日温度](#_739-每日温度)
23. [221. 最大正方形](#_221-最大正方形)
24. [215. 数组中的第K个最大元素](#_215-数组中的第k个最大元素)
25. [208. 实现Trie前缀树](#_208-实现trie前缀树)
26. [207. 课程表](#_207-课程表)
27. [200. 岛屿数量](#_200-岛屿数量)
28. [198. 打家劫舍](#_198-打家劫舍)
29. [238. 除自身以外数组的乘积](#_238-除自身以外数组的乘积)
30. [155. 最小栈](#_155-最小栈)
31. [152. 乘积最大子数组](#_152-乘积最大子数组)
32. [148. 排序链表](#_148-排序链表)
33. [146. LRU缓存](#_146-lru缓存)
34. [142. 环形链表II](#_142-环形链表ii)
35. [139. 单词拆分](#_139-单词拆分)
36. [647. 回文子串](#_647-回文子串)
37. [128. 最长连续序列](#_128-最长连续序列)
38. [322. 零钱兑换](#_322-零钱兑换)
39. [494. 目标和](#_494-目标和)
40. [438. 找到字符串中所有字母异位词](#_438-找到字符串中所有字母异位词)
41. [437. 路径总和III](#_437-路径总和iii)
42. [416. 分割等和子集](#_416-分割等和子集)
43. [406. 根据身高重建队列](#_406-根据身高重建队列)
44. [399. 除法求值](#_399-除法求值)
45. [394. 字符串解码](#_394-字符串解码)
46. [347. 前K个高频元素](#_347-前k个高频元素)
47. [337. 打家劫舍III](#_337-打家劫舍iii)
48. [309. 买卖股票的最佳时机含冷冻期](#_309-买卖股票的最佳时机含冷冻期)
49. [300. 最长递增子序列](#_300-最长递增子序列)
50. [287. 寻找重复数](#_287-寻找重复数)
51. [279. 完全平方数](#_279-完全平方数)
52. [253. 会议室II](#_253-会议室ii)
53. [240. 搜索二维矩阵II](#_240-搜索二维矩阵ii)
54. [22. 括号生成](#_22-括号生成)
55. [49. 字母异位词分组](#_49-字母异位词分组)
56. [48. 旋转图像](#_48-旋转图像)
57. [46. 全排列](#_46-全排列)
58. [39. 组合总和](#_39-组合总和)
59. [34. 在排序数组中查找元素的第一个和最后一个位置](#_34-在排序数组中查找元素的第一个和最后一个位置)
60. [33. 搜索旋转排序数组](#_33-搜索旋转排序数组)
61. [31. 下一个排列](#_31-下一个排列)
62. [538. 把二叉搜索树转换为累加树](#_538-把二叉搜索树转换为累加树)
63. [560. 和为K的子数组](#_560-和为k的子数组)
64. [19. 删除链表的倒数第N个结点](#_19-删除链表的倒数第n个结点)
65. [17. 电话号码的字母组合](#_17-电话号码的字母组合)
66. [15. 三数之和](#_15-三数之和)
67. [11. 盛最多水的容器](#_11-盛最多水的容器)
68. [5. 最长回文子串](#_5-最长回文子串)
69. [3. 无重复字符的最长子串](#_3-无重复字符的最长子串)
70. [2. 两数相加](#_2-两数相加)
71. [79. 单词搜索](#_79-单词搜索)
72. [114. 二叉树展开为链表](#_114-二叉树展开为链表)
73. [621. 任务调度器](#_621-任务调度器)
74. [105. 从前序与中序遍历序列构造二叉树](#_105-从前序与中序遍历序列构造二叉树)
75. [102. 二叉树的层序遍历](#_102-二叉树的层序遍历)
76. [98. 验证二叉搜索树](#_98-验证二叉搜索树)
77. [96. 不同的二叉搜索树](#_96-不同的二叉搜索树)
78. [78. 子集](#_78-子集)
79. [75. 颜色分类](#_75-颜色分类)
80. [72. 编辑距离](#_72-编辑距离)
81. [581. 最短无序连续子数组](#_581-最短无序连续子数组)
82. [64. 最小路径和](#_64-最小路径和)
83. [62. 不同路径](#_62-不同路径)
84. [56. 合并区间](#_56-合并区间)
85. [55. 跳跃游戏](#_55-跳跃游戏)
86. [53. 最大子数组和](#_53-最大子数组和)

## 题目详解

### 160. 相交链表

#### 题目链接
[https://leetcode.cn/problems/intersection-of-two-linked-lists/](https://leetcode.cn/problems/intersection-of-two-linked-lists/)

#### 题目内容
给你两个单链表的头节点 `headA` 和 `headB`，请你找出并返回两个单链表相交的起始节点。如果两个链表不存在相交节点，返回 `null`。

图示两个链表在节点 c1 开始相交：
```
A:      a1 → a2
                ↘
                  c1 → c2 → c3
                ↗            
B: b1 → b2 → b3
```

#### 解析
两个链表相交意味着从某个节点开始，它们共享相同的节点。由于链表的特性，如果两个链表相交，那么从相交点到链表末尾的所有节点都是共享的。

#### 解题思路
1. **双指针法**：设置两个指针 pA 和 pB，分别指向 headA 和 headB。
2. 同时遍历两个链表，当 pA 到达链表 A 的末尾时，将 pA 重定向到链表 B 的头部；当 pB 到达链表 B 的末尾时，将 pB 重定向到链表 A 的头部。
3. 如果两个链表相交，pA 和 pB 最终会在相交点相遇；如果不相交，则都会变成 null。

#### 代码实现
```javascript
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    if (!headA || !headB) return null;
    
    let pA = headA;
    let pB = headB;
    
    while (pA !== pB) {
        pA = pA === null ? headB : pA.next;
        pB = pB === null ? headA : pB.next;
    }
    
    return pA; // 如果不相交，pA 和 pB 最终都会变成 null
};
```

#### 易错点
1. 忽略特殊情况：任一链表为空时，不可能相交。
2. 死循环：如果不正确处理指针的重定向，可能会导致死循环。
3. 没有考虑到链表不相交的情况：当两个链表不相交时，双指针法依然有效，最终两个指针都会变成 null。

### 234. 回文链表

#### 题目链接
[https://leetcode.cn/problems/palindrome-linked-list/](https://leetcode.cn/problems/palindrome-linked-list/)

#### 题目内容
给你一个单链表的头节点 `head`，请你判断该链表是否为回文链表。如果是，返回 `true`；否则，返回 `false`。

示例：
```
输入：head = [1,2,2,1]
输出：true
```

#### 解析
回文链表指的是链表从前往后读和从后往前读是一样的。由于单链表只能从前往后遍历，判断回文需要特殊处理。

#### 解题思路
1. **找到链表的中点**：使用快慢指针，快指针每次移动两步，慢指针每次移动一步，当快指针到达末尾时，慢指针正好在中点。
2. **反转后半部分链表**：从中点开始，将链表的后半部分反转。
3. **比较前半部分和反转后的后半部分**：同时遍历前半部分和反转后的后半部分，比较对应节点的值是否相等。
4. **（可选）恢复原链表结构**：将反转的后半部分再次反转，恢复原链表结构。

#### 代码实现
```javascript
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    if (!head || !head.next) return true;
    
    // 找到中点
    let slow = head;
    let fast = head;
    
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    
    // 反转后半部分链表
    let prev = null;
    let curr = slow;
    
    while (curr) {
        let next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    
    // 比较前半部分和反转后的后半部分
    let left = head;
    let right = prev;
    
    while (right) {
        if (left.val !== right.val) {
            return false;
        }
        left = left.next;
        right = right.next;
    }
    
    return true;
};
```

#### 易错点
1. 链表长度为0或1的边界情况：这种情况下链表一定是回文的。
2. 链表长度为奇数的情况：中点的处理需要特别注意。
3. 在比较时，只需要比较到后半部分结束即可，前半部分可能有多余节点（奇数长度的情况）。
4. 如果需要恢复原链表结构，需要再次反转后半部分链表。

### 226. 翻转二叉树

#### 题目链接
[https://leetcode.cn/problems/invert-binary-tree/](https://leetcode.cn/problems/invert-binary-tree/)

#### 题目内容
给你一棵二叉树的根节点 `root`，翻转这棵二叉树，并返回其根节点。

翻转是指交换每个节点的左右子节点。

示例：
```
输入：
     4
   /   \
  2     7
 / \   / \
1   3 6   9

输出：
     4
   /   \
  7     2
 / \   / \
9   6 3   1
```

#### 解析
翻转二叉树就是交换二叉树中每个节点的左右子树。

#### 解题思路
1. **递归法**：
   - 对于每个节点，交换其左右子节点
   - 递归地翻转左子树
   - 递归地翻转右子树
2. **迭代法**：
   - 使用队列或栈，逐层或逐深度地访问每个节点
   - 对于每个访问到的节点，交换其左右子节点

#### 代码实现（递归法）
```javascript
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if (!root) return null;
    
    // 交换左右子节点
    const temp = root.left;
    root.left = root.right;
    root.right = temp;
    
    // 递归翻转左右子树
    invertTree(root.left);
    invertTree(root.right);
    
    return root;
};
```

#### 代码实现（迭代法 - 使用队列）
```javascript
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if (!root) return null;
    
    const queue = [root];
    
    while (queue.length) {
        const node = queue.shift();
        
        // 交换左右子节点
        const temp = node.left;
        node.left = node.right;
        node.right = temp;
        
        // 将子节点加入队列
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
    }
    
    return root;
};
```

#### 易错点
1. 忘记处理空树的情况。
2. 递归过程中忘记返回根节点。
3. 在迭代方法中，要注意队列的使用和节点的访问顺序。

### 206. 反转链表

#### 题目链接
[https://leetcode.cn/problems/reverse-linked-list/](https://leetcode.cn/problems/reverse-linked-list/)

#### 题目内容
给你单链表的头节点 `head`，请你反转链表，并返回反转后的链表。

示例：
```
输入：head = [1,2,3,4,5]
输出：[5,4,3,2,1]
```

#### 解析
反转链表就是将链表中每个节点的指针方向反转，使原来指向后一个节点的指针改为指向前一个节点。

#### 解题思路
1. **迭代法**：
   - 使用三个指针：prev、curr 和 next
   - prev 初始为 null，curr 初始为 head
   - 遍历链表，对于每个节点，保存 next，然后将 curr.next 指向 prev，更新 prev 和 curr
2. **递归法**：
   - 递归地反转子链表
   - 处理当前节点的指针

#### 代码实现（迭代法）
```javascript
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let prev = null;
    let curr = head;
    
    while (curr) {
        // 保存下一个节点
        const next = curr.next;
        // 反转指针
        curr.next = prev;
        // 更新 prev 和 curr
        prev = curr;
        curr = next;
    }
    
    return prev; // 新的头节点
};
```

#### 代码实现（递归法）
```javascript
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    // 基本情况：空链表或只有一个节点
    if (!head || !head.next) {
        return head;
    }
    
    // 递归反转子链表
    const newHead = reverseList(head.next);
    
    // 处理当前节点
    head.next.next = head;
    head.next = null;
    
    return newHead;
};
```

#### 易错点
1. 迭代法中忘记保存下一个节点，导致链表断裂。
2. 递归法中没有正确处理当前节点与子链表的连接。
3. 返回错误的头节点（应返回prev而不是curr）。
4. 未考虑空链表或只有一个节点的特殊情况。

### 169. 多数元素

#### 题目链接
[https://leetcode.cn/problems/majority-element/](https://leetcode.cn/problems/majority-element/)

#### 题目内容
给定一个大小为 n 的数组 `nums`，返回其中的多数元素。多数元素是指在数组中出现次数 **大于** `⌊ n/2 ⌋` 的元素。

你可以假设数组是非空的，并且给定的数组总是存在多数元素。

示例：
```
输入：nums = [3,2,3]
输出：3

输入：nums = [2,2,1,1,1,2,2]
输出：2
```

#### 解析
多数元素在数组中出现的次数超过数组长度的一半，因此有多种解法。

#### 解题思路
1. **哈希表法**：
   - 使用哈希表记录每个元素出现的次数
   - 返回出现次数大于 n/2 的元素
2. **排序法**：
   - 将数组排序
   - 返回中间位置的元素（必定是多数元素）
3. **摩尔投票法**（最优解）：
   - 初始化候选者 candidate 和计数 count = 0
   - 遍历数组，如果 count = 0，则当前元素设为新的 candidate
   - 如果当前元素等于 candidate，则 count++，否则 count--
   - 最后返回 candidate

#### 代码实现（哈希表法）
```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const map = new Map();
    const n = nums.length;
    const threshold = Math.floor(n / 2);
    
    for (const num of nums) {
        map.set(num, (map.get(num) || 0) + 1);
        if (map.get(num) > threshold) {
            return num;
        }
    }
};
```

#### 代码实现（排序法）
```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    nums.sort((a, b) => a - b);
    return nums[Math.floor(nums.length / 2)];
};
```

#### 代码实现（摩尔投票法）
```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let candidate = null;
    let count = 0;
    
    for (const num of nums) {
        if (count === 0) {
            candidate = num;
        }
        
        count += (num === candidate) ? 1 : -1;
    }
    
    return candidate;
};
```

#### 易错点
1. 忘记初始化候选者或计数器（摩尔投票法）。
2. 在哈希表法中，忘记检查元素出现次数是否超过阈值。
3. 忽略了题目中的假设：给定的数组总是存在多数元素。
4. 在排序法中，忘记返回中间位置的元素。

### 141. 环形链表

#### 题目链接
[https://leetcode.cn/problems/linked-list-cycle/](https://leetcode.cn/problems/linked-list-cycle/)

#### 题目内容
给你一个链表的头节点 `head`，判断链表中是否有环。

如果链表中有某个节点，可以通过连续跟踪 `next` 指针再次到达，则链表中存在环。为了表示给定链表中的环，我们使用整数 `pos` 来表示链表尾连接到链表中的位置（索引从 0 开始）。如果 `pos` 是 `-1`，则在该链表中没有环。注意：`pos` 不作为参数进行传递，仅仅是为了标识链表的实际情况。

如果链表中存在环，则返回 `true`。否则，返回 `false`。

#### 解析
环形链表是指链表中某个节点的 next 指针指向了链表中的一个之前的节点，从而形成一个环。

#### 解题思路
1. **快慢指针（Floyd 判圈算法）**：
   - 设置两个指针，快指针每次移动两步，慢指针每次移动一步
   - 如果存在环，两个指针最终会相遇
   - 如果不存在环，快指针会先到达链表尾部（null）

#### 代码实现
```javascript
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    if (!head || !head.next) return false;
    
    let slow = head;
    let fast = head;
    
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        
        if (slow === fast) {
            return true; // 存在环
        }
    }
    
    return false; // 不存在环
};
```

#### 易错点
1. 忘记处理空链表或只有一个节点的情况。
2. 判断条件不正确：应该在移动指针后检查是否相遇，而不是在移动前。
3. 循环条件不完整：需要确保 fast 和 fast.next 都不为 null，否则会导致访问 null.next 的错误。

### 136. 只出现一次的数字

#### 题目链接
[https://leetcode.cn/problems/single-number/](https://leetcode.cn/problems/single-number/)

#### 题目内容
给定一个**非空**整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。

说明：你的算法应该具有线性时间复杂度。你可以不使用额外空间来实现吗？

示例：
```
输入: [2,2,1]
输出: 1

输入: [4,1,2,1,2]
输出: 4
```

#### 解析
在一个数组中，除了一个元素只出现一次外，其他元素都出现了两次，需要找出只出现一次的元素。

#### 解题思路
1. **位运算（异或）**：
   - 任何数与自身异或的结果是0：`a ^ a = 0`
   - 任何数与0异或的结果是其自身：`a ^ 0 = a`
   - 异或运算满足交换律和结合律
   - 因此，对数组中所有元素进行异或操作，结果即为只出现一次的元素

#### 代码实现
```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let result = 0;
    
    for (const num of nums) {
        result ^= num;
    }
    
    return result;
};
```

#### 易错点
1. 忘记初始化 result 为 0。
2. 不理解异或运算的性质，尝试使用其他方法，导致无法满足不使用额外空间的要求。
3. 假设数组可能为空，而题目明确说明数组是非空的。

### 461. 汉明距离

#### 题目链接
[https://leetcode.cn/problems/hamming-distance/](https://leetcode.cn/problems/hamming-distance/)

#### 题目内容
两个整数之间的 [汉明距离](https://baike.baidu.com/item/%E6%B1%89%E6%98%8E%E8%B7%9D%E7%A6%BB) 指的是这两个数字对应二进制位不同的位置的数目。

给你两个整数 `x` 和 `y`，计算并返回它们之间的汉明距离。

示例：
```
输入：x = 1, y = 4
输出：2
解释：
1   (0 0 0 1)
4   (0 1 0 0)
       ↑   ↑
上面的箭头指出了对应二进制位不同的位置。
```

#### 解析
汉明距离是衡量两个等长字符串对应位置上不同字符的个数。对于整数，我们考虑它们的二进制表示，计算有多少个对应的二进制位不同。

#### 解题思路
1. **异或 + 位计数**：
   - 对两个数进行异或操作，结果中为1的位表示原数字对应位不同
   - 计算异或结果中1的个数即为汉明距离

#### 代码实现
```javascript
/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    // 异或操作
    let xor = x ^ y;
    
    // 计算1的个数
    let count = 0;
    while (xor > 0) {
        count += xor & 1; // 检查最低位是否为1
        xor >>= 1; // 右移一位
    }
    
    return count;
};
```

#### 更简洁的实现
```javascript
/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    return (x ^ y).toString(2).replace(/0/g, '').length;
};
```

#### 易错点
1. 忘记对异或结果计数，而是直接返回异或结果。
2. 在计算1的个数时，使用错误的位操作或循环条件。
3. 在使用库函数时（如简洁实现中的toString和replace），未考虑到可能的性能影响。

### 448. 找到所有数组中消失的数字

#### 题目链接
[https://leetcode.cn/problems/find-all-numbers-disappeared-in-an-array/](https://leetcode.cn/problems/find-all-numbers-disappeared-in-an-array/)

#### 题目内容
给你一个含 n 个整数的数组 nums，其中 nums[i] 在区间 [1, n] 内。请你找出所有在 [1, n] 范围内但没有出现在 nums 中的数字，并以数组的形式返回结果。

示例：
```
输入：nums = [4,3,2,7,8,2,3,1]
输出：[5,6]

输入：nums = [1,1]
输出：[2]
```

#### 解析
数组长度为n，元素范围在[1, n]内，需要找出在这个范围内但没有出现在数组中的数字。

#### 解题思路
1. **原地标记法**：
   - 遍历数组，将每个数对应的索引位置上的数标记为负数
   - 再次遍历数组，如果某个位置上的数是正数，说明对应的索引+1没有出现过

#### 代码实现
```javascript
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    const n = nums.length;
    const result = [];
    
    // 将每个数对应的索引位置上的数标记为负数
    for (let i = 0; i < n; i++) {
        const index = Math.abs(nums[i]) - 1; // 获取索引
        if (nums[index] > 0) {
            nums[index] = -nums[index]; // 标记为负数
        }
    }
    
    // 找出正数位置对应的数字
    for (let i = 0; i < n; i++) {
        if (nums[i] > 0) {
            result.push(i + 1);
        }
    }
    
    return result;
};
```

#### 易错点
1. 没有考虑数组中可能有重复元素的情况，导致重复标记。
2. 在标记过程中，忘记取绝对值，导致索引计算错误。
3. 最终结果计算时，忘记将索引转换为对应的数字（需要加1）。
4. 修改原数组可能不符合某些特定的要求，但题目并未禁止。

### 338. 比特位计数

#### 题目链接
[https://leetcode.cn/problems/counting-bits/](https://leetcode.cn/problems/counting-bits/)

#### 题目内容
给你一个整数 n，对于 0 <= i <= n 中的每个 i，计算其二进制表示中 1 的个数，返回一个长度为 n + 1 的数组 ans 作为答案。

示例：
```
输入：n = 2
输出：[0,1,1]
解释：
0 --> 0
1 --> 1
2 --> 10

输入：n = 5
输出：[0,1,1,2,1,2]
解释：
0 --> 0
1 --> 1
2 --> 10
3 --> 11
4 --> 100
5 --> 101
```

#### 解析
计算从0到n的每个整数的二进制表示中1的个数。

#### 解题思路
1. **直接计数法**：对每个数字直接计算其二进制表示中1的个数。
2. **动态规划 + 最低有效位**：`P(x) = P(x / 2) + (x mod 2)`
3. **动态规划 + 最后设置位**：`P(x) = P(x & (x-1)) + 1`

#### 代码实现（动态规划 + 最低有效位）
```javascript
/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    const ans = new Array(n + 1).fill(0);
    
    for (let i = 1; i <= n; i++) {
        // i >> 1 相当于 i / 2
        // i & 1 相当于 i % 2，检查最低位是否为1
        ans[i] = ans[i >> 1] + (i & 1);
    }
    
    return ans;
};
```

#### 代码实现（动态规划 + 最后设置位）
```javascript
/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    const ans = new Array(n + 1).fill(0);
    
    for (let i = 1; i <= n; i++) {
        // i & (i-1) 将 i 的最后一个1变为0
        ans[i] = ans[i & (i-1)] + 1;
    }
    
    return ans;
};
```

#### 易错点
1. 初始化数组时，长度应为n+1，而不是n。
2. 在动态规划中，状态转移方程使用错误，导致计算结果不正确。
3. 忘记处理i=0的特殊情况（虽然在我们的代码中，默认初始化为0正好符合要求）。
4. 对位操作不熟悉，导致位运算错误。

### 121. 买卖股票的最佳时机

#### 题目链接
[https://leetcode.cn/problems/best-time-to-buy-and-sell-stock/](https://leetcode.cn/problems/best-time-to-buy-and-sell-stock/)

#### 题目内容
给定一个数组 `prices`，它的第 `i` 个元素 `prices[i]` 表示一支给定股票第 `i` 天的价格。

你只能选择 **某一天** 买入这只股票，并选择在 **未来的某一个不同的日子** 卖出该股票。设计一个算法来计算你所能获取的最大利润。

返回你可以从这笔交易中获取的最大利润。如果你不能获取任何利润，返回 0 。

示例：
```
输入：[7,1,5,3,6,4]
输出：5
解释：在第 2 天（股票价格 = 1）的时候买入，在第 5 天（股票价格 = 6）的时候卖出，最大利润 = 6-1 = 5 。
     注意利润不能是 7-1 = 6, 因为卖出价格需要大于买入价格；同时，你不能在买入前卖出股票。

输入：prices = [7,6,4,3,1]
输出：0
解释：在这种情况下, 没有交易完成, 所以最大利润为 0。
```

#### 解析
这道题要求在一个价格数组中，找出两个价格（买入价和卖出价），使得卖出价减去买入价的差值最大，且卖出时间必须在买入时间之后。

#### 解题思路
1. **贪心算法**：
   - 记录遍历过程中的最低价格 minPrice
   - 对于每个价格，计算如果在当前价格卖出能获得的利润，并更新最大利润 maxProfit
   - 同时更新最低价格 minPrice

#### 代码实现
```javascript
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if (prices.length <= 1) return 0;
    
    let minPrice = prices[0];
    let maxProfit = 0;
    
    for (let i = 1; i < prices.length; i++) {
        // 如果当前价格比记录的最低价格还低，更新最低价格
        if (prices[i] < minPrice) {
            minPrice = prices[i];
        } 
        // 计算当前利润，并更新最大利润
        else {
            const currentProfit = prices[i] - minPrice;
            maxProfit = Math.max(maxProfit, currentProfit);
        }
    }
    
    return maxProfit;
};
```

#### 更简洁的实现
```javascript
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let minPrice = Infinity;
    let maxProfit = 0;
    
    for (const price of prices) {
        minPrice = Math.min(minPrice, price);
        maxProfit = Math.max(maxProfit, price - minPrice);
    }
    
    return maxProfit;
};
```

#### 易错点
1. 没有处理数组长度小于等于1的边界情况。
2. 初始化最低价格为第一个价格，而不是正无穷。
3. 更新最大利润的逻辑错误，例如只在价格上升时计算利润。
4. 忘记更新最低价格，导致计算的利润不准确。

### 283. 移动零

#### 题目链接
[https://leetcode.cn/problems/move-zeroes/](https://leetcode.cn/problems/move-zeroes/)

#### 题目内容
给定一个数组 `nums`，编写一个函数将所有 `0` 移动到数组的末尾，同时保持非零元素的相对顺序。

请注意，必须在不复制数组的情况下原地对数组进行操作。

示例：
```
输入: nums = [0,1,0,3,12]
输出: [1,3,12,0,0]

输入: nums = [0]
输出: [0]
```

#### 解析
这道题要求将数组中所有的0移动到数组末尾，同时保持非0元素的相对顺序，且必须在原数组上操作。

#### 解题思路
1. **双指针法**：
   - 使用一个指针 `slow` 指向当前应该放置非0元素的位置
   - 使用另一个指针 `fast` 遍历数组
   - 当 `fast` 指向的元素不为0时，将其移动到 `slow` 位置，然后 `slow` 前进一步
   - 最后，将 `slow` 后面的所有元素设置为0

#### 代码实现
```javascript
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let slow = 0; // 指向下一个应该放置非零元素的位置
    
    // 第一步：将所有非零元素移到数组前面
    for (let fast = 0; fast < nums.length; fast++) {
        if (nums[fast] !== 0) {
            nums[slow] = nums[fast];
            slow++;
        }
    }
    
    // 第二步：将剩余位置填充为0
    for (let i = slow; i < nums.length; i++) {
        nums[i] = 0;
    }
};
```

#### 更优的实现（一次遍历）
```javascript
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let slow = 0; // 指向下一个应该放置非零元素的位置
    
    for (let fast = 0; fast < nums.length; fast++) {
        if (nums[fast] !== 0) {
            // 交换 slow 和 fast 位置的元素
            [nums[slow], nums[fast]] = [nums[fast], nums[slow]];
            slow++;
        }
    }
};
```

#### 易错点
1. 在移动非0元素时，没有正确更新 `slow` 指针。
2. 忘记将剩余位置填充为0。
3. 使用交换操作时，如果 `slow` 和 `fast` 指向同一位置，会导致不必要的交换操作。
4. 对于全是0或全是非0的数组，没有特殊处理（虽然算法本身能处理这些情况）。

### 543. 二叉树的直径

#### 题目链接
[https://leetcode.cn/problems/diameter-of-binary-tree/](https://leetcode.cn/problems/diameter-of-binary-tree/)

#### 题目内容
给定一棵二叉树，你需要计算它的直径长度。一棵二叉树的直径长度是任意两个结点路径长度中的最大值。这条路径可能穿过也可能不穿过根结点。

示例：
```
给定二叉树
          1
         / \
        2   3
       / \     
      4   5    
返回 3, 它的长度是路径 [4,2,1,3] 或者 [5,2,1,3]。
```

注意：两结点之间的路径长度是以边的数目表示。

#### 解析
二叉树的直径是指树中任意两个节点之间最长路径的长度。这条路径可能穿过根节点，也可能不穿过。

#### 解题思路
1. **深度优先搜索（DFS）**：
   - 对于每个节点，计算经过它的最长路径长度，即左子树的深度 + 右子树的深度
   - 更新全局最大直径
   - 返回以该节点为根的子树的深度（左右子树最大深度 + 1）

#### 代码实现
```javascript
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
    let maxDiameter = 0;
    
    // 计算节点的深度
    const depth = (node) => {
        if (!node) return 0;
        
        // 计算左右子树的深度
        const leftDepth = depth(node.left);
        const rightDepth = depth(node.right);
        
        // 更新最大直径
        maxDiameter = Math.max(maxDiameter, leftDepth + rightDepth);
        
        // 返回以该节点为根的子树的深度
        return Math.max(leftDepth, rightDepth) + 1;
    };
    
    depth(root);
    
    return maxDiameter;
};
```

#### 易错点
1. 混淆节点深度和高度的概念。
2. 忘记更新全局最大直径变量。
3. 在计算直径时，忘记考虑路径可能不经过根节点的情况。
4. 返回的深度计算错误，应该是左右子树最大深度加1，而不是左右子树深度之和。

### 21. 合并两个有序链表

#### 题目链接
[https://leetcode.cn/problems/merge-two-sorted-lists/](https://leetcode.cn/problems/merge-two-sorted-lists/)

#### 题目内容
将两个升序链表合并为一个新的 **升序** 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 

示例：
```
输入：l1 = [1,2,4], l2 = [1,3,4]
输出：[1,1,2,3,4,4]

输入：l1 = [], l2 = []
输出：[]

输入：l1 = [], l2 = [0]
输出：[0]
```

#### 解析
合并两个有序链表，就是将两个链表的节点按顺序合并成一个新的链表，并保持升序特性。

#### 解题思路
1. **迭代法**：
   - 创建一个哑节点（dummy node）作为新链表的头部
   - 使用指针 `curr` 指向当前新链表的末尾
   - 比较两个链表当前节点的值，将较小的节点接到新链表末尾
   - 移动相应的指针，直到其中一个链表遍历完
   - 将另一个链表剩余部分接到新链表末尾

2. **递归法**：
   - 比较两个链表当前节点的值，选择较小的节点作为合并后链表的当前节点
   - 递归地合并剩余部分

#### 代码实现（迭代法）
```javascript
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    // 创建哑节点，简化边界情况处理
    const dummy = new ListNode(-1);
    let curr = dummy;
    
    while (list1 && list2) {
        if (list1.val <= list2.val) {
            curr.next = list1;
            list1 = list1.next;
        } else {
            curr.next = list2;
            list2 = list2.next;
        }
        curr = curr.next;
    }
    
    // 连接剩余链表
    curr.next = list1 ? list1 : list2;
    
    return dummy.next;
};
```

#### 代码实现（递归法）
```javascript
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    // 基本情况
    if (!list1) return list2;
    if (!list2) return list1;
    
    // 递归合并
    if (list1.val <= list2.val) {
        list1.next = mergeTwoLists(list1.next, list2);
        return list1;
    } else {
        list2.next = mergeTwoLists(list1, list2.next);
        return list2;
    }
};
```

#### 易错点
1. 没有使用哑节点，导致处理链表头部的逻辑复杂。
2. 忘记更新指针，导致无限循环。
3. 在连接剩余链表时，没有判断哪个链表还有剩余节点。
4. 递归法中，基本情况的判断不完整，可能导致递归无法终止。

### 20. 有效的括号

#### 题目链接
[https://leetcode.cn/problems/valid-parentheses/](https://leetcode.cn/problems/valid-parentheses/)

#### 题目内容
给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。

有效字符串需满足：
1. 左括号必须用相同类型的右括号闭合。
2. 左括号必须以正确的顺序闭合。
3. 每个右括号都有一个对应的相同类型的左括号。

示例：
```
输入：s = "()"
输出：true

输入：s = "()[]{}"
输出：true

输入：s = "(]"
输出：false
```

#### 解析
这道题是判断括号匹配是否有效，需要确保每种类型的左括号都有一个相应的右括号与之匹配，且顺序正确。

#### 解题思路
1. **栈**：
   - 遇到左括号，将其推入栈中
   - 遇到右括号，将其与栈顶的左括号进行匹配：
     - 如果匹配成功，弹出栈顶元素
     - 如果匹配失败，或栈为空，则返回 false
   - 最后，如果栈为空，则所有括号都匹配成功，返回 true；否则返回 false

#### 代码实现
```javascript
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];
    const map = {
        ')': '(',
        '}': '{',
        ']': '['
    };
    
    for (const char of s) {
        // 如果是右括号
        if (char in map) {
            // 如果栈为空，或栈顶元素与当前右括号不匹配
            if (stack.length === 0 || stack[stack.length - 1] !== map[char]) {
                return false;
            }
            // 匹配成功，弹出栈顶元素
            stack.pop();
        } else {
            // 如果是左括号，推入栈中
            stack.push(char);
        }
    }
    
    // 如果栈为空，则所有括号都匹配成功
    return stack.length === 0;
};
```

#### 易错点
1. 忘记检查栈是否为空，直接访问栈顶元素，可能导致索引越界。
2. 括号匹配规则不正确，例如将 '(' 与 ']' 匹配。
3. 字符串为空时的处理，虽然空字符串是有效的。
4. 忘记检查最终栈是否为空，只关注了遍历过程中的匹配。

### 617. 合并二叉树

#### 题目链接
[https://leetcode.cn/problems/merge-two-binary-trees/](https://leetcode.cn/problems/merge-two-binary-trees/)

#### 题目内容
给你两棵二叉树：`root1` 和 `root2`。想象一下，当你将其中一棵覆盖到另一棵之上时，两棵树上的一些节点将会重叠（而另一些不会）。你需要将这两棵树合并成一棵新二叉树。合并的规则是：如果两个节点重叠，那么将这两个节点的值相加作为合并后节点的新值；否则，**不为** null 的节点将直接作为新二叉树的节点。

返回合并后的二叉树。

注意: 合并过程必须从两个树的根节点开始。

示例：
```
输入：root1 = [1,3,2,5], root2 = [2,1,3,null,4,null,7]
输出：[3,4,5,5,4,null,7]
```

#### 解析
这道题要求合并两个二叉树，重叠的节点值相加，不重叠的节点直接使用非空节点。

#### 解题思路
1. **递归法**：
   - 如果其中一个节点为空，返回另一个节点
   - 如果两个节点都不为空，创建一个新节点，其值为两个节点的值之和
   - 递归处理左右子树
   - 返回合并后的新节点

2. **迭代法（使用队列）**：
   - 使用队列，同时遍历两棵树
   - 对于每对节点，如果都不为空，则合并它们并将其子节点加入队列
   - 如果其中一个为空，使用非空节点

#### 代码实现（递归法）
```javascript
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function(root1, root2) {
    // 如果其中一个节点为空，返回另一个节点
    if (!root1) return root2;
    if (!root2) return root1;
    
    // 创建新节点，值为两节点之和
    const newNode = new TreeNode(root1.val + root2.val);
    
    // 递归合并左右子树
    newNode.left = mergeTrees(root1.left, root2.left);
    newNode.right = mergeTrees(root1.right, root2.right);
    
    return newNode;
};
```

#### 代码实现（迭代法）
```javascript
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function(root1, root2) {
    if (!root1) return root2;
    if (!root2) return root1;
    
    const queue = [[root1, root2]];
    
    while (queue.length) {
        const [node1, node2] = queue.shift();
        
        // 合并当前节点值
        node1.val += node2.val;
        
        // 处理左子节点
        if (node1.left && node2.left) {
            queue.push([node1.left, node2.left]);
        } else if (!node1.left) {
            node1.left = node2.left;
        }
        
        // 处理右子节点
        if (node1.right && node2.right) {
            queue.push([node1.right, node2.right]);
        } else if (!node1.right) {
            node1.right = node2.right;
        }
    }
    
    return root1;
};
```

#### 易错点
1. 忘记处理节点为空的情况。
2. 在递归中返回错误的节点。
3. 在迭代实现中，忘记合并节点值。
4. 在迭代实现中，队列中应该存储节点对，而不是单个节点。

### 104. 二叉树的最大深度

#### 题目链接
[https://leetcode.cn/problems/maximum-depth-of-binary-tree/](https://leetcode.cn/problems/maximum-depth-of-binary-tree/)

#### 题目内容
给定一个二叉树，找出其最大深度。

二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。

说明: 叶子节点是指没有子节点的节点。

示例：
```
给定二叉树 [3,9,20,null,null,15,7]，

    3
   / \
  9  20
    /  \
   15   7
返回它的最大深度 3 。
```

#### 解析
二叉树的最大深度是从根节点到最远叶子节点的最长路径上的节点数量。

#### 解题思路
1. **递归法**：
   - 如果节点为空，深度为0
   - 否则，深度为左右子树的最大深度加1

2. **迭代法（层序遍历）**：
   - 使用队列进行层序遍历
   - 记录遍历的层数，即为最大深度

#### 代码实现（递归法）
```javascript
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    if (!root) return 0;
    
    const leftDepth = maxDepth(root.left);
    const rightDepth = maxDepth(root.right);
    
    return Math.max(leftDepth, rightDepth) + 1;
};
```

#### 代码实现（迭代法）
```javascript
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    if (!root) return 0;
    
    const queue = [root];
    let depth = 0;
    
    while (queue.length) {
        const size = queue.length; // 当前层的节点数
        depth++; // 层数加1
        
        // 处理当前层的所有节点
        for (let i = 0; i < size; i++) {
            const node = queue.shift();
            
            // 将子节点加入队列
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
    }
    
    return depth;
};
```

#### 易错点
1. 忘记处理空树的情况。
2. 在递归中计算深度时，忘记加1（表示当前节点）。
3. 在迭代实现中，没有正确计算每一层的节点数。
4. 在迭代实现中，忘记增加深度计数。

### 101. 对称二叉树

#### 题目链接
[https://leetcode.cn/problems/symmetric-tree/](https://leetcode.cn/problems/symmetric-tree/)

#### 题目内容
给你一个二叉树的根节点 `root`，检查它是否轴对称。

示例：
```
输入：root = [1,2,2,3,4,4,3]
输出：true

    1
   / \
  2   2
 / \ / \
3  4 4  3
```

#### 解析
对称二叉树是指二叉树沿着根节点为轴心对称，左子树和右子树镜像对称。

#### 解题思路
1. **递归法**：
   - 创建一个辅助函数，用于检查两个子树是否镜像对称
   - 两个子树镜像对称的条件是：
     - 根节点值相同
     - 左子树的左子树与右子树的右子树镜像对称
     - 左子树的右子树与右子树的左子树镜像对称

2. **迭代法**：
   - 使用队列，同时比较左右子树的对应节点
   - 每次取出两个节点，比较它们的值
   - 然后按照镜像对称的顺序将子节点加入队列

#### 代码实现（递归法）
```javascript
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    if (!root) return true;
    
    // 辅助函数，检查两个子树是否镜像对称
    const isMirror = (left, right) => {
        // 如果两个节点都为空，则对称
        if (!left && !right) return true;
        // 如果只有一个节点为空，则不对称
        if (!left || !right) return false;
        // 如果两个节点的值不同，则不对称
        if (left.val !== right.val) return false;
        
        // 递归检查：左子树的左子树与右子树的右子树，左子树的右子树与右子树的左子树
        return isMirror(left.left, right.right) && isMirror(left.right, right.left);
    };
    
    return isMirror(root.left, root.right);
};
```

#### 代码实现（迭代法）
```javascript
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    if (!root) return true;
    
    const queue = [root.left, root.right];
    
    while (queue.length) {
        const left = queue.shift();
        const right = queue.shift();
        
        // 如果两个节点都为空，继续检查下一对
        if (!left && !right) continue;
        // 如果只有一个节点为空，或两节点值不同，则不对称
        if (!left || !right || left.val !== right.val) return false;
        
        // 按镜像对称顺序将子节点加入队列
        queue.push(left.left, right.right);
        queue.push(left.right, right.left);
    }
    
    return true;
};
```

#### 易错点
1. 在判断对称时，忘记检查节点值是否相等。
2. 递归终止条件不完整，没有处理节点为空的情况。
3. 在迭代实现中，没有正确地将节点按镜像对称顺序加入队列。
4. 忘记处理空树的情况，虽然空树也是对称的。

### 94. 二叉树的中序遍历

#### 题目链接
[https://leetcode.cn/problems/binary-tree-inorder-traversal/](https://leetcode.cn/problems/binary-tree-inorder-traversal/)

#### 题目内容
给定一个二叉树的根节点 `root`，返回它的 **中序** 遍历。

示例：
```
输入：root = [1,null,2,3]
输出：[1,3,2]

  1
   \
    2
   /
  3
```

#### 解析
二叉树的中序遍历是指按照 "左子树-根节点-右子树" 的顺序访问二叉树中的所有节点。

#### 解题思路
1. **递归法**：
   - 递归遍历左子树
   - 访问根节点
   - 递归遍历右子树

2. **迭代法**：
   - 使用栈来模拟递归过程
   - 先将所有左子节点入栈
   - 出栈访问节点，并将右子节点的所有左子节点入栈

3. **Morris 遍历**（进阶，不使用栈）：
   - 利用线索二叉树的思想，使用节点的右子节点指针暂时指向其后继节点

#### 代码实现（递归法）
```javascript
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    const result = [];
    
    const inorder = (node) => {
        if (!node) return;
        
        // 遍历左子树
        inorder(node.left);
        // 访问根节点
        result.push(node.val);
        // 遍历右子树
        inorder(node.right);
    };
    
    inorder(root);
    return result;
};
```

#### 代码实现（迭代法）
```javascript
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    const result = [];
    const stack = [];
    let curr = root;
    
    while (curr || stack.length) {
        // 将所有左子节点入栈
        while (curr) {
            stack.push(curr);
            curr = curr.left;
        }
        
        // 出栈访问节点
        curr = stack.pop();
        result.push(curr.val);
        
        // 处理右子节点
        curr = curr.right;
    }
    
    return result;
};
```

#### 代码实现（Morris 遍历）
```javascript
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    const result = [];
    let curr = root;
    
    while (curr) {
        if (!curr.left) {
            // 没有左子树，访问当前节点，然后转向右子树
            result.push(curr.val);
            curr = curr.right;
        } else {
            // 找到当前节点在中序遍历中的前驱节点（左子树的最右节点）
            let predecessor = curr.left;
            while (predecessor.right && predecessor.right !== curr) {
                predecessor = predecessor.right;
            }
            
            if (!predecessor.right) {
                // 第一次访问，将前驱节点的右指针指向当前节点，然后转向左子树
                predecessor.right = curr;
                curr = curr.left;
            } else {
                // 第二次访问，还原前驱节点的右指针，访问当前节点，然后转向右子树
                predecessor.right = null;
                result.push(curr.val);
                curr = curr.right;
            }
        }
    }
    
    return result;
};
```

#### 易错点
1. 在递归或迭代实现中，遍历顺序错误，不符合中序遍历的 "左-根-右" 顺序。
2. 在迭代实现中，栈的使用不正确，导致节点访问顺序错误。
3. 在 Morris 遍历中，没有正确找到前驱节点或没有正确还原树的结构。
4. 忘记处理空树的情况。

### 70. 爬楼梯

#### 题目链接
[https://leetcode.cn/problems/climbing-stairs/](https://leetcode.cn/problems/climbing-stairs/)

#### 题目内容
假设你正在爬楼梯。需要 n 阶你才能到达楼顶。

每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？

示例：
```
输入：n = 2
输出：2
解释：有两种方法可以爬到楼顶。
1. 1 阶 + 1 阶
2. 2 阶

输入：n = 3
输出：3
解释：有三种方法可以爬到楼顶。
1. 1 阶 + 1 阶 + 1 阶
2. 1 阶 + 2 阶
3. 2 阶 + 1 阶
```

#### 解析
这是一个经典的动态规划问题。关键思路是：要到达第n阶，可以从第n-1阶爬1步上来，或者从第n-2阶爬2步上来。

#### 解题思路
1. **动态规划**：
   - 定义状态：dp[i] 表示爬到第i阶的不同方法数
   - 状态转移方程：dp[i] = dp[i-1] + dp[i-2]
   - 初始状态：dp[1] = 1, dp[2] = 2

2. **优化空间复杂度**：
   - 由于当前状态只依赖于前两个状态，可以只用两个变量而不是数组

3. **数学方法**：
   - 实际上是斐波那契数列，可以用通项公式直接计算

#### 代码实现（动态规划）
```javascript
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if (n <= 2) return n;
    
    const dp = new Array(n + 1);
    dp[1] = 1;
    dp[2] = 2;
    
    for (let i = 3; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    
    return dp[n];
};
```

#### 代码实现（优化空间）
```javascript
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if (n <= 2) return n;
    
    let prev = 1; // dp[1]
    let curr = 2; // dp[2]
    
    for (let i = 3; i <= n; i++) {
        const next = prev + curr;
        prev = curr;
        curr = next;
    }
    
    return curr;
};
```

#### 易错点
1. 初始条件设置错误，比如 dp[0] 的值。
2. 忘记处理 n <= 2 的边界情况。
3. 动态规划数组下标与楼梯阶数不一致，导致计算错误。
4. 在空间优化版本中，变量更新顺序错误，导致结果不正确。

### 236. 二叉树的最近公共祖先

#### 题目链接
[https://leetcode.cn/problems/lowest-common-ancestor-of-a-binary-tree/](https://leetcode.cn/problems/lowest-common-ancestor-of-a-binary-tree/)

#### 题目内容
给定一个二叉树, 找到该树中两个指定节点的最近公共祖先。

[百度百科](https://baike.baidu.com/item/%E6%9C%80%E8%BF%91%E5%85%AC%E5%85%B1%E7%A5%96%E5%85%88/8918834?fr=aladdin)中最近公共祖先的定义为："对于有根树 T 的两个节点 p、q，最近公共祖先表示为一个节点 x，满足 x 是 p、q 的祖先且 x 的深度尽可能大（**一个节点也可以是它自己的祖先**）。"

示例：
```
输入：root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
输出：3
解释：节点 5 和节点 1 的最近公共祖先是节点 3 。

输入：root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4
输出：5
解释：节点 5 和节点 4 的最近公共祖先是节点 5 。因为根据定义最近公共祖先节点可以为节点本身。
```

#### 解析
最近公共祖先(LCA)是指在一个树中，距离两个节点最近的共同祖先节点。在二叉树中，节点的祖先包括节点本身。

#### 解题思路
1. **递归法**：
   - 如果根节点是null或者是p或q中的一个，则返回根节点
   - 递归地在左子树和右子树中查找p和q
   - 如果左子树和右子树的结果都不为null，说明p和q分别在根节点的两侧，根节点就是LCA
   - 如果只有左子树有结果，则返回左子树的结果；右子树同理

#### 代码实现
```javascript
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    // 基本情况
    if (!root || root === p || root === q) {
        return root;
    }
    
    // 递归查找左右子树
    const left = lowestCommonAncestor(root.left, p, q);
    const right = lowestCommonAncestor(root.right, p, q);
    
    // 如果左右子树的结果都不为null，说明p和q分别在两侧，当前节点就是LCA
    if (left && right) {
        return root;
    }
    
    // 如果只有一边有结果，返回那一边的结果
    return left ? left : right;
};
```

#### 易错点
1. 忘记处理根节点为null或者根节点就是p或q的情况。
2. 没有正确理解LCA的定义，尤其是"一个节点也可以是它自己的祖先"这一点。
3. 递归返回值的逻辑判断错误，例如没有考虑p和q分别在根节点两侧的情况。
4. 假设p和q一定存在于树中，而题目中可能并不保证这一点（虽然这道题确实假设了p和q存在于树中）。

### 739. 每日温度

#### 题目链接
[https://leetcode.cn/problems/daily-temperatures/](https://leetcode.cn/problems/daily-temperatures/)

#### 题目内容
给定一个整数数组 `temperatures`，表示每天的温度，返回一个数组 `answer`，其中 `answer[i]` 是指对于第 `i` 天，下一个更高温度出现在几天后。如果气温在这之后都不会升高，请在该位置用 `0` 来代替。

示例：
```
输入: temperatures = [73,74,75,71,69,72,76,73]
输出: [1,1,4,2,1,1,0,0]

输入: temperatures = [30,40,50,60]
输出: [1,1,1,0]

输入: temperatures = [30,60,90]
输出: [1,1,0]
```

#### 解析
这个问题要求找出每天需要等待多少天才能遇到更高的温度。如果之后的温度都不会更高，则记为0。

#### 解题思路
1. **暴力法**：对于每一天，向后遍历找到第一个更高的温度，计算天数差。
2. **单调栈**：
   - 维护一个单调递减的栈，栈中存储温度的下标
   - 当遇到比栈顶温度高的温度时，可以计算栈顶温度的等待天数
   - 不断弹出栈顶元素并计算结果，直到栈为空或当前温度不再高于栈顶温度

#### 代码实现（单调栈）
```javascript
/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    const n = temperatures.length;
    const answer = new Array(n).fill(0);
    const stack = []; // 单调递减栈，存储下标
    
    for (let i = 0; i < n; i++) {
        // 当前温度大于栈顶温度时，计算栈顶温度的等待天数
        while (stack.length > 0 && temperatures[i] > temperatures[stack[stack.length - 1]]) {
            const prevIndex = stack.pop();
            answer[prevIndex] = i - prevIndex;
        }
        
        // 将当前温度的下标入栈
        stack.push(i);
    }
    
    return answer;
};
```

#### 易错点
1. 单调栈存储的是下标而不是温度值，这一点容易混淆。
2. 忘记初始化结果数组为0，导致未处理的位置（温度不会升高的天数）没有正确的值。
3. 计算天数差时，使用了错误的公式。
4. 栈的使用不熟练，例如栈的弹出和入栈操作顺序错误。

### 221. 最大正方形

#### 题目链接
[https://leetcode.cn/problems/maximal-square/](https://leetcode.cn/problems/maximal-square/)

#### 题目内容
在一个由 `'0'` 和 `'1'` 组成的二维矩阵内，找到只包含 `'1'` 的最大正方形，并返回其面积。

示例：
```
输入：matrix = [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]
输出：4

输入：matrix = [["0","1"],["1","0"]]
输出：1

输入：matrix = [["0"]]
输出：0
```

#### 解析
这个问题要求在二维矩阵中找到由'1'组成的最大正方形，并返回其面积。

#### 解题思路
1. **动态规划**：
   - 定义dp[i][j]为以(i,j)为右下角的最大正方形的边长
   - 状态转移方程：如果matrix[i][j] = '1'，那么dp[i][j] = min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1]) + 1
   - 否则，dp[i][j] = 0
   - 最后返回最大边长的平方

#### 代码实现
```javascript
/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
    if (!matrix || matrix.length === 0 || matrix[0].length === 0) {
        return 0;
    }
    
    const m = matrix.length;
    const n = matrix[0].length;
    const dp = Array(m).fill().map(() => Array(n).fill(0));
    
    let maxSide = 0;
    
    // 初始化第一行和第一列
    for (let i = 0; i < m; i++) {
        if (matrix[i][0] === '1') {
            dp[i][0] = 1;
            maxSide = 1;
        }
    }
    
    for (let j = 0; j < n; j++) {
        if (matrix[0][j] === '1') {
            dp[0][j] = 1;
            maxSide = 1;
        }
    }
    
    // 填充dp数组
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (matrix[i][j] === '1') {
                dp[i][j] = Math.min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1]) + 1;
                maxSide = Math.max(maxSide, dp[i][j]);
            }
        }
    }
    
    return maxSide * maxSide;
};
```

#### 优化空间复杂度的实现
```javascript
/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
    if (!matrix || matrix.length === 0 || matrix[0].length === 0) {
        return 0;
    }
    
    const m = matrix.length;
    const n = matrix[0].length;
    const dp = Array(n).fill(0);
    
    let maxSide = 0;
    let prev = 0; // 代表dp[i-1][j-1]
    
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            let temp = dp[j]; // 保存当前dp[j]，用于下一次迭代
            
            if (i === 0 || j === 0 || matrix[i][j] === '0') {
                dp[j] = matrix[i][j] === '1' ? 1 : 0;
            } else {
                dp[j] = Math.min(dp[j], dp[j-1], prev) + 1;
            }
            
            maxSide = Math.max(maxSide, dp[j]);
            prev = temp; // 更新prev为上一个状态的dp[j]
        }
    }
    
    return maxSide * maxSide;
};
```

#### 易错点
1. 动态规划状态定义不清晰，比如没有明确dp[i][j]的含义是以(i,j)为右下角的正方形的边长。
2. 状态转移方程错误，忘记取三者的最小值。
3. 初始化不正确，尤其是第一行和第一列的初始化。
4. 忘记处理矩阵为空的情况。
5. 在空间优化版本中，prev的更新时机错误，导致结果不正确。

### 215. 数组中的第K个最大元素

#### 题目链接
[https://leetcode.cn/problems/kth-largest-element-in-an-array/](https://leetcode.cn/problems/kth-largest-element-in-an-array/)

#### 题目内容
给定整数数组 `nums` 和整数 `k`，请返回数组中第 `k` 个最大的元素。

请注意，你需要找的是数组排序后的第 `k` 个最大的元素，而不是第 `k` 个不同的元素。

你必须设计并实现时间复杂度为 `O(n)` 的算法解决此问题。

示例：
```
输入: [3,2,1,5,6,4], k = 2
输出: 5

输入: [3,2,3,1,2,4,5,5,6], k = 4
输出: 4
```

#### 解析
这个问题要求找出数组中按大小排序后的第k大元素。

#### 解题思路
1. **排序法**：将数组排序，直接返回第k大的元素。时间复杂度O(nlogn)。
2. **堆排序**：维护一个大小为k的最小堆，最后堆顶元素就是第k大元素。时间复杂度O(nlogk)。
3. **快速选择**：类似快速排序的思想，平均时间复杂度O(n)。

#### 代码实现（快速选择）
```javascript
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    // 快速选择算法
    return quickSelect(nums, 0, nums.length - 1, nums.length - k);
};

function quickSelect(nums, left, right, k) {
    if (left === right) return nums[left];
    
    // 选择pivot并分区
    const pivotIndex = partition(nums, left, right);
    
    // 根据pivotIndex与k的关系，决定向左还是向右继续查找
    if (pivotIndex === k) {
        return nums[pivotIndex];
    } else if (pivotIndex < k) {
        return quickSelect(nums, pivotIndex + 1, right, k);
    } else {
        return quickSelect(nums, left, pivotIndex - 1, k);
    }
}

function partition(nums, left, right) {
    // 随机选择pivot，减少最坏情况的概率
    const randomIndex = left + Math.floor(Math.random() * (right - left + 1));
    [nums[left], nums[randomIndex]] = [nums[randomIndex], nums[left]];
    
    const pivot = nums[left];
    let i = left + 1;
    let j = right;
    
    // 分区过程
    while (true) {
        while (i <= j && nums[i] <= pivot) i++;
        while (i <= j && nums[j] > pivot) j--;
        
        if (i > j) break;
        
        // 交换nums[i]和nums[j]
        [nums[i], nums[j]] = [nums[j], nums[i]];
    }
    
    // 将pivot放到正确的位置
    [nums[left], nums[j]] = [nums[j], nums[left]];
    
    return j;
}
```

#### 代码实现（堆排序）
```javascript
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    // 创建一个最小堆
    const minHeap = new MinHeap();
    
    // 将前k个元素加入堆
    for (let i = 0; i < k; i++) {
        minHeap.insert(nums[i]);
    }
    
    // 对于剩余元素，如果大于堆顶，则替换堆顶
    for (let i = k; i < nums.length; i++) {
        if (nums[i] > minHeap.peek()) {
            minHeap.extractMin();
            minHeap.insert(nums[i]);
        }
    }
    
    // 返回堆顶元素
    return minHeap.peek();
};

// 最小堆实现
class MinHeap {
    constructor() {
        this.heap = [];
    }
    
    getParentIndex(i) {
        return Math.floor((i - 1) / 2);
    }
    
    getLeftChildIndex(i) {
        return 2 * i + 1;
    }
    
    getRightChildIndex(i) {
        return 2 * i + 2;
    }
    
    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }
    
    siftUp(i) {
        const parentIndex = this.getParentIndex(i);
        if (parentIndex >= 0 && this.heap[parentIndex] > this.heap[i]) {
            this.swap(i, parentIndex);
            this.siftUp(parentIndex);
        }
    }
    
    siftDown(i) {
        const leftChildIndex = this.getLeftChildIndex(i);
        const rightChildIndex = this.getRightChildIndex(i);
        let minIndex = i;
        
        if (leftChildIndex < this.heap.length && this.heap[leftChildIndex] < this.heap[minIndex]) {
            minIndex = leftChildIndex;
        }
        
        if (rightChildIndex < this.heap.length && this.heap[rightChildIndex] < this.heap[minIndex]) {
            minIndex = rightChildIndex;
        }
        
        if (minIndex !== i) {
            this.swap(i, minIndex);
            this.siftDown(minIndex);
        }
    }
    
    insert(val) {
        this.heap.push(val);
        this.siftUp(this.heap.length - 1);
    }
    
    peek() {
        return this.heap[0];
    }
    
    extractMin() {
        if (this.heap.length === 1) {
            return this.heap.pop();
        }
        
        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.siftDown(0);
        return min;
    }
}
```

#### 易错点
1. 快速选择算法中，partition函数的实现错误，导致分区不正确。
2. 忘记将问题转化为寻找第(n-k)小的元素。
3. 快速选择算法中，递归的边界条件处理不当。
4. 堆排序实现中，堆的操作（siftUp和siftDown）实现错误。
5. 对于重复元素的处理不当，影响结果正确性。

### 208. 实现 Trie (前缀树)

#### 题目链接
[https://leetcode.cn/problems/implement-trie-prefix-tree/](https://leetcode.cn/problems/implement-trie-prefix-tree/)

#### 题目内容
Trie（发音类似 "try"）或者说 前缀树 是一种树形数据结构，用于高效地存储和检索字符串数据集中的键。这一数据结构有相当多的应用情景，例如自动补完和拼写检查。

请你实现 Trie 类：
- `Trie()` 初始化前缀树对象。
- `void insert(String word)` 向前缀树中插入字符串 `word`。
- `boolean search(String word)` 如果字符串 `word` 在前缀树中，返回 `true`（即，在检索之前已经插入）；否则，返回 `false`。
- `boolean startsWith(String prefix)` 如果之前已经插入的字符串 `word` 的前缀之一为 `prefix`，返回 `true`；否则，返回 `false`。

示例：
```
输入
["Trie", "insert", "search", "search", "startsWith", "insert", "search"]
[[], ["apple"], ["apple"], ["app"], ["app"], ["app"], ["app"]]
输出
[null, null, true, false, true, null, true]

解释
Trie trie = new Trie();
trie.insert("apple");
trie.search("apple");   // 返回 True
trie.search("app");     // 返回 False
trie.startsWith("app"); // 返回 True
trie.insert("app");
trie.search("app");     // 返回 True
```

#### 解析
Trie（前缀树）是一种树形数据结构，用于存储和检索字符串集合，支持快速查找、插入和删除操作。

#### 解题思路
1. **节点设计**：
   - 每个节点包含一个布尔值，表示是否是某个单词的结尾
   - 每个节点包含多个子节点（通常使用哈希表或数组表示）

2. **操作实现**：
   - `insert`：逐个字符插入，最后标记结束节点
   - `search`：逐个字符查找，检查最后节点是否标记为单词结尾
   - `startsWith`：逐个字符查找，不需要检查是否为单词结尾

#### 代码实现
```javascript
/**
 * Initialize your data structure here.
 */
var Trie = function() {
    this.root = {};
};

/**
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let node = this.root;
    
    for (const char of word) {
        if (!node[char]) {
            node[char] = {};
        }
        node = node[char];
    }
    
    // 标记单词结束
    node.isEnd = true;
};

/**
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    const node = this.findNode(word);
    return node !== null && node.isEnd === true;
};

/**
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    return this.findNode(prefix) !== null;
};

/**
 * 查找节点的辅助函数
 * @param {string} str
 * @return {object|null}
 */
Trie.prototype.findNode = function(str) {
    let node = this.root;
    
    for (const char of str) {
        if (!node[char]) {
            return null;
        }
        node = node[char];
    }
    
    return node;
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
```

#### 易错点
1. 在实现`search`方法时，忘记检查节点是否标记为单词结尾。
2. 在`insert`方法中，忘记为最后一个字符的节点添加结束标记。
3. 没有正确处理节点不存在的情况，导致访问空节点的属性时出错。
4. 没有为查找节点封装一个通用的辅助函数，导致代码重复。

### 207. 课程表

#### 题目链接
[https://leetcode.cn/problems/course-schedule/](https://leetcode.cn/problems/course-schedule/)

#### 题目内容
你这个学期必须选修 `numCourses` 门课程，记为 `0` 到 `numCourses - 1`。

在选修某些课程之前需要一些先修课程。先修课程按数组 `prerequisites` 给出，其中 `prerequisites[i] = [ai, bi]` ，表示如果要学习课程 `ai` 则 **必须** 先学习课程 `bi`。

例如，先修课程对 `[0, 1]` 表示：想要学习课程 `0`，你需要先完成课程 `1`。

请你判断是否可能完成所有课程的学习？如果可以，返回 `true`；否则，返回 `false`。

示例：
```
输入：numCourses = 2, prerequisites = [[1,0]]
输出：true
解释：总共有 2 门课程。学习课程 1 之前，你需要完成课程 0。这是可能的。

输入：numCourses = 2, prerequisites = [[1,0],[0,1]]
输出：false
解释：总共有 2 门课程。学习课程 1 之前，你需要先完成课程 0；并且学习课程 0 之前，你还应先完成课程 1。这是不可能的。
```

#### 解析
这是一个典型的判断有向图是否存在环的问题。课程及其先修课程可以看作有向图中的节点和边，如果存在环，说明课程间存在循环依赖，无法完成所有课程。

#### 解题思路
1. **拓扑排序（BFS方法）**：
   - 构建邻接表表示课程依赖关系
   - 计算每个节点的入度（有多少课程依赖它）
   - 将所有入度为0的节点（没有先修课程的课程）加入队列
   - 不断从队列中取出节点，减少其相邻节点的入度，将新的入度为0的节点加入队列
   - 如果最终访问的节点数等于课程总数，说明可以完成所有课程

2. **深度优先搜索（DFS方法）**：
   - 构建邻接表表示课程依赖关系
   - 对每个未访问的节点进行DFS
   - 使用标记数组记录节点状态（未访问、访问中、已访问）
   - 如果在DFS过程中遇到"访问中"的节点，说明存在环，返回false

#### 代码实现（BFS方法）
```javascript
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    // 构建邻接表和入度数组
    const adjacencyList = Array(numCourses).fill().map(() => []);
    const inDegree = Array(numCourses).fill(0);
    
    // 填充邻接表和入度数组
    for (const [course, prerequisite] of prerequisites) {
        adjacencyList[prerequisite].push(course);
        inDegree[course]++;
    }
    
    // 将所有入度为0的节点加入队列
    const queue = [];
    for (let i = 0; i < numCourses; i++) {
        if (inDegree[i] === 0) {
            queue.push(i);
        }
    }
    
    let count = 0; // 记录访问的节点数
    
    // BFS
    while (queue.length) {
        const current = queue.shift();
        count++;
        
        // 减少相邻节点的入度
        for (const next of adjacencyList[current]) {
            inDegree[next]--;
            // 如果入度变为0，加入队列
            if (inDegree[next] === 0) {
                queue.push(next);
            }
        }
    }
    
    // 如果访问的节点数等于课程总数，说明可以完成所有课程
    return count === numCourses;
};
```

#### 代码实现（DFS方法）
```javascript
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    // 构建邻接表
    const adjacencyList = Array(numCourses).fill().map(() => []);
    
    // 填充邻接表
    for (const [course, prerequisite] of prerequisites) {
        adjacencyList[prerequisite].push(course);
    }
    
    // 标记数组：0-未访问，1-访问中，2-已访问
    const visited = Array(numCourses).fill(0);
    
    // DFS检查是否有环
    const hasCycle = (course) => {
        // 如果节点在当前路径上被访问过，说明有环
        if (visited[course] === 1) return true;
        // 如果节点已经被完全访问过，说明没有环
        if (visited[course] === 2) return false;
        
        // 标记为访问中
        visited[course] = 1;
        
        // 递归访问所有相邻节点
        for (const next of adjacencyList[course]) {
            if (hasCycle(next)) {
                return true;
            }
        }
        
        // 标记为已访问
        visited[course] = 2;
        return false;
    };
    
    // 对每个未访问的节点进行DFS
    for (let i = 0; i < numCourses; i++) {
        if (visited[i] === 0) {
            if (hasCycle(i)) {
                return false;
            }
        }
    }
    
    return true;
};
```

#### 易错点
1. 在构建邻接表时，弄错了依赖关系的方向。
2. 在BFS方法中，忘记更新入度或者队列操作不正确。
3. 在DFS方法中，节点状态标记错误或忘记标记。
4. 返回值逻辑错误，例如在DFS中发现环时应该返回false而不是true。
5. 在计算可访问节点数时，逻辑错误导致结果不正确。

### 200. 岛屿数量

#### 题目链接
[https://leetcode.cn/problems/number-of-islands/](https://leetcode.cn/problems/number-of-islands/)

#### 题目内容
给你一个由 `'1'`（陆地）和 `'0'`（水）组成的二维网格，请你计算网格中岛屿的数量。

岛屿总是被水包围，并且每座岛屿只能由水平方向和/或竖直方向上相邻的陆地连接形成。

此外，你可以假设该网格的四条边均被水包围。

示例：
```
输入：grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
输出：1

输入：grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]
输出：3
```

#### 解析
这是一个典型的连通分量计数问题。网格中的每个陆地（'1'）可以向四个方向延伸，所有相连的陆地形成一个岛屿。需要计算这样的岛屿有多少个。

#### 解题思路
1. **深度优先搜索（DFS）**：
   - 遍历网格中的每个单元格
   - 如果遇到陆地（'1'），进行DFS，将与之相连的所有陆地标记为已访问（通常通过修改原网格值为'0'实现）
   - 每次开始一次新的DFS，岛屿计数加1

2. **广度优先搜索（BFS）**：
   - 同样遍历网格中的每个单元格
   - 如果遇到陆地，使用队列进行BFS，将与之相连的所有陆地标记为已访问
   - 每次开始一次新的BFS，岛屿计数加1

3. **并查集（Union-Find）**：
   - 将所有陆地视为节点
   - 如果两个陆地相邻，则将它们合并为同一个集合
   - 最终，计算不同集合的数量即为岛屿数量

#### 代码实现（DFS）
```javascript
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    if (!grid || grid.length === 0) return 0;
    
    const m = grid.length;
    const n = grid[0].length;
    let count = 0;
    
    // DFS标记相连的陆地
    const dfs = (i, j) => {
        // 边界检查
        if (i < 0 || i >= m || j < 0 || j >= n || grid[i][j] === '0') {
            return;
        }
        
        // 标记为已访问
        grid[i][j] = '0';
        
        // 访问四个方向的相邻单元格
        dfs(i + 1, j);
        dfs(i - 1, j);
        dfs(i, j + 1);
        dfs(i, j - 1);
    };
    
    // 遍历网格
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === '1') {
                count++; // 发现新岛屿
                dfs(i, j); // 标记整个岛屿
            }
        }
    }
    
    return count;
};
```

#### 代码实现（BFS）
```javascript
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    if (!grid || grid.length === 0) return 0;
    
    const m = grid.length;
    const n = grid[0].length;
    let count = 0;
    
    // 四个方向：上、右、下、左
    const directions = [[-1, 0], [0, 1], [1, 0], [0, -1]];
    
    // BFS标记相连的陆地
    const bfs = (i, j) => {
        const queue = [[i, j]];
        grid[i][j] = '0'; // 标记为已访问
        
        while (queue.length) {
            const [row, col] = queue.shift();
            
            // 访问四个方向的相邻单元格
            for (const [dr, dc] of directions) {
                const newRow = row + dr;
                const newCol = col + dc;
                
                // 边界检查
                if (newRow >= 0 && newRow < m && newCol >= 0 && newCol < n && grid[newRow][newCol] === '1') {
                    queue.push([newRow, newCol]);
                    grid[newRow][newCol] = '0'; // 标记为已访问
                }
            }
        }
    };
    
    // 遍历网格
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === '1') {
                count++; // 发现新岛屿
                bfs(i, j); // 标记整个岛屿
            }
        }
    }
    
    return count;
};
```

#### 易错点
1. 没有进行边界检查，导致数组越界。
2. 在DFS或BFS中没有正确标记已访问的单元格，导致无限递归或死循环。
3. 理解题目时，混淆了岛屿的定义，例如对角线相邻的陆地是否属于同一岛屿。
4. 忘记处理空网格的特殊情况。
5. 在BFS实现中，队列操作不正确或方向数组定义错误。

### 198. 打家劫舍

#### 题目链接
[https://leetcode.cn/problems/house-robber/](https://leetcode.cn/problems/house-robber/)

#### 题目内容
你是一个专业的小偷，计划偷窃沿街的房屋。每间房内都藏有一定的现金，影响你偷窃的唯一制约因素就是相邻的房屋装有相互连通的防盗系统，**如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警**。

给定一个代表每个房屋存放金额的非负整数数组，计算你 **不触动警报装置的情况下** ，一夜之内能够偷窃到的最高金额。

示例：
```
输入：[1,2,3,1]
输出：4
解释：偷窃 1 号房屋 (金额 = 1) ，然后偷窃 3 号房屋 (金额 = 3)。
     偷窃到的最高金额 = 1 + 3 = 4 。

输入：[2,7,9,3,1]
输出：12
解释：偷窃 1 号房屋 (金额 = 2), 偷窃 3 号房屋 (金额 = 9)，接着偷窃 5 号房屋 (金额 = 1)。
     偷窃到的最高金额 = 2 + 9 + 1 = 12 。
```

#### 解析
这是一个经典的动态规划问题。关键约束是不能同时偷相邻的两家，需要在每家的时候决定偷还是不偷。

#### 解题思路
1. **动态规划**：
   - 定义状态：dp[i] 表示前i个房屋能偷到的最大金额
   - 状态转移方程：dp[i] = max(dp[i-1], dp[i-2] + nums[i-1])
     - dp[i-1]：不偷第i个房屋
     - dp[i-2] + nums[i-1]：偷第i个房屋（nums是0-indexed，所以第i个房屋对应nums[i-1]）
   - 初始状态：dp[0] = 0, dp[1] = nums[0]

2. **空间优化**：
   - 由于当前状态只依赖于前两个状态，可以使用两个变量代替数组

#### 代码实现（动态规划）
```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if (!nums || nums.length === 0) return 0;
    if (nums.length === 1) return nums[0];
    
    const n = nums.length;
    const dp = new Array(n + 1);
    
    dp[0] = 0;
    dp[1] = nums[0];
    
    for (let i = 2; i <= n; i++) {
        dp[i] = Math.max(dp[i-1], dp[i-2] + nums[i-1]);
    }
    
    return dp[n];
};
```

#### 代码实现（空间优化）
```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if (!nums || nums.length === 0) return 0;
    if (nums.length === 1) return nums[0];
    
    let prev2 = 0; // dp[i-2]
    let prev1 = nums[0]; // dp[i-1]
    
    for (let i = 1; i < nums.length; i++) {
        const current = Math.max(prev1, prev2 + nums[i]);
        prev2 = prev1;
        prev1 = current;
    }
    
    return prev1;
};
```

#### 易错点
1. 动态规划状态定义不清晰，例如混淆dp[i]的含义。
2. 状态转移方程错误，例如忘记考虑不偷第i个房屋的情况。
3. 数组索引错误，例如在访问nums[i]时没有考虑到dp数组和nums数组的索引偏移。
4. 边界条件处理不当，例如没有考虑空数组或只有一个元素的数组。
5. 在空间优化版本中，变量更新顺序错误，导致结果不正确。

### 238. 除自身以外数组的乘积

#### 题目链接
[https://leetcode.cn/problems/product-of-array-except-self/](https://leetcode.cn/problems/product-of-array-except-self/)

#### 题目内容
给你一个整数数组 `nums`，返回 *数组 `answer`，其中 `answer[i]` 等于 `nums` 中除 `nums[i]` 之外其余各元素的乘积*。

题目数据保证数组 `nums` 之中任意元素的全部前缀元素和后缀的乘积都在 32 位整数范围内。

请**不要使用除法**，且在 O(n) 时间复杂度内完成此题。

示例：
```
输入: nums = [1,2,3,4]
输出: [24,12,8,6]

输入: nums = [-1,1,0,-3,3]
输出: [0,0,9,0,0]
```

#### 解析
这道题要求计算数组中除当前元素外其他所有元素的乘积，且不能使用除法，需要在O(n)时间复杂度内完成。

#### 解题思路
1. **前缀乘积和后缀乘积**：
   - 计算每个位置的前缀乘积（左边所有元素的乘积）
   - 计算每个位置的后缀乘积（右边所有元素的乘积）
   - 对于每个位置i，answer[i] = 前缀乘积[i-1] * 后缀乘积[i+1]

2. **空间优化**：
   - 可以先在answer数组中存储前缀乘积
   - 然后用一个变量跟踪后缀乘积，从右到左更新answer数组

#### 代码实现
```javascript
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const n = nums.length;
    const answer = new Array(n);
    
    // 计算前缀乘积
    answer[0] = 1;
    for (let i = 1; i < n; i++) {
        answer[i] = answer[i-1] * nums[i-1];
    }
    
    // 计算后缀乘积并更新answer
    let suffixProduct = 1;
    for (let i = n - 1; i >= 0; i--) {
        answer[i] *= suffixProduct;
        suffixProduct *= nums[i];
    }
    
    return answer;
};
```

#### 易错点
1. 没有正确理解题目要求，使用了除法或者没有达到O(n)时间复杂度。
2. 前缀乘积或后缀乘积的计算错误，导致结果不正确。
3. 在计算前缀乘积时，没有正确初始化第一个元素为1。
4. 在计算后缀乘积时，更新answer和更新suffixProduct的顺序错误。
5. 没有考虑数组中包含0的情况，虽然题目保证结果在32位整数范围内。

### 155. 最小栈

#### 题目链接
[https://leetcode.cn/problems/min-stack/](https://leetcode.cn/problems/min-stack/)

#### 题目内容
设计一个支持 `push`，`pop`，`top` 操作，并能在常数时间内检索到最小元素的栈。

实现 `MinStack` 类:
- `MinStack()` 初始化堆栈对象。
- `void push(int val)` 将元素val推入堆栈。
- `void pop()` 删除堆栈顶部的元素。
- `int top()` 获取堆栈顶部的元素。
- `int getMin()` 获取堆栈中的最小元素。

示例：
```
输入：
["MinStack","push","push","push","getMin","pop","top","getMin"]
```

#### 题目内容
给你链表的头结点 `head`，请将其按 **升序** 排列并返回 **排序后的链表**。

示例：
```
输入：head = [4,2,1,3]
输出：[1,2,3,4]

输入：head = [-1,5,3,4,0]
输出：[-1,0,3,4,5]

输入：head = []
输出：[]
```

#### 解析
这道题要求对链表进行排序，并且要求时间复杂度为O(nlogn)，空间复杂度为O(1)。

#### 解题思路
1. **归并排序（自顶向下）**：
   - 使用快慢指针找到链表中点，将链表分为两半
   - 递归地对两半链表进行排序
   - 合并两个已排序的链表
   - 这种方法的空间复杂度是O(logn)，因为递归调用栈的深度是logn

2. **归并排序（自底向上）**：
   - 先两两合并长度为1的链表，然后两两合并长度为2的链表，依此类推
   - 这种方法的空间复杂度是O(1)，符合题目要求

#### 代码实现（自顶向下的归并排序）
```javascript
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function(head) {
    // 基本情况：空链表或只有一个节点
    if (!head || !head.next) {
        return head;
    }
    
    // 使用快慢指针找到中点
    let slow = head;
    let fast = head.next;
    
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    
    // 分割链表
    const mid = slow.next;
    slow.next = null;
    
    // 递归排序两半
    const left = sortList(head);
    const right = sortList(mid);
    
    // 合并已排序的链表
    return merge(left, right);
};

// 合并两个已排序的链表
function merge(l1, l2) {
    const dummy = new ListNode(-1);
    let current = dummy;
    
    while (l1 && l2) {
        if (l1.val < l2.val) {
            current.next = l1;
            l1 = l1.next;
        } else {
            current.next = l2;
            l2 = l2.next;
        }
        current = current.next;
    }
    
    // 连接剩余部分
    current.next = l1 ? l1 : l2;
    
    return dummy.next;
}
```

#### 代码实现（自底向上的归并排序）
```javascript
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function(head) {
    if (!head || !head.next) return head;
    
    // 计算链表长度
    let length = 0;
    let current = head;
    while (current) {
        length++;
        current = current.next;
    }
    
    const dummy = new ListNode(-1);
    dummy.next = head;
    
    // 自底向上归并
    for (let size = 1; size < length; size *= 2) {
        let prev = dummy;
        current = dummy.next;
        
        while (current) {
            // 第一个子链表的头
            const left = current;
            
            // 切分第一个子链表
            let i = 1;
            while (i < size && current.next) {
                current = current.next;
                i++;
            }
            
            // 第二个子链表的头
            const right = current.next;
            current.next = null;
            
            // 切分第二个子链表
            current = right;
            i = 1;
            while (i < size && current && current.next) {
                current = current.next;
                i++;
            }
            
            // 保存下一轮的起点
            let next = null;
            if (current) {
                next = current.next;
                current.next = null;
            }
            
            // 合并两个子链表
            prev.next = merge(left, right);
            
            // 移动prev到合并后链表的末尾
            while (prev.next) {
                prev = prev.next;
            }
            
            // 继续下一轮
            current = next;
        }
    }
    
    return dummy.next;
};
```

#### 易错点
1. 在分割链表时，需要将第一个链表的尾部设置为null，否则会形成环。
2. 在使用快慢指针找中点时，初始化和循环条件不正确，导致中点位置错误。
3. 在自底向上的归并排序中，子链表的切分逻辑复杂，容易出错。
4. 没有正确处理空链表或只有一个节点的特殊情况。
5. 在合并两个已排序链表时，没有正确连接剩余部分。

### 146. LRU缓存

#### 题目链接
[https://leetcode.cn/problems/lru-cache/](https://leetcode.cn/problems/lru-cache/)

#### 题目内容
设计一个支持 `get` 和 `put` 操作的 LRU (最近最少使用) 缓存机制。

实现 `LRUCache` 类：
- `LRUCache(int capacity)` 以 **正整数** 作为容量 `capacity` 初始化 LRU 缓存
- `int get(int key)` 如果关键字 `key` 存在于缓存中，则返回关键字的值，否则返回 `-1`。
- `void put(int key, int value)` 如果关键字 `key` 已经存在，则变更其数据值 `value`；如果不存在，则向缓存中插入该组 `key-value`。如果插入操作导致关键字数量超过 `capacity`，则应该 **逐出** 最久未使用的关键字。

函数 `get` 和 `put` 必须以 `O(1)` 的平均时间复杂度运行。

示例：
```
输入
["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]
[[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]]
输出
[null, null, null, 1, null, -1, null, -1, 3, 4]

解释
LRUCache lRUCache = new LRUCache(2);
lRUCache.put(1, 1); // 缓存是 {1=1}
lRUCache.put(2, 2); // 缓存是 {1=1, 2=2}
lRUCache.get(1);    // 返回 1
lRUCache.put(3, 3); // 该操作会使得关键字 2 作废，缓存是 {1=1, 3=3}
lRUCache.get(2);    // 返回 -1 (未找到)
lRUCache.put(4, 4); // 该操作会使得关键字 1 作废，缓存是 {4=4, 3=3}
lRUCache.get(1);    // 返回 -1 (未找到)
lRUCache.get(3);    // 返回 3
lRUCache.get(4);    // 返回 4
```

#### 解析
LRU（Least Recently Used）缓存是一种缓存淘汰算法，最近最少使用的数据会被淘汰。实现LRU缓存需要能够快速访问缓存中的数据，并且能够跟踪数据的使用顺序。

#### 解题思路
1. **哈希表 + 双向链表**：
   - 使用哈希表存储键值对，实现O(1)时间的查找
   - 使用双向链表维护数据的使用顺序，最近使用的放在链表头部，最久未使用的放在链表尾部
   - 当进行get或put操作时，将访问的节点移到链表头部
   - 当缓存满时，删除链表尾部的节点

#### 代码实现
```javascript
/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.capacity = capacity;
    this.cache = new Map(); // 存储键值对
    this.head = {}; // 虚拟头节点
    this.tail = {}; // 虚拟尾节点
    
    // 初始化双向链表
    this.head.next = this.tail;
    this.tail.prev = this.head;
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if (!this.cache.has(key)) {
        return -1;
    }
    
    // 获取节点
    const node = this.cache.get(key);
    
    // 将节点移动到链表头部（表示最近使用）
    this.removeNode(node);
    this.addToHead(node);
    
    return node.value;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    // 如果key已存在，更新值并移到链表头部
    if (this.cache.has(key)) {
        const node = this.cache.get(key);
        node.value = value;
        this.removeNode(node);
        this.addToHead(node);
        return;
    }
    
    // 如果缓存已满，删除最久未使用的节点（链表尾部）
    if (this.cache.size >= this.capacity) {
        const tailNode = this.tail.prev;
        this.removeNode(tailNode);
        this.cache.delete(tailNode.key);
    }
    
    // 创建新节点并添加到链表头部
    const newNode = { key, value };
    this.addToHead(newNode);
    this.cache.set(key, newNode);
};

// 从链表中删除节点
LRUCache.prototype.removeNode = function(node) {
    node.prev.next = node.next;
        this.moveToHead(node);
    } else {
        const newNode = new ListNode(key, value);
        this.cache.set(key, newNode);
        this.addToHead(newNode);
        if (this.cache.size > this.capacity) {
            const tail = this.removeTail();
            this.cache.delete(tail.key);
        }
    }
};

LRUCache.prototype.moveToHead = function(node) {
    this.removeNode(node);
    this.addToHead(node);
};

LRUCache.prototype.removeNode = function(node) {
    node.prev.next = node.next;
    node.next.prev = node.prev;
};

LRUCache.prototype.addToHead = function(node) {
    node.prev = this.head;
    node.next = this.head.next;
    this.head.next.prev = node;
    this.head.next = node;
};

LRUCache.prototype.removeTail = function() {
    const tail = this.tail.prev;
    this.removeNode(tail);
    return tail;
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
```

#### 易错点
1. 在实现双向链表时，要注意节点的prev和next指针的更新。
2. 在实现LRU缓存机制时，要注意缓存容量满时的淘汰策略。
3. 在实现put操作时，要注意将数据移动到链表头。
4. 在实现get操作时，要注意将数据移动到链表头。

### 148. 排序链表

#### 题目链接
[https://leetcode.cn/problems/sort-list/](https://leetcode.cn/problems/sort-list/)

#### 题目内容
给你链表的头结点 `head`，请将其按 **升序** 排列并返回 **排序后的链表**。

示例：
```
输入：head = [4,2,1,3]
输出：[1,2,3,4]

输入：head = [-1,5,3,4,0]
输出：[-1,0,3,4,5]

输入：head = []
输出：[]
```

#### 解析
这道题要求对链表进行排序，并且要求时间复杂度为O(nlogn)，空间复杂度为O(1)。

#### 解题思路
1. **归并排序（自顶向下）**：
   - 使用快慢指针找到链表中点，将链表分为两半
   - 递归地对两半链表进行排序
   - 合并两个已排序的链表
   - 这种方法的空间复杂度是O(logn)，因为递归调用栈的深度是logn

2. **归并排序（自底向上）**：
   - 先两两合并长度为1的链表，然后两两合并长度为2的链表，依此类推
   - 这种方法的空间复杂度是O(1)，符合题目要求

#### 代码实现（自顶向下的归并排序）
```javascript
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function(head) {
    // 基本情况：空链表或只有一个节点
    if (!head || !head.next) {
        return head;
    }
    
    // 使用快慢指针找到中点
    let slow = head;
    let fast = head.next;
    
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    
    // 分割链表
    const mid = slow.next;
    slow.next = null;
    
    // 递归排序两半
    const left = sortList(head);
    const right = sortList(mid);
    
    // 合并已排序的链表
    return merge(left, right);
};

// 合并两个已排序的链表
function merge(l1, l2) {
    const dummy = new ListNode(-1);
    let current = dummy;
    
    while (l1 && l2) {
        if (l1.val < l2.val) {
            current.next = l1;
            l1 = l1.next;
        } else {
            current.next = l2;
            l2 = l2.next;
        }
        current = current.next;
    }
    
    // 连接剩余部分
    current.next = l1 ? l1 : l2;
    
    return dummy.next;
}
```

#### 代码实现（自底向上的归并排序）
```javascript
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function(head) {
    if (!head || !head.next) return head;
    
    // 计算链表长度
    let length = 0;
    let current = head;
    while (current) {
        length++;
        current = current.next;
    }
    
    const dummy = new ListNode(-1);
    dummy.next = head;
    
    // 自底向上归并
    for (let size = 1; size < length; size *= 2) {
        let prev = dummy;
        current = dummy.next;
        
        while (current) {
            // 第一个子链表的头
            const left = current;
            
            // 切分第一个子链表
            let i = 1;
            while (i < size && current.next) {
                current = current.next;
                i++;
            }
            
            // 第二个子链表的头
            const right = current.next;
            current.next = null;
            
            // 切分第二个子链表
            current = right;
            i = 1;
            while (i < size && current && current.next) {
                current = current.next;
                i++;
            }
            
            // 保存下一轮的起点
            let next = null;
            if (current) {
                next = current.next;
                current.next = null;
            }
            
            // 合并两个子链表
            prev.next = merge(left, right);
            
            // 移动prev到合并后链表的末尾
            while (prev.next) {
                prev = prev.next;
            }
            
            // 继续下一轮
            current = next;
        }
    }
    
    return dummy.next;
};
```

#### 易错点
1. 在分割链表时，需要将第一个链表的尾部设置为null，否则会形成环。
2. 在使用快慢指针找中点时，初始化和循环条件不正确，导致中点位置错误。
3. 在自底向上的归并排序中，子链表的切分逻辑复杂，容易出错。
4. 没有正确处理空链表或只有一个节点的特殊情况。
5. 在合并两个已排序链表时，没有正确连接剩余部分。

### 142. 环形链表II

#### 题目链接
[https://leetcode.cn/problems/linked-list-cycle-ii/](https://leetcode.cn/problems/linked-list-cycle-ii/)

#### 题目内容
给定一个链表的头节点  `head`，返回链表开始入环的第一个节点。 如果链表无环，则返回 `null`。

如果链表中有某个节点，可以通过连续跟踪 `next` 指针再次到达，则链表中存在环。 为了表示给定链表中的环，评测系统内部使用整数 `pos` 来表示链表尾连接到链表中的位置（**索引从 0 开始**）。如果 `pos` 是 `-1`，则在该链表中没有环。**注意：`pos` 不作为参数进行传递**，仅仅是为了标识链表的实际情况。

**不允许修改** 链表。

示例：
```
输入：head = [3,2,0,-4], pos = 1
输出：返回索引为 1 的链表节点
解释：链表中有一个环，其尾部连接到第二个节点。

输入：head = [1,2], pos = 0
输出：返回索引为 0 的链表节点
解释：链表中有一个环，其尾部连接到第一个节点。

输入：head = [1], pos = -1
输出：返回 null
解释：链表中没有环。
```

#### 解析
这道题是环形链表的进阶版本，不仅需要判断链表是否有环，还需要找出环的入口节点。

#### 解题思路
1. **快慢指针（Floyd's Tortoise and Hare）**：
   - 使用快慢指针检测是否有环
   - 当快慢指针相遇时，将一个指针重置到链表头部
   - 然后两个指针以相同速度移动，它们的相遇点就是环的入口

2. **数学证明**：
   - 假设链表头到环入口的距离为a，环入口到相遇点的距离为b，相遇点到环入口的距离为c
   - 当快慢指针相遇时，慢指针走了a+b步，快指针走了a+b+n(b+c)步（n是快指针在环中多走的圈数）
   - 因为快指针速度是慢指针的两倍，所以a+b+n(b+c) = 2(a+b)
   - 化简得a = c + (n-1)(b+c)
   - 当n=1时，a = c，这意味着从链表头到环入口的距离等于从相遇点沿着环到环入口的距离

#### 代码实现
```javascript
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    if (!head || !head.next) return null;
    
    // 步骤1: 使用快慢指针检测是否有环
    let slow = head;
    let fast = head;
    let hasCycle = false;
    
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        
        if (slow === fast) {
            hasCycle = true;
            break;
        }
    }
    
    // 如果没有环，返回null
    if (!hasCycle) return null;
    
    // 步骤2: 找到环的入口
    slow = head;
    while (slow !== fast) {
        slow = slow.next;
        fast = fast.next;
    }
    
    return slow; // 环的入口
};
```

#### 易错点
1. 没有正确处理链表为空或只有一个节点的特殊情况。
2. 在检测环时，循环条件不正确，可能导致访问null.next的错误。
3. 在第二阶段找环入口时，忘记重置其中一个指针到链表头部。
4. 没有正确理解快慢指针在有环的情况下一定会相遇的性质。
5. 混淆了环的入口和相遇点，这两个概念不同。

### 139. 单词拆分

#### 题目链接
[https://leetcode.cn/problems/word-break/](https://leetcode.cn/problems/word-break/)

#### 题目内容
给定一个非空字符串 s 和一个包含非空单词的列表 wordDict，判定 s 是否可以被空格拆分为一个或多个在字典中出现的单词。

说明：
- 拆分时可以重复使用字典中的单词。
- 你可以假设字典中没有重复的单词。

示例 1：
```
输入: s = "leetcode", wordDict = ["leet", "code"]
输出: true
解释: 返回 true 因为 "leetcode" 可以被拆分为 "leet" 和 "code"。
```

示例 2：
```
输入: s = "applepenapple", wordDict = ["apple", "pen"]
输出: true
解释: 返回 true 因为 "applepenapple" 可以被拆分为 "apple" "pen" "apple"。
```

示例 3：
```
输入: s = "catsandog", wordDict = ["cats", "dog", "sand", "and", "cat"]
输出: false
```

#### 解析
这个问题要求判断一个字符串是否可以被拆分为一个或多个在字典中出现的单词。可以使用动态规划来解决这个问题。

#### 解题思路
1. **动态规划**：
   - 定义一个布尔数组 dp，其中 dp[i] 表示字符串 s 的前 i 个字符是否可以被拆分为字典中的单词。
   - 初始化 dp[0] = true，表示空字符串可以被拆分。
   - 对于每个位置 i，检查从 0 到 i 的子字符串是否在字典中出现，如果出现，则更新 dp[i] = true。
   - 最终 dp[s.length] 即为结果。

#### 代码实现
```javascript
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    const wordSet = new Set(wordDict);
    const dp = Array(s.length + 1).fill(false);
    dp[0] = true;
    
    for (let i = 1; i <= s.length; i++) {
        for (let j = 0; j < i; j++) {
            if (dp[j] && wordSet.has(s.substring(j, i))) {
                dp[i] = true;
                break;
            }
        }
    }
    
    return dp[s.length];
};
```

#### 易错点
1. 在更新 dp 数组时，要注意检查子字符串是否在字典中出现。
2. 初始化 dp 数组时，长度应为 s.length + 1。
3. 在检查子字符串是否在字典中出现时，要注意使用 substring 方法。

### 647. 回文子串

#### 题目链接
[https://leetcode.cn/problems/palindromic-substrings/](https://leetcode.cn/problems/palindromic-substrings/)

#### 题目内容
给定一个字符串，你的任务是计算这个字符串中有多少个回文子串。

具有不同开始位置或结束位置的子串，即使是由相同的字符组成，也会被视作不同的子串。

示例：
```
输入："abc"
输出：3
解释：三个回文子串: "a", "b", "c"

输入："aaa"
输出：6
解释：六个回文子串: "a", "a", "a", "aa", "aa", "aaa"
```

#### 解析
这个问题要求计算一个字符串中有多少个回文子串。可以使用中心扩展法来解决这个问题。

#### 解题思路
1. **中心扩展法**：
   - 对于每个字符，以它为中心，向两边扩展，检查是否为回文。
   - 对于每个可能的中心位置，检查以它为中心的回文子串。
   - 如果回文子串的长度大于1，则计数加1。

2. **考虑奇数和偶数长度的回文子串**：
   - 对于奇数长度的回文子串，中心是一个字符。
   - 对于偶数长度的回文子串，中心是两个字符之间的空隙。

#### 代码实现
```javascript
/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
    let count = 0;
    
    const expandAroundCenter = (left, right) => {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            count++;
            left--;
            right++;
        }
    };
    
    for (let i = 0; i < s.length; i++) {
        expandAroundCenter(i, i); // 奇数长度
        expandAroundCenter(i, i + 1); // 偶数长度
    }
    
    return count;
};
```

#### 易错点
1. 在扩展时，要注意边界条件，避免数组越界。
2. 在更新计数时，要注意不要重复计算。

### 128. 最长连续序列

#### 题目链接
[https://leetcode.cn/problems/longest-consecutive-sequence/](https://leetcode.cn/problems/longest-consecutive-sequence/)

#### 题目内容
给定一个未排序的整数数组，找出最长连续序列的长度。

要求算法的时间复杂度为 O(n)。

示例：
```
输入: [100, 4, 200, 1, 3, 2]
输出: 4
解释: 最长连续序列是 [1, 2, 3, 4]。它的长度为 4。
```

#### 解析
这个问题要求找出未排序数组中最长连续序列的长度。可以使用哈希表来解决这个问题。

#### 解题思路
1. **哈希表**：
   - 使用哈希表存储数组中的所有元素。
   - 对于每个元素，检查它是否是连续序列的起点。
   - 如果是起点，则向后扩展，计算连续序列的长度。
   - 更新最长连续序列的长度。

#### 代码实现
```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    const numSet = new Set(nums);
    let longestStreak = 0;
    
    for (const num of nums) {
        if (!numSet.has(num - 1)) {
            let currentNum = num;
            let currentStreak = 1;
            
            while (numSet.has(currentNum + 1)) {
                currentNum++;
                currentStreak++;
            }
            
            longestStreak = Math.max(longestStreak, currentStreak);
        }
    }
    
    return longestStreak;
};
```

#### 易错点
1. 在检查是否是连续序列的起点时，要注意使用 num - 1。
2. 在更新最长连续序列的长度时，要注意比较。

### 322. 零钱兑换

#### 题目链接
[https://leetcode.cn/problems/coin-change/](https://leetcode.cn/problems/coin-change/)

#### 题目内容
给定不同面额的硬币 coins 和一个总金额 amount。编写一个函数来计算可以凑成总金额所需的最少的硬币个数。如果没有任何一种硬币组合能组成总金额，返回 -1。

示例 1：
```
输入: coins = [1, 2, 5], amount = 11
输出: 3 
解释: 11 = 5 + 5 + 1
```

示例 2：
```
输入: coins = [2], amount = 3
输出: -1
```

#### 解析
这个问题要求计算凑成总金额所需的最少硬币个数。可以使用动态规划来解决这个问题。

#### 解题思路
1. **动态规划**：
   - 定义一个数组 dp，其中 dp[i] 表示凑成金额 i 所需的最少硬币个数。
   - 初始化 dp[0] = 0，表示凑成金额 0 不需要任何硬币。
   - 对于每个金额 i，遍历所有硬币，更新 dp 数组。
   - 最终 dp[amount] 即为结果。

#### 代码实现
```javascript
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    const dp = Array(amount + 1).fill(Infinity);
    dp[0] = 0;
    
    for (let i = 1; i <= amount; i++) {
        for (const coin of coins) {
            if (i - coin >= 0) {
                dp[i] = Math.min(dp[i], dp[i - coin] + 1);
            }
        }
    }
    
    return dp[amount] === Infinity ? -1 : dp[amount];
};
```

#### 易错点
1. 在更新 dp 数组时，要注意检查金额是否足够支付。
2. 初始化 dp 数组时，长度应为 amount + 1。
3. 在计算最少硬币个数时，要注意比较。

### 494. 目标和

#### 题目链接
[https://leetcode.cn/problems/target-sum/](https://leetcode.cn/problems/target-sum/)

#### 题目内容
给定一个非负整数数组，a1, a2, ..., an, 和一个目标数，S。现在你有两个符号 + 和 -。对于数组中的任意一个整数，你都可以从 + 或 - 中选择一个符号添加在前面。

返回可以使最终数组和为目标数 S 的所有添加符号的方法数。

示例：
```
输入：nums = [1, 1, 1, 1, 1], S = 3
输出：5
解释：
-1+1+1+1+1 = 3
+1-1+1+1+1 = 3
+1+1-1+1+1 = 3
+1+1+1-1+1 = 3
+1+1+1+1-1 = 3

一共有5种方法让最终目标和为3。
```

#### 解析
这个问题要求计算数组中添加符号后，使得最终数组和为目标数 S 的所有方法数。可以使用动态规划来解决这个问题。

#### 解题思路
1. **动态规划**：
   - 定义一个二维数组 dp，其中 dp[i][j] 表示前 i 个数中添加符号后，和为 j 的方法数。
   - 初始化 dp[0][0] = 1，表示不添加任何符号时，和为 0 的方法数为 1。
   - 对于每个数，更新 dp 数组。
   - 最终 dp[nums.length][S] 即为结果。

#### 代码实现
```javascript
/**
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */
var findTargetSumWays = function(nums, S) {
    const sum = nums.reduce((a, b) => a + b, 0);
    if (sum < S || (sum + S) % 2 !== 0) return 0;
    
    const target = (sum + S) / 2;
    const dp = Array(target + 1).fill(0);
    dp[0] = 1;
    
    for (const num of nums) {
        for (let j = target; j >= num; j--) {
            dp[j] += dp[j - num];
        }
    }
    
    return dp[target];
};
```

#### 易错点
1. 在计算 target 时，要注意 sum 和 S 的和是否为偶数。
2. 在更新 dp 数组时，要注意从后向前更新。

### 438. 找到字符串中所有字母异位词

#### 题目链接
[https://leetcode.cn/problems/find-all-anagrams-in-a-string/](https://leetcode.cn/problems/find-all-anagrams-in-a-string/)

#### 题目内容
给定一个字符串 s 和一个非空字符串 p，找到 s 中所有是 p 的字母异位词的子串，返回这些子串的起始索引。

字符串只包含小写字母，并且字符串 p 的长度小于等于 s 的长度。

示例：
```
输入: s = "cbaebabacd", p = "abc"
输出: [0, 6]
解释:
起始索引等于 0 的子串是 "cba", 它是 "abc" 的字母异位词。
起始索引等于 6 的子串是 "bac", 它是 "abc" 的字母异位词。
```

#### 解析
这个问题要求找到字符串 s 中所有是字符串 p 的字母异位词的子串，并返回这些子串的起始索引。可以使用滑动窗口来解决这个问题。

#### 解题思路
1. **滑动窗口**：
   - 使用两个哈希表分别记录窗口内字符串和字符串 p 的字符出现次数。
   - 移动窗口，更新哈希表，检查是否为字母异位词。
   - 如果匹配，则记录起始索引。

#### 代码实现
```javascript
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    const sLen = s.length;
    const pLen = p.length;
    if (sLen < pLen) return [];
    
    const sCount = Array(26).fill(0);
    const pCount = Array(26).fill(0);
    const result = [];
    
    for (let i = 0; i < pLen; i++) {
        sCount[s.charCodeAt(i) - 'a'.charCodeAt(0)]++;
        pCount[p.charCodeAt(i) - 'a'.charCodeAt(0)]++;
    }
    
    if (arraysEqual(sCount, pCount)) result.push(0);
    
    for (let i = pLen; i < sLen; i++) {
        sCount[s.charCodeAt(i - pLen) - 'a'.charCodeAt(0)]--;
        sCount[s.charCodeAt(i) - 'a'.charCodeAt(0)]++;
        if (arraysEqual(sCount, pCount)) result.push(i - pLen + 1);
    }
    
    return result;
};

function arraysEqual(arr1, arr2) {
    for (let i = 0; i < 26; i++) {
        if (arr1[i] !== arr2[i]) return false;
    }
    return true;
}
```

#### 易错点
1. 在更新哈希表时，要注意减去窗口左边界字符的计数。
2. 在检查是否为字母异位词时，要注意哈希表的比较。

### 437. 路径总和III

#### 题目链接
[https://leetcode.cn/problems/path-sum-iii/](https://leetcode.cn/problems/path-sum-iii/)

#### 题目内容
给定一个二叉树，以及一个目标和，判断该树中是否存在根节点到叶子节点的路径，这条路径上所有节点值相加等于目标和。

说明: 叶子节点是指没有子节点的节点。

示例：
```
给定如下二叉树，以及目标和 sum = 22，

              5
             / \
            4   8
           /   / \
          11  13  4
         /  \      \
        7    2      1

返回 true, 因为存在目标和为 22 的根节点到叶子节点的路径 5->4->11->2。
```

#### 解析
这个问题要求判断二叉树中是否存在一条从根节点到叶子节点的路径，使得路径上所有节点值的和等于给定的目标和。可以使用递归来解决这个问题。

#### 解题思路
1. **递归**：
   - 对于每个节点，检查它是否是叶子节点。
   - 如果是叶子节点，检查路径和是否等于目标和。
   - 如果不是叶子节点，递归检查左右子树。
   - 在递归过程中，更新路径和。

#### 代码实现
```javascript
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
    if (!root) return false;
    
    const dfs = (node, currentSum) => {
        if (!node) return false;
        
        currentSum += node.val;
        
        if (!node.left && !node.right) {
            return currentSum === sum;
        }
        
        return dfs(node.left, currentSum) || dfs(node.right, currentSum);
    };
    
    return dfs(root, 0);
};
```

#### 易错点
1. 在递归过程中，要注意更新路径和。
2. 在检查叶子节点时，要注意使用 && 操作符。

### 416. 分割等和子集

#### 题目链接
[https://leetcode.cn/problems/partition-equal-subset-sum/](https://leetcode.cn/problems/partition-equal-subset-sum/)

#### 题目内容
给定一个只包含正整数的非空数组，是否可以将这个数组分割成两个子集，使得两个子集的元素和相等。

注意：
- 每个数组中的元素不会超过 100
- 数组的大小不会超过 200

示例 1：
```
输入：[1, 5, 11, 5]
输出：true
解释：数组可以分割成 [1, 5, 5] 和 [11]。
```

示例 2：
```
输入：[1, 2, 3, 5]
输出：false
解释：数组不能分割成两个元素和相等的子集。
```

#### 解析
这个问题要求判断一个数组是否可以被分割成两个子集，使得两个子集的元素和相等。可以使用动态规划来解决这个问题。

#### 解题思路
1. **动态规划**：
   - 定义一个二维数组 dp，其中 dp[i][j] 表示前 i 个元素是否可以组成和为 j 的子集。
   - 初始化 dp[0][0] = true，表示不选择任何元素时，和为 0 是可能的。
   - 对于每个元素，更新 dp 数组。
   - 最终 dp[nums.length][target] 即为结果。

#### 代码实现
```javascript
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    const sum = nums.reduce((a, b) => a + b, 0);
    if (sum % 2 !== 0) return false;
    
    const target = sum / 2;
    const dp = Array(nums.length + 1).fill().map(() => Array(target + 1).fill(false));
    dp[0][0] = true;
    
    for (let i = 1; i <= nums.length; i++) {
        for (let j = 0; j <= target; j++) {
            dp[i][j] = dp[i - 1][j];
            if (j >= nums[i - 1]) {
                dp[i][j] = dp[i][j] || dp[i - 1][j - nums[i - 1]];
            }
        }
    }
    
    return dp[nums.length][target];
};
```

#### 易错点
1. 在更新 dp 数组时，要注意检查和是否超过目标值。
2. 初始化 dp 数组时，长度应为 nums.length + 1。
3. 在检查是否可以组成目标和时，要注意使用或操作符。

### 406. 根据身高重建队列

#### 题目链接
[https://leetcode.cn/problems/queue-reconstruction-by-height/](https://leetcode.cn/problems/queue-reconstruction-by-height/)

#### 题目内容
假设有打乱顺序的一群人站成一个队列。每个人由一个整数对 (h, k) 表示，其中 h 是这个人的身高，k 是排在这个人前面且身高大于或等于 h 的人数。编写一个算法来重建这个队列。

注意：
总人数少于 1100 人。

示例：
```
输入：[[7,0], [4,4], [7,1], [5,0], [6,1], [5,2]]
输出：[[5,0], [7,0], [5,2], [6,1], [4,4], [7,1]]
```

#### 解析
这个问题要求根据每个人的身高和前面比他高或等的人数来重建队列。可以使用贪心算法来解决这个问题。

#### 解题思路
1. **贪心算法**：
   - 首先将所有人按身高降序排序。
   - 然后按顺序插入队列，插入位置是前面比他高或等的人数。

#### 代码实现
```javascript
/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function(people) {
    people.sort((a, b) => b[0] - a[0] || a[1] - b[1]);
    const result = [];
    
    for (const person of people) {
        result.splice(person[1], 0, person);
    }
    
    return result;
};
```

#### 易错点
1. 在排序时，要注意先按身高降序排序，再按前面比他高或等的人数升序排序。
2. 在插入时，要注意使用 splice 方法。

### 399. 除法求值

#### 题目链接
[https://leetcode.cn/problems/evaluate-division/](https://leetcode.cn/problems/evaluate-division/)

#### 题目内容
给出方程式 A / B = k，其中 A 和 B 都是变量，k 是一个常数。根据已知方程式求解未知变量。如果无法根据已知方程式求解未知变量，则返回 -1.0。

示例：
```
输入：equations = [["a", "b"], ["b", "c"]], values = [2.0, 3.0], queries = [["a", "c"], ["b", "a"], ["a", "e"], ["a", "a"], ["x", "x"]]
输出：[6.0, 0.5, -1.0, 1.0, -1.0]
解释：
给定：a / b = 2.0, b / c = 3.0
查询：a / c = 6.0, b / a = 0.5, a / e = -1.0, a / a = 1.0, x / x = -1.0
```

#### 解析
这个问题要求根据已知方程式求解未知变量。可以使用图论中的最短路径算法来解决这个问题。

#### 解题思路
1. **图论**：
   - 将每个变量看作图中的一个节点。
   - 将每个方程式看作图中的一条边，边上的权值为两个变量之间的比值。
   - 使用广度优先搜索或深度优先搜索来求解未知变量。

#### 代码实现
```javascript
/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function(equations, values, queries) {
    const graph = {};
    
    for (let i = 0; i < equations.length; i++) {
        const [a, b] = equations[i];
        const value = values[i];
        
        if (!graph[a]) graph[a] = {};
        if (!graph[b]) graph[b] = {};
        
        graph[a][b] = value;
        graph[b][a] = 1 / value;
    }
    
    const result = [];
    
    for (const [a, b] of queries) {
        if (!graph[a] || !graph[b]) {
            result.push(-1.0);
            continue;
        }
        
        const visited = new Set();
        const queue = [[a, 1]];
        let found = false;
        
        while (queue.length > 0 && !found) {
            const [node, value] = queue.shift();
            if (node === b) {
                result.push(value);
                found = true;
                continue;
            }
            
            visited.add(node);
            
            for (const next in graph[node]) {
                if (!visited.has(next)) {
                    queue.push([next, value * graph[node][next]]);
                }
            }
        }
        
        if (!found) result.push(-1.0);
    }
    
    return result;
};
```

#### 易错点
1. 在构建图时，要注意处理自环和重边。
2. 在广度优先搜索时，要注意处理已访问节点。

### 394. 字符串解码

#### 题目链接
[https://leetcode.cn/problems/decode-string/](https://leetcode.cn/problems/decode-string/)

#### 题目内容
给定一个编码后的字符串，返回它解码后的字符串。

编码规则是：k[encoded_string]，其中整数 k 表示编码字符串的重复次数，encoded_string 表示需要重复的字符串。

注意：
- k 是正整数
- encoded_string 非空
- 输入字符串不包含数字，只有小写英文字母、方括号和数字。
- 输入字符串总是有效的；输入的方括号总是符合格式要求的。
- 你可以认为原始数据不包含数字，所有的数字只表示重复的次数 k ，而不是 k 本身。

示例：
```
输入：s = "3[a2[c]]"
输出："accaccacc"
```

#### 解析
这个问题要求解码一个编码后的字符串。可以使用栈来解决这个问题。

#### 解题思路
1. **栈**：
   - 使用一个栈来存储数字和编码字符串。
   - 当遇到数字时，将其转换为整数并存储。
   - 当遇到左括号时，将当前数字和编码字符串入栈。
   - 当遇到右括号时，从栈中弹出数字和编码字符串，重复编码字符串并添加到结果字符串中。

#### 代码实现
```javascript
/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    const stack = [];
    let num = 0;
    let result = "";
    
    for (const char of s) {
        if (char >= '0' && char <= '9') {
            num = num * 10 + parseInt(char);
        } else if (char === '[') {
            stack.push(result);
            stack.push(num);
            result = "";
            num = 0;
        } else if (char === ']') {
            const prevNum = stack.pop();
            const prevResult = stack.pop();
            result = prevResult + result.repeat(prevNum);
        } else {
            result += char;
        }
    }
    
    return result;
};
```

#### 易错点
1. 在处理数字时，要注意将其转换为整数。
2. 在处理编码字符串时，要注意重复次数和编码字符串的顺序。

### 347. 前K个高频元素

#### 题目链接
[https://leetcode.cn/problems/top-k-frequent-elements/](https://leetcode.cn/problems/top-k-frequent-elements/)

#### 题目内容
给定一个非空的整数数组，返回其中出现频率前 k 高的元素。

示例：
```
输入: nums = [1,1,1,2,2,3], k = 2
输出: [1,2]
```

#### 解析
这个问题要求找出数组中出现频率前 k 高的元素。可以使用哈希表和优先队列来解决这个问题。

#### 解题思路
1. **哈希表**：
   - 使用哈希表记录每个元素出现的次数。
   - 使用优先队列（堆）来维护频率前 k 高的元素。

2. **优先队列**：
   - 使用最小堆来维护频率前 k 高的元素。
   - 当堆的大小超过 k 时，弹出堆顶元素。

#### 代码实现
```javascript
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const map = new Map();
    for (const num of nums) {
        map.set(num, (map.get(num) || 0) + 1);
    }
    
    const heap = new MinHeap();
    for (const [num, freq] of map) {
        heap.insert([num, freq]);
        if (heap.size() > k) {
            heap.extractMin();
        }
    }
    
    return heap.heap.map(item => item[0]);
};

// 最小堆实现
class MinHeap {
    constructor() {
        this.heap = [];
    }
    
    getParentIndex(i) {
        return Math.floor((i - 1) / 2);
    }
    
    getLeftChildIndex(i) {
        return 2 * i + 1;
    }
    
    getRightChildIndex(i) {
        return 2 * i + 2;
    }
    
    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }
    
    siftUp(i) {
        const parentIndex = this.getParentIndex(i);
        if (parentIndex >= 0 && this.heap[parentIndex][1] > this.heap[i][1]) {
            this.swap(i, parentIndex);
            this.siftUp(parentIndex);
        }
    }
    
    siftDown(i) {
        const leftChildIndex = this.getLeftChildIndex(i);
        const rightChildIndex = this.getRightChildIndex(i);
        let minIndex = i;
        
        if (leftChildIndex < this.heap.length && this.heap[leftChildIndex][1] < this.heap[minIndex][1]) {
            minIndex = leftChildIndex;
        }
        
        if (rightChildIndex < this.heap.length && this.heap[rightChildIndex][1] < this.heap[minIndex][1]) {
            minIndex = rightChildIndex;
        }
        
        if (minIndex !== i) {
            this.swap(i, minIndex);
            this.siftDown(minIndex);
        }
    }
    
    insert(val) {
        this.heap.push(val);
        this.siftUp(this.heap.length - 1);
    }
    
    extractMin() {
        if (this.heap.length === 1) {
            return this.heap.pop();
        }
        
        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.siftDown(0);
        return min;
    }
    
    size() {
        return this.heap.length;
    }
}
```

#### 易错点
1. 在构建哈希表时，要注意处理重复元素。
2. 在构建最小堆时，要注意处理频率相同的元素。

### 337. 打家劫舍III

#### 题目链接
[https://leetcode.cn/problems/house-robber-iii/](https://leetcode.cn/problems/house-robber-iii/)

#### 题目内容
在上次打劫完一条街道之后和一圈房屋后，小偷又发现了一个新的可行窃的地区。这个地区只有一个入口，我们称之为根。 除了根之外，每栋房子有且只有一个父房子与之相连。一番侦察之后，聪明的小偷意识到"这个地方的所有房子组成的二叉树结构上，

示例：
```
输入：[3,2,3,null,3,null,1]
输出：7
解释：小偷一晚能够盗取的最高金额 = 3 + 3 + 1 = 7。
```

#### 解析
这个问题要求计算二叉树上打家劫舍的最大金额。可以使用动态规划来解决这个问题。

#### 解题思路
1. **动态规划**：
   - 定义一个函数 rob(node)，表示从以 node 为根节点的子树中打家劫舍的最大金额。
   - 对于每个节点，考虑偷窃当前节点和不偷窃当前节点两种情况。
   - 如果偷窃当前节点，则不能偷窃其子节点。
   - 如果不偷窃当前节点，则可以偷窃其子节点。
   - 最终结果是这两种情况的最大值。

#### 代码实现
```javascript
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var rob = function(root) {
    const dfs = (node) => {
        if (!node) return [0, 0];
        
        const left = dfs(node.left);
        const right = dfs(node.right);
        
        const robCurrent = node.val + left[1] + right[1];
        const notRobCurrent = Math.max(left[0], left[1]) + Math.max(right[0], right[1]);
        
        return [robCurrent, notRobCurrent];
    };
    
    const result = dfs(root);
    return Math.max(result[0], result[1]);
};
```

#### 易错点
1. 在递归过程中，要注意处理空节点。
2. 在计算偷窃当前节点和不偷窃当前节点两种情况时，要注意子节点的状态。

### 309. 买卖股票的最佳时机含冷冻期

#### 题目链接
[https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-with-cooldown/](https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-with-cooldown/)

#### 题目内容
给定一个整数数组，其中第 i 个元素表示第 i 天的股票价格。

设计一个算法计算出最大利润。在满足以下条件的情况下，你可以尽可能地完成更多的交易（多次买卖一支股票）：
1. 你不能同时参与多笔交易（即，你必须在再次购买前出售掉之前的股票）。
2. 卖出股票后，你无法在第二天买入股票（即冷冻期为 1 天）。

示例：
```
输入: [1,2,3,0,2]
输出: 3 
解释: 对应的交易状态为: [买入, 卖出, 冷冻期, 买入, 卖出]，最大利润 = 3
```

#### 解析
这个问题要求计算在满足特定条件下的最大利润。可以使用动态规划来解决这个问题。

#### 解题思路
1. **动态规划**：
   - 定义三个状态：
     - `hold[i]`：第 i 天持有股票的最大利润。
     - `sold[i]`：第 i 天不持有股票且处于冷冻期的最大利润。
     - `rest[i]`：第 i 天不持有股票且不处于冷冻期的最大利润。
   - 状态转移方程：
     - `hold[i] = max(hold[i-1], rest[i-1] - prices[i])`
     - `sold[i] = hold[i-1] + prices[i]`
     - `rest[i] = max(rest[i-1], sold[i-1])`
   - 初始状态：
     - `hold[0] = -prices[0]`
     - `sold[0] = 0`
     - `rest[0] = 0`
   - 最终结果是 `max(sold[n-1], rest[n-1])`。

#### 代码实现
```javascript
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if (prices.length <= 1) return 0;
    
    const n = prices.length;
    const hold = Array(n).fill(0);
    const sold = Array(n).fill(0);
    const rest = Array(n).fill(0);
    
    hold[0] = -prices[0];
    sold[0] = 0;
    rest[0] = 0;
    
    for (let i = 1; i < n; i++) {
        hold[i] = Math.max(hold[i-1], rest[i-1] - prices[i]);
        sold[i] = hold[i-1] + prices[i];
        rest[i] = Math.max(rest[i-1], sold[i-1]);
    }
    
    return Math.max(sold[n-1], rest[n-1]);
};
```

#### 易错点
1. 在初始化状态数组时，要注意处理边界条件。
2. 在更新状态数组时，要注意使用前一天的状态。

### 300. 最长递增子序列

#### 题目链接
[https://leetcode.cn/problems/longest-increasing-subsequence/](https://leetcode.cn/problems/longest-increasing-subsequence/)

#### 题目内容
给定一个整数数组，找到其中最长递增子序列的长度。

示例：
```
输入: [10,9,2,5,3,7,101,18]
输出: 4 
解释: 最长递增子序列是 [2,3,7,101]，它的长度为 4。
```

#### 解析
这个问题要求找到数组中最长递增子序列的长度。可以使用动态规划来解决这个问题。

#### 解题思路
1. **动态规划**：
   - 定义一个数组 dp，其中 dp[i] 表示以第 i 个元素结尾的最长递增子序列的长度。
   - 初始化 dp[0] = 1，表示每个元素本身就是一个递增子序列。
   - 对于每个元素，检查它之前的所有元素，更新 dp 数组。
   - 最终结果是 dp 数组中的最大值。

#### 代码实现
```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    if (nums.length === 0) return 0;
    
    const dp = Array(nums.length).fill(1);
    
    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
    }
    
    return Math.max(...dp);
};
```

#### 易错点
1. 在更新 dp 数组时，要注意比较。
2. 在初始化 dp 数组时，要注意长度。

### 287. 寻找重复数

#### 题目链接
[https://leetcode.cn/problems/find-the-duplicate-number/](https://leetcode.cn/problems/find-the-duplicate-number/)

#### 题目内容
给定一个包含 n + 1 个整数的数组 nums，其数字都在 1 到 n 之间，可知至少存在一个重复的数字。假设只有一个重复的数字，找出这个重复的数字。

示例：
```
输入：[1,3,4,2,2]
输出：2
```

#### 解析
这个问题要求找出数组中重复的数字。可以使用二分查找或快慢指针来解决这个问题。

#### 解题思路
1. **二分查找**：
   - 使用二分查找来确定重复数字的范围。
   - 对于每个范围，统计数字出现的次数。
   - 如果某个数字出现的次数超过范围，则该数字就是重复数字。

2. **快慢指针**：
   - 使用快慢指针来检测环。
   - 快指针每次走两步，慢指针每次走一步。
   - 当快慢指针相遇时，重置快指针到起点，然后快慢指针每次走一步。
   - 当快慢指针再次相遇时，慢指针指向的数字就是重复数字。

#### 代码实现
```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    let slow = nums[0];
    let fast = nums[0];
    
    do {
        slow = nums[slow];
        fast = nums[nums[fast]];
    } while (slow !== fast);
    
    slow = nums[0];
    while (slow !== fast) {
        slow = nums[slow];
        fast = nums[fast];
    }
    
    return slow;
};
```

#### 易错点
1. 在检测环时，要注意使用 do-while 循环。
2. 在重置快指针时，要注意使用 nums[0]。

### 279. 完全平方数

#### 题目链接
[https://leetcode.cn/problems/perfect-squares/](https://leetcode.cn/problems/perfect-squares/)

#### 题目内容
给定正整数 n，找到若干个完全平方数（比如 1, 4, 9, 16, ...）使得它们的和等于 n。你需要让组成和的完全平方数的个数最少。

示例：
```
输入：n = 12
输出：3 
解释：12 = 4 + 4 + 4
```

#### 解析
这个问题要求找到组成给定正整数 n 的最少完全平方数的个数。可以使用动态规划来解决这个问题。

#### 解题思路
1. **动态规划**：
   - 定义一个数组 dp，其中 dp[i] 表示组成数字 i 的最少完全平方数的个数。
   - 初始化 dp[0] = 0，表示组成数字 0 不需要任何完全平方数。
   - 对于每个数字 i，检查它之前的所有完全平方数，更新 dp 数组。
   - 最终结果是 dp[n]。

#### 代码实现
```javascript
/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
    const dp = Array(n + 1).fill(Infinity);
    dp[0] = 0;
    
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j * j <= i; j++) {
            dp[i] = Math.min(dp[i], dp[i - j * j] + 1);
        }
    }
    
    return dp[n];
};
```

#### 易错点
1. 在更新 dp 数组时，要注意检查完全平方数是否超过当前数字。
2. 在初始化 dp 数组时，要注意长度。

### 253. 会议室II

#### 题目链接
[https://leetcode.cn/problems/meeting-rooms-ii/](https://leetcode.cn/problems/meeting-rooms-ii/)

#### 题目内容
给定一个会议时间安排的数组，每个会议时间都会包括开始和结束的时间 [[s1,e1],[s2,e2],...] (si < ei)，为避免会议冲突，同时要考虑会议室的最小数量。

示例：
```
输入: [[0, 30],[5, 10],[15, 20]]
输出: 2
```

#### 解析
这个问题要求计算会议室的最小数量，以避免会议冲突。可以使用贪心算法来解决这个问题。

#### 解题思路
1. **贪心算法**：
   - 将所有会议按照开始时间排序。
   - 使用一个最小堆来存储会议的结束时间。
   - 对于每个会议，如果当前会议的开始时间大于堆顶会议的结束时间，则可以复用会议室，否则需要一个新的会议室。

#### 代码实现
```javascript
/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function(intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
    const heap = new MinHeap();
    
    for (const interval of intervals) {
        if (heap.size() > 0 && heap.peek() <= interval[0]) {
            heap.extractMin();
        }
        heap.insert(interval[1]);
    }
    
    return heap.size();
};

// 最小堆实现
class MinHeap {
    constructor() {
        this.heap = [];
    }
    
    getParentIndex(i) {
        return Math.floor((i - 1) / 2);
    }
    
    getLeftChildIndex(i) {
        return 2 * i + 1;
    }
    
    getRightChildIndex(i) {
        return 2 * i + 2;
    }
    
    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }
    
    siftUp(i) {
        const parentIndex = this.getParentIndex(i);
        if (parentIndex >= 0 && this.heap[parentIndex] > this.heap[i]) {
            this.swap(i, parentIndex);
            this.siftUp(parentIndex);
        }
    }
    
    siftDown(i) {
        const leftChildIndex = this.getLeftChildIndex(i);
        const rightChildIndex = this.getRightChildIndex(i);
        let minIndex = i;
        
        if (leftChildIndex < this.heap.length && this.heap[leftChildIndex] < this.heap[minIndex]) {
            minIndex = leftChildIndex;
        }
        
        if (rightChildIndex < this.heap.length && this.heap[rightChildIndex] < this.heap[minIndex]) {
            minIndex = rightChildIndex;
        }
        
        if (minIndex !== i) {
            this.swap(i, minIndex);
            this.siftDown(minIndex);
        }
    }
    
    insert(val) {
        this.heap.push(val);
        this.siftUp(this.heap.length - 1);
    }
    
    peek() {
        return this.heap[0];
    }
    
    extractMin() {
        if (this.heap.length === 1) {
            return this.heap.pop();
        }
        
        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.siftDown(0);
        return min;
    }
    
    size() {
        return this.heap.length;
    }
}
```

#### 易错点
1. 在排序时，要注意使用 intervals.sort((a, b) => a[0] - b[0])。
2. 在插入和删除元素时，要注意使用最小堆的性质。

### 240. 搜索二维矩阵II

#### 题目链接
[https://leetcode.cn/problems/search-a-2d-matrix-ii/](https://leetcode.cn/problems/search-a-2d-matrix-ii/)

#### 题目内容
编写一个高效的算法来搜索 m x n 矩阵 matrix 中的一个目标值 target。该矩阵具有以下特性：

- 每行的元素从左到右升序排列。
- 每列的元素从上到下升序排列。

示例：
```
输入：matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], target = 5
输出：true
```

#### 解析
这个问题要求在二维矩阵中搜索一个目标值。可以使用二分查找来解决这个问题。

#### 解题思路
1. **二分查找**：
   - 对于矩阵的每一行，使用二分查找来搜索目标值。
   - 如果目标值大于当前行的最大值或小于当前行的最小值，则可以跳过当前行。

#### 代码实现
```javascript
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    const m = matrix.length;
    const n = matrix[0].length;
    
    for (let i = 0; i < m; i++) {
        let left = 0;
        let right = n - 1;
        
        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            if (matrix[i][mid] === target) return true;
            if (matrix[i][mid] < target) left = mid + 1;
            else right = mid - 1;
        }
    }
    
    return false;
};
```

#### 易错点
1. 在二分查找时，要注意更新左右边界。
2. 在搜索矩阵时，要注意矩阵的行数和列数。

### 22. 括号生成

#### 题目链接
[https://leetcode.cn/problems/generate-parentheses/](https://leetcode.cn/problems/generate-parentheses/)

#### 题目内容
给出 n 对括号，请编写一个函数来生成所有可能的并且有效的括号组合。

示例：
```
输入：n = 3
输出：["((()))","(()())","(())()","()(())","()()()"]
```

#### 解析
这个问题要求生成所有可能的并且有效的括号组合。可以使用回溯法来解决这个问题。

#### 解题思路
1. **回溯法**：
   - 使用递归来生成括号组合。
   - 在生成括号组合时，要注意括号匹配的规则。

#### 代码实现
```javascript
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const result = [];
    
    const generate = (current, open, close) => {
        if (current.length === n * 2) {
            result.push(current);
            return;
        }
        
        if (open < n) generate(current + '(', open + 1, close);
        if (close < open) generate(current + ')', open, close + 1);
    };
    
    generate('', 0, 0);
    return result;
};
```

#### 易错点
1. 在生成括号组合时，要注意括号匹配的规则。
2. 在递归过程中，要注意当前括号组合的长度。

### 49. 字母异位词分组

#### 题目链接
[https://leetcode.cn/problems/group-anagrams/](https://leetcode.cn/problems/group-anagrams/)

#### 题目内容
给定一个字符串数组，将字母异位词组合在一起。字母异位词指字母相同，但排列不同的字符串。

示例：
```
输入：["eat", "tea", "tan", "ate", "nat", "bat"]
输出：[["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]
```

#### 解析
这个问题要求将字母异位词组合在一起。可以使用哈希表来解决这个问题。

#### 解题思路
1. **哈希表**：
   - 使用哈希表存储字母异位词。
   - 对于每个字符串，将其排序后作为键。
   - 将字符串添加到对应的键值对中。

#### 代码实现
```javascript
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const map = new Map();
    
    for (const str of strs) {
        const sortedStr = str.split('').sort().join('');
        if (!map.has(sortedStr)) map.set(sortedStr, []);
        map.get(sortedStr).push(str);
    }
    
    return Array.from(map.values());
};
```

#### 易错点
1. 在构建哈希表时，要注意处理重复字符串。
2. 在构建哈希表时，要注意使用 split 和 join 方法。

### 48. 旋转图像

#### 题目链接
[https://leetcode.cn/problems/rotate-image/](https://leetcode.cn/problems/rotate-image/)

#### 题目内容
给定一个 n × n 的二维矩阵表示一个图像。将图像顺时针旋转 90 度。

说明：
你必须在原地旋转图像，这意味着你需要直接修改输入的二维矩阵。请不要使用另一个矩阵来旋转图像。

示例：
```
输入：matrix = [[1,2,3],[4,5,6],[7,8,9]]
输出：[[7,4,1],[8,5,2],[9,6,3]]
```

#### 解析
这个问题要求将图像顺时针旋转 90 度。可以使用矩阵转置和行反转来解决这个问题。

#### 解题思路
1. **矩阵转置**：
   - 将矩阵的行和列互换。

2. **行反转**：
   - 对每一行进行反转。

#### 代码实现
```javascript
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    const n = matrix.length;
    
    // 矩阵转置
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
    }
    
    // 行反转
    for (let i = 0; i < n; i++) {
        matrix[i].reverse();
    }
};
```

#### 易错点
1. 在转置矩阵时，要注意使用双重循环。
2. 在行反转时，要注意使用 reverse 方法。

### 46. 全排列

#### 题目链接
[https://leetcode.cn/problems/permutations/](https://leetcode.cn/problems/permutations/)

#### 题目内容
给定一个没有重复数字的序列，返回其所有可能的全排列。

示例：
```
输入：[1,2,3]
输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
```

#### 解析
这个问题要求生成一个序列的所有可能排列。可以使用回溯法来解决这个问题。

#### 解题思路
1. **回溯法**：
   - 使用递归来生成排列。
   - 在生成排列时，要注意避免重复使用元素。

#### 代码实现
```javascript
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const result = [];
    
    const backtrack = (path) => {
        if (path.length === nums.length) {
            result.push([...path]);
            return;
        }
        
        for (const num of nums) {
            if (path.includes(num)) continue;
            path.push(num);
            backtrack(path);
            path.pop();
        }
    };
    
    backtrack([]);
    return result;
};
```

#### 易错点
1. 在生成排列时，要注意避免重复使用元素。
2. 在递归过程中，要注意恢复当前路径。

### 39. 组合总和

#### 题目链接
[https://leetcode.cn/problems/combination-sum/](https://leetcode.cn/problems/combination-sum/)

#### 题目内容
给定一个无重复元素的数组 candidates 和一个目标数 target，找出 candidates 中所有可以使数字和为 target 的组合。

candidates 中的数字可以无限制重复被选取。

说明：
- 所有数字（包括 target）都是正整数。
- 解集不能包含重复的组合。

示例：
```
输入：candidates = [2,3,6,7], target = 7
输出：[[7],[2,2,3]]
```

#### 解析
这个问题要求找出数组中所有可以使数字和为 target 的组合。可以使用回溯法来解决这个问题。

#### 解题思路
1. **回溯法**：
   - 使用递归来生成组合。
   - 在生成组合时，要注意避免重复使用元素。

#### 代码实现
```javascript
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const result = [];
    
    const backtrack = (path, start) => {
        if (path.reduce((a, b) => a + b, 0) === target) {
            result.push([...path]);
            return;
        }
        
        for (let i = start; i < candidates.length; i++) {
            if (path.reduce((a, b) => a + b, 0) + candidates[i] > target) continue;
            path.push(candidates[i]);
            backtrack(path, i);
            path.pop();
        }
    };
    
    backtrack([], 0);
    return result;
};
```

#### 易错点
1. 在生成组合时，要注意避免重复使用元素。
2. 在递归过程中，要注意更新起始位置。

### 34. 在排序数组中查找元素的第一个和最后一个位置

#### 题目链接
[https://leetcode.cn/problems/find-first-and-last-position-of-element-in-sorted-array/](https://leetcode.cn/problems/find-first-and-last-position-of-element-in-sorted-array/)

#### 题目内容
给定一个按照升序排列的整数数组 nums，和一个目标值 target。找出给定目标值在数组中的开始位置和结束位置。

如果数组中不存在目标值，返回 [-1, -1]。

示例：
```
输入：nums = [5,7,7,8,8,10], target = 8
输出：[3,4]
```

#### 解析
这个问题要求在排序数组中查找目标值的开始位置和结束位置。可以使用二分查找来解决这个问题。

#### 解题思路
1. **二分查找**：
   - 使用两次二分查找来分别查找目标值的开始位置和结束位置。

#### 代码实现
```javascript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    const leftIndex = binarySearch(nums, target, true);
    const rightIndex = binarySearch(nums, target, false) - 1;
    if (leftIndex <= rightIndex && rightIndex < nums.length && nums[leftIndex] === target && nums[rightIndex] === target) {
        return [leftIndex, rightIndex];
    }
    return [-1, -1];
};

function binarySearch(nums, target, lower) {
    let left = 0;
    let right = nums.length;
    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        if (nums[mid] < target || (lower && nums[mid] === target)) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    return left;
}
```

#### 易错点
1. 在二分查找时，要注意更新左右边界。
2. 在查找开始位置和结束位置时，要注意使用不同的二分查找方法。

### 33. 搜索旋转排序数组

#### 题目链接
[https://leetcode.cn/problems/search-in-rotated-sorted-array/](https://leetcode.cn/problems/search-in-rotated-sorted-array/)

#### 题目内容
给定一个升序排列的数组，将其旋转若干次后，找到目标值 target 的索引。如果目标值不存在于数组中，返回 -1。

示例：
```
输入：nums = [4,5,6,7,0,1,2], target = 0
输出：4
```

#### 解析
这个问题要求在旋转后的有序数组中查找目标值。可以使用二分查找来解决这个问题。

#### 解题思路
1. **二分查找**：
   - 使用二分查找来确定目标值所在的区间。
   - 如果目标值大于当前区间的最大值或小于当前区间的最小值，则目标值不在当前区间。

#### 代码实现
```javascript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (nums[mid] === target) return mid;
        
        if (nums[left] <= nums[mid]) {
            if (nums[left] <= target && target < nums[mid]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        } else {
            if (nums[mid] < target && target <= nums[right]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }
    
    return -1;
};
```

#### 易错点
1. 在二分查找时，要注意更新左右边界。
2. 在确定目标值所在的区间时，要注意比较。

### 31. 下一个排列

#### 题目链接
[https://leetcode.cn/problems/next-permutation/](https://leetcode.cn/problems/next-permutation/)

#### 题目内容
实现获取下一个排列的函数，算法需要将给定数字序列重新排列成字典序中下一个更大的排列。

如果这样的排列不存在，则返回原数组。

示例：
```
输入：nums = [1,2,3]
输出：[1,3,2]
```

#### 解析
这个问题要求实现获取下一个排列的函数。可以使用双指针来解决这个问题。

#### 解题思路
1. **双指针**：
   - 从后向前遍历数组，找到第一个比前一个元素大的元素。
   - 如果找到这样的元素，则从后向前遍历数组，找到第一个比这个元素大的元素。
   - 交换这两个元素，然后反转后面的元素。

#### 代码实现
```javascript
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    let i = nums.length - 2;
    while (i >= 0 && nums[i] >= nums[i + 1]) i--;
    
    if (i >= 0) {
        let j = nums.length - 1;
        while (nums[j] <= nums[i]) j--;
        [nums[i], nums[j]] = [nums[j], nums[i]];
    }
    
    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
        [nums[left], nums[right]] = [nums[right], nums[left]];
        left++;
        right--;
    }
};
```

#### 易错点
1. 在遍历数组时，要注意更新左右边界。
2. 在交换元素时，要注意使用解构赋值。

### 538. 把二叉搜索树转换为累加树

#### 题目链接
[https://leetcode.cn/problems/convert-bst-to-greater-tree/](https://leetcode.cn/problems/convert-bst-to-greater-tree/)

#### 题目内容
给定一个二叉搜索树（BST），将其转换为累加树（Greater Tree)，使得每个节点的值是原来的节点值加上所有大于它的节点值之和。

示例：
```
输入：root = [4,1,6,0,2,5,7,null,null,null,3,null,null,null,8]
输出：[30,36,21,36,35,26,15,null,null,null,33,null,null,null,8]
```

#### 解析
这个问题要求将二叉搜索树转换为累加树。可以使用反向中序遍历来解决这个问题。

#### 解题思路
1. **反向中序遍历**：
   - 反向中序遍历二叉搜索树，从右到左遍历。
   - 在遍历过程中，累加当前节点的值。
   - 更新当前节点的值为累加值。

#### 代码实现
```javascript
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var convertBST = function(root) {
    let sum = 0;
    
    const dfs = (node) => {
        if (!node) return;
        
        dfs(node.right);
        
        sum += node.val;
        node.val = sum;
        
        dfs(node.left);
    };
    
    dfs(root);
    return root;
};
```

#### 易错点
1. 在递归过程中，要注意更新累加值。
2. 在更新当前节点的值时，要注意使用累加值。

### 560. 和为K的子数组

#### 题目链接
[https://leetcode.cn/problems/subarray-sum-equals-k/](https://leetcode.cn/problems/subarray-sum-equals-k/)

#### 题目内容
给定一个整数数组和一个整数 k，你需要找到该数组中和为 k 的连续子数组的个数。

示例：
```
输入：nums = [1,1,1], k = 2
输出：2
```

#### 解析
这个问题要求计算数组中连续子数组的和等于 k 的个数。可以使用哈希表来解决这个问题。

#### 解题思路
1. **哈希表**：
   - 使用哈希表存储前缀和及其出现的次数。
   - 遍历数组，计算当前前缀和，并检查哈希表中是否存在当前前缀和减去 k 的值。
   - 如果存在，则说明存在和为 k 的子数组。

#### 代码实现
```javascript
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    const map = new Map();
    map.set(0, 1);
    let count = 0;
    let sum = 0;
    
    for (const num of nums) {
        sum += num;
        if (map.has(sum - k)) {
            count += map.get(sum - k);
        }
        map.set(sum, (map.get(sum) || 0) + 1);
    }
    
    return count;
};
```

#### 易错点
1. 在更新哈希表时，要注意处理重复前缀和。
2. 在计算前缀和时，要注意累加。

### 19. 删除链表的倒数第N个结点

#### 题目链接
[https://leetcode.cn/problems/remove-nth-node-from-end-of-list/](https://leetcode.cn/problems/remove-nth-node-from-end-of-list/)

#### 题目内容
给定一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。

示例：
```
输入：head = [1,2,3,4,5], n = 2
输出：[1,2,3,5]
```

#### 解析
这个问题要求删除链表的倒数第 n 个结点。可以使用双指针来解决这个问题。

#### 解题思路
1. **双指针**：
   - 使用两个指针，一个快指针和一个慢指针。
   - 快指针先走 n 步，然后快慢指针一起走。
   - 当快指针到达链表末尾时，慢指针指向倒数第 n 个结点。

#### 代码实现
```javascript
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    const dummy = new ListNode(0);
    dummy.next = head;
    let fast = dummy;
    let slow = dummy;
    
    for (let i = 0; i < n; i++) {
        fast = fast.next;
    }
    
    while (fast.next) {
        fast = fast.next;
        slow = slow.next;
    }
    
    slow.next = slow.next.next;
    
    return dummy.next;
};
```

#### 易错点
1. 在初始化虚拟头节点时，要注意使用 new ListNode(0)。
2. 在更新快慢指针时，要注意使用 dummy 节点。

### 17. 电话号码的字母组合

#### 题目链接
[https://leetcode.cn/problems/letter-combinations-of-a-phone-number/](https://leetcode.cn/problems/letter-combinations-of-a-phone-number/)

#### 题目内容
给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。

给出数字到字母的映射如下（与电话按键相同）。注意：1 不对应任何字母。

示例：
```
输入："23"
输出：["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]
```

#### 解析
这个问题要求生成所有可能的字母组合。可以使用回溯法来解决这个问题。

#### 解题思路
1. **回溯法**：
   - 使用递归来生成字母组合。
   - 在生成组合时，要注意映射关系。

#### 代码实现
```javascript
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if (digits.length === 0) return [];
    
    const map = {
        '2': ['a', 'b', 'c'],
        '3': ['d', 'e', 'f'],
        '4': ['g', 'h', 'i'],
        '5': ['j', 'k', 'l'],
        '6': ['m', 'n', 'o'],
        '7': ['p', 'q', 'r', 's'],
        '8': ['t', 'u', 'v'],
        '9': ['w', 'x', 'y', 'z']
    };
    
    const result = [];
    
    const backtrack = (path, index) => {
        if (index === digits.length) {
            result.push(path);
            return;
        }
        
        for (const char of map[digits[index]]) {
            backtrack(path + char, index + 1);
        }
    };
    
    backtrack('', 0);
    return result;
};
```

#### 易错点
1. 在生成组合时，要注意映射关系。
2. 在递归过程中，要注意更新路径和索引。

### 15. 三数之和

#### 题目链接
[https://leetcode.cn/problems/3sum/](https://leetcode.cn/problems/3sum/)

#### 题目内容
给定一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有满足条件且不重复的三元组。

注意：答案中不可以包含重复的三元组。

示例：
```
输入：nums = [-1, 0, 1, 2, -1, -4]
输出：[[-1, 0, 1], [-1, -1, 2]]
```

#### 解析
这个问题要求找出数组中所有满足条件且不重复的三元组。可以使用双指针来解决这个问题。

#### 解题思路
1. **双指针**：
   - 首先对数组进行排序。
   - 使用三个指针来遍历数组，固定一个指针，使用双指针来查找另外两个指针。
   - 在查找过程中，要注意避免重复。

#### 代码实现
```javascript
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a, b) => a - b);
    const result = [];
    
    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        
        let left = i + 1;
        let right = nums.length - 1;
        
        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];
            if (sum === 0) {
                result.push([nums[i], nums[left], nums[right]]);
                left++;
                right--;
                while (left < right && nums[left] === nums[left - 1]) left++;
                while (left < right && nums[right] === nums[right + 1]) right--;
            } else if (sum < 0) {
                left++;
            } else {
                right--;
            }
        }
    }
    
    return result;
};
```

#### 易错点
1. 在排序后，要注意跳过重复元素。
2. 在查找过程中，要注意更新左右边界。

### 11. 盛最多水的容器

#### 题目链接
[https://leetcode.cn/problems/container-with-most-water/](https://leetcode.cn/problems/container-with-most-water/)

#### 题目内容
给定 n 个非负整数 a1, a2, ..., an, 每个数代表坐标中的一个点 (i, ai)。在坐标内画 n 条垂直线，垂直线 i 的两个端点分别为 (i, ai) 和 (i, 0)。找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。

说明：你不能倾斜容器，且 n 至少为 2。

示例：
```
输入：[1,8,6,2,5,4,8,3,7]
输出：49
```

#### 解析
这个问题要求找出两条垂直线与 x 轴共同构成的容器可以容纳最多的水。可以使用双指针来解决这个问题。

#### 解题思路
1. **双指针**：
   - 使用两个指针，一个在数组的开头，一个在数组的末尾。
   - 计算两个指针之间的面积，并更新最大面积。
   - 移动较小的指针，继续计算面积。

#### 代码实现
```javascript
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let max = 0;
    let left = 0;
    let right = height.length - 1;
    
    while (left < right) {
        const area = Math.min(height[left], height[right]) * (right - left);
        max = Math.max(max, area);
        
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }
    
    return max;
};
```

#### 易错点
1. 在计算面积时，要注意使用 Math.min 函数。
2. 在更新最大面积时，要注意比较。

### 5. 最长回文子串

#### 题目链接
[https://leetcode.cn/problems/longest-palindromic-substring/](https://leetcode.cn/problems/longest-palindromic-substring/)

#### 题目内容
给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。

示例：
```
输入：s = "babad"
输出："bab"
解释："aba" 也是一个有效答案。
```

#### 解析
这个问题要求找到字符串中最长的回文子串。可以使用动态规划来解决这个问题。

#### 解题思路
1. **动态规划**：
   - 定义一个二维数组 dp，其中 dp[i][j] 表示字符串 s 从 i 到 j 是否为回文。
   - 初始化 dp[i][i] = true，表示每个字符本身就是一个回文。
   - 对于每个子串，检查它是否为回文，并更新 dp 数组。
   - 最终结果是 dp 数组中的最大回文子串。

#### 代码实现
```javascript
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    const n = s.length;
    const dp = Array(n).fill().map(() => Array(n).fill(false));
    let maxLen = 1;
    let start = 0;
    
    for (let i = 0; i < n; i++) {
        dp[i][i] = true;
    }
    
    for (let i = 0; i < n - 1; i++) {
        if (s[i] === s[i + 1]) {
            dp[i][i + 1] = true;
            maxLen = 2;
            start = i;
        }
    }
    
    for (let len = 3; len <= n; len++) {
        for (let i = 0; i <= n - len; i++) {
            const j = i + len - 1;
            if (s[i] === s[j] && dp[i + 1][j - 1]) {
                dp[i][j] = true;
                maxLen = len;
                start = i;
            }
        }
    }
    
    return s.substring(start, start + maxLen);
};
```

#### 易错点
1. 在初始化 dp 数组时，要注意使用 fill 方法。
2. 在更新 dp 数组时，要注意检查子串是否为回文。

### 3. 无重复字符的最长子串

#### 题目链接
[https://leetcode.cn/problems/longest-substring-without-repeating-characters/](https://leetcode.cn/problems/longest-substring-without-repeating-characters/)

#### 题目内容
给定一个字符串，请你找出其中不含有重复字符的最长子串的长度。

示例：
```
输入：s = "abcabcbb"
输出：3 
解释：因为无重复字符的最长子串是 "abc"，所以其长度为 3。
```

#### 解析
这个问题要求找出字符串中最长的不含有重复字符的子串。可以使用滑动窗口来解决这个问题。

#### 解题思路
1. **滑动窗口**：
   - 使用两个指针，一个指向窗口的开始，一个指向窗口的结束。
   - 移动结束指针，更新哈希表，检查是否存在重复字符。
   - 如果存在重复字符，则移动开始指针，直到没有重复字符。
   - 更新最大长度。

#### 代码实现
```javascript
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const map = new Map();
    let maxLen = 0;
    let start = 0;
    
    for (let end = 0; end < s.length; end++) {
        const char = s[end];
        if (map.has(char) && map.get(char) >= start) {
            start = map.get(char) + 1;
        }
        map.set(char, end);
        maxLen = Math.max(maxLen, end - start + 1);
    }
    
    return maxLen;
};
```

#### 易错点
1. 在更新哈希表时，要注意处理重复字符。
2. 在更新最大长度时，要注意比较。

### 2. 两数相加

#### 题目链接
[https://leetcode.cn/problems/add-two-numbers/](https://leetcode.cn/problems/add-two-numbers/)

#### 题目内容
给你两个非空的链表，表示两个非负的整数。它们每位数字都是按照逆序的方式存储的，并且每个节点只能存储一位数字。

请你将两个数相加，并以相同形式返回一个表示和的链表。

你可以假设除了数字 0 之外，这两个数都不会以 0 开头。

示例：
```
输入：l1 = [2,4,3], l2 = [5,6,4]
输出：[7,0,8]
解释：342 + 465 = 807.
```

#### 解析
这个问题要求将两个链表表示的非负整数相加，并以相同形式返回一个表示和的链表。可以使用链表来解决这个问题。

#### 解题思路
1. **链表**：
   - 使用一个虚拟头节点来简化边界情况的处理。
   - 使用一个指针来遍历两个链表。
   - 在遍历过程中，计算当前位的和，并更新进位。
   - 最后，如果还有进位，则添加一个新的节点。

#### 代码实现
```javascript
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    const dummy = new ListNode(0);
    let current = dummy;
    let carry = 0;
    
    while (l1 || l2) {
        const x = l1 ? l1.val : 0;
        const y = l2 ? l2.val : 0;
        const sum = x + y + carry;
        carry = Math.floor(sum / 10);
        current.next = new ListNode(sum % 10);
        current = current.next;
        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;
    }
    
    if (carry > 0) {
        current.next = new ListNode(carry);
    }
    
    return dummy.next;
};
```

#### 易错点
1. 在初始化虚拟头节点时，要注意使用 new ListNode(0)。
2. 在更新进位时，要注意使用 Math.floor 函数。

### 79. 单词搜索

#### 题目链接
[https://leetcode.cn/problems/word-search/](https://leetcode.cn/problems/word-search/)

#### 题目内容
给定一个二维网格和一个单词，找出该单词是否存在于网格中。

单词必须按照字母顺序，通过相邻的单元格内的字母构成，其中"相邻"单元格是那些水平相邻或垂直相邻的单元格。同一个单元格内的字母不允许被重复使用。

示例：
```
输入：board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
输出：true
```

#### 解析
这个问题要求在二维网格中搜索一个单词。可以使用深度优先搜索来解决这个问题。

#### 解题思路
1. **深度优先搜索**：
   - 对于每个单元格，检查它是否是单词的第一个字母。
   - 如果是，则从该单元格开始进行深度优先搜索。
   - 在搜索过程中，要注意标记已访问的单元格。
   - 如果找到单词，则返回 true。

#### 代码实现
```javascript
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    const m = board.length;
    const n = board[0].length;
    
    const dfs = (i, j, k) => {
        if (i < 0 || i >= m || j < 0 || j >= n || board[i][j] !== word[k]) return false;
        if (k === word.length - 1) return true;
        
        const temp = board[i][j];
        board[i][j] = '';
        
        const res = dfs(i + 1, j, k + 1) || dfs(i - 1, j, k + 1) || dfs(i, j + 1, k + 1) || dfs(i, j - 1, k + 1);
        
        board[i][j] = temp;
        return res;
    };
    
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] === word[0] && dfs(i, j, 0)) return true;
        }
    }
    
    return false;
};
```

#### 易错点
1. 在搜索过程中，要注意标记已访问的单元格。
2. 在搜索过程中，要注意更新索引。

### 114. 二叉树展开为链表

#### 题目链接
[https://leetcode.cn/problems/flatten-binary-tree-to-linked-list/](https://leetcode.cn/problems/flatten-binary-tree-to-linked-list/)

#### 题目内容
给定一个二叉树，原地将它展开为一个单链表。

示例：
```
输入：root = [1,2,5,3,4,null,6]
输出：[1,null,2,null,3,null,4,null,5,null,6]
```

#### 解析
这个问题要求将二叉树展开为一个单链表。可以使用递归来解决这个问题。

#### 解题思路
1. **递归**：
   - 对于每个节点，将其右子树和左子树展开为单链表。
   - 将左子树插入到当前节点和右子树之间。
   - 更新当前节点的右子树为展开后的右子树。

#### 代码实现
```javascript
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
    if (!root) return;
    
    const right = root.right;
    root.right = null;
    
    flatten(root.left);
    flatten(right);
    
    root.right = root.left;
    root.left = null;
    
    let current = root;
    while (current.right) current = current.right;
    current.right = right;
};
```

#### 易错点
1. 在递归过程中，要注意处理空节点。
2. 在更新当前节点的右子树时，要注意使用 right 变量。

### 621. 任务调度器

#### 题目链接
[https://leetcode.cn/problems/task-scheduler/](https://leetcode.cn/problems/task-scheduler/)

#### 题目内容
给定一个用字符数组表示的 CPU 需要执行的任务列表。其中每个字母表示一种不同种类的任务。任务可以以任意顺序执行，并且每个任务都可以在 1 个单位时间内执行完。在任何一个单位时间内，CPU 可以执行一个任务，或者在待命状态。

你需要计算完成所有任务所需要的最少时间。

示例：
```
输入：tasks = ["A","A","A","B","B","B"], n = 2
输出：8
解释：A -> B -> (待命) -> A -> B -> (待命) -> A -> B
```

#### 解析
这个问题要求计算完成所有任务所需要的最少时间。可以使用贪心算法来解决这个问题。

#### 解题思路
1. **贪心算法**：
   - 首先统计每个任务出现的次数。
   - 将出现次数最多的任务放在一起执行。
   - 在执行完出现次数最多的任务后，等待 n 个单位时间。
   - 重复上述过程，直到所有任务完成。

#### 代码实现
```javascript
/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {
    const map = new Map();
    for (const task of tasks) {
        map.set(task, (map.get(task) || 0) + 1);
    }
    
    const maxFreq = Math.max(...map.values());
    const maxCount = [...map.values()].filter(freq => freq === maxFreq).length;
    
    return Math.max(tasks.length, (maxFreq - 1) * (n + 1) + maxCount);
};
```

#### 易错点
1. 在统计任务出现次数时，要注意处理重复任务。
2. 在计算最少时间时，要注意处理出现次数最多的任务。

### 105. 从前序与中序遍历序列构造二叉树

#### 题目链接
[https://leetcode.cn/problems/construct-binary-tree-from-preorder-and-inorder-traversal/](https://leetcode.cn/problems/construct-binary-tree-from-preorder-and-inorder-traversal/)

#### 题目内容
根据一棵树的前序遍历与中序遍历构造二叉树。

注意：你可以假设树中没有重复的元素。

示例：
```
输入：preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
输出：[3,9,20,null,null,15,7]
```

#### 解析
这个问题要求根据一棵树的前序遍历与中序遍历构造二叉树。可以使用递归来解决这个问题。

#### 解题思路
1. **递归**：
   - 根据前序遍历的第一个元素确定根节点。
   - 在中序遍历中找到根节点的位置，确定左右子树的范围。
   - 递归构造左右子树。

#### 代码实现
```javascript
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    if (preorder.length === 0 || inorder.length === 0) return null;
    
    const rootVal = preorder[0];
    const root = new TreeNode(rootVal);
    
    const rootIndex = inorder.indexOf(rootVal);
    
    const leftInorder = inorder.slice(0, rootIndex);
    const rightInorder = inorder.slice(rootIndex + 1);
    
    const leftPreorder = preorder.slice(1, leftInorder.length + 1);
    const rightPreorder = preorder.slice(leftInorder.length + 1);
    
    root.left = buildTree(leftPreorder, leftInorder);
    root.right = buildTree(rightPreorder, rightInorder);
    
    return root;
};
```

#### 易错点
1. 在确定根节点位置时，要注意使用 indexOf 方法。
2. 在递归构造左右子树时，要注意使用 slice 方法。

### 102. 二叉树的层序遍历

#### 题目链接
[https://leetcode.cn/problems/binary-tree-level-order-traversal/](https://leetcode.cn/problems/binary-tree-level-order-traversal/)

#### 题目内容
给你一个二叉树，请你返回其按层序遍历得到的节点值。（即逐层地，从左到右访问所有节点）。

示例：
```
输入：root = [3,9,20,null,null,15,7]
输出：[[3],[9,20],[15,7]]
```

#### 解析
这个问题要求按层序遍历二叉树。可以使用广度优先搜索来解决这个问题。

#### 解题思路
1. **广度优先搜索**：
   - 使用队列来存储当前层的所有节点。
   - 对于每个节点，将其子节点加入队列。
   - 遍历完当前层的所有节点后，将队列中的节点值加入结果数组。

#### 代码实现
```javascript
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if (!root) return [];
    
    const result = [];
    const queue = [root];
    
    while (queue.length > 0) {
        const levelSize = queue.length;
        const levelNodes = [];
        
        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift();
            levelNodes.push(node.val);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        
        result.push(levelNodes);
    }
    
    return result;
};
```

#### 易错点
1. 在遍历当前层的所有节点时，要注意使用 shift 方法。
2. 在更新队列时，要注意使用 push 方法。

### 98. 验证二叉搜索树

#### 题目链接
[https://leetcode.cn/problems/validate-binary-search-tree/](https://leetcode.cn/problems/validate-binary-search-tree/)

#### 题目内容
给定一个二叉树，判断其是否是一个有效的二叉搜索树。

假设一个二叉搜索树具有如下特征：
- 节点的左子树只包含小于当前节点的数。
- 节点的右子树只包含大于当前节点的数。
- 所有左子树和右子树自身必须也是二叉搜索树。

示例：
```
输入：root = [2,1,3]
输出：true
```

#### 解析
这个问题要求判断一个二叉树是否是一个有效的二叉搜索树。可以使用递归来解决这个问题。

#### 解题思路
1. **递归**：
   - 对于每个节点，检查它是否满足二叉搜索树的性质。
   - 递归检查左子树和右子树。

#### 代码实现
```javascript
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
    const dfs = (node, lower, upper) => {
        if (!node) return true;
        
        if (node.val <= lower || node.val >= upper) return false;
        
        return dfs(node.left, lower, node.val) && dfs(node.right, node.val, upper);
    };
    
    return dfs(root, -Infinity, Infinity);
};
```

#### 易错点
1. 在递归过程中，要注意更新上下界。
2. 在检查节点值是否在上下界范围内时，要注意使用 Infinity。

### 96. 不同的二叉搜索树

#### 题目链接
[https://leetcode.cn/problems/unique-binary-search-trees/](https://leetcode.cn/problems/unique-binary-search-trees/)

#### 题目内容
给定一个整数 n，求以 1 ... n 为节点组成的二叉搜索树有多少种？

示例：
```
输入：n = 3
输出：5
```

#### 解析
这个问题要求计算以 1 ... n 为节点组成的二叉搜索树的数量。可以使用动态规划来解决这个问题。

#### 解题思路
1. **动态规划**：
   - 定义一个数组 dp，其中 dp[i] 表示以 i 为节点组成的二叉搜索树的数量。
   - 初始化 dp[0] = 1，表示没有节点时只有一种情况。
   - 对于每个节点 i，遍历 1 到 i 的所有节点，计算左右子树的数量，并更新 dp 数组。
   - 最终结果是 dp[n]。

#### 代码实现
```javascript
/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
    const dp = Array(n + 1).fill(0);
    dp[0] = 1;
    
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            dp[i] += dp[j - 1] * dp[i - j];
        }
    }
    
    return dp[n];
};
```

#### 易错点
1. 在更新 dp 数组时，要注意累加左右子树的数量。
2. 在初始化 dp 数组时，要注意长度。

### 78. 子集

#### 题目链接
[https://leetcode.cn/problems/subsets/](https://leetcode.cn/problems/subsets/)

#### 题目内容
给定一组不含重复元素的整数数组 nums，返回该数组所有可能的子集（幂集）。

说明：解集不能包含重复的子集。

示例：
```
输入：nums = [1,2,3]
输出：[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
```

#### 解析
这个问题要求生成一个数组的所有可能子集。可以使用回溯法来解决这个问题。

#### 解题思路
1. **回溯法**：
   - 使用递归来生成子集。
   - 在生成子集时，要注意避免重复使用元素。

#### 代码实现
```javascript
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    const result = [];
    
    const backtrack = (path, start) => {
        result.push([...path]);
        for (let i = start; i < nums.length; i++) {
            path.push(nums[i]);
            backtrack(path, i + 1);
            path.pop();
        }
    };
    
    backtrack([], 0);
    return result;
};
```

#### 易错点
1. 在生成子集时，要注意避免重复使用元素。
2. 在递归过程中，要注意更新路径和起始位置。

### 75. 颜色分类

#### 题目链接
[https://leetcode.cn/problems/sort-colors/](https://leetcode.cn/problems/sort-colors/)

#### 题目内容
给定一个包含红色、白色和蓝色，一共 n 个元素的数组，原地对它们进行排序，使得相同颜色的元素相邻，并按照红色、白色、蓝色顺序排列。

此题中，我们使用整数 0、1 和 2 分别表示红色、白色和蓝色。

注意：请不要使用代码库中的排序函数来解决这道题。

示例：
```
输入：nums = [2,0,2,1,1,0]
输出：[0,0,1,1,2,2]
```

#### 解析
这个问题要求对数组进行原地排序，使得相同颜色的元素相邻，并按照红色、白色、蓝色顺序排列。可以使用双指针来解决这个问题。

#### 解题思路
1. **双指针**：
   - 使用两个指针，一个指向当前处理位置，一个指向当前处理位置的下一个位置。
   - 遍历数组，将 0 放在数组的最前面，将 2 放在数组的最后面，将 1 放在中间。

#### 代码实现
```javascript
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let left = 0;
    let right = nums.length - 1;
    let i = 0;
    
    while (i <= right) {
        if (nums[i] === 0) {
            [nums[left], nums[i]] = [nums[i], nums[left]];
            left++;
            i++;
        } else if (nums[i] === 2) {
            [nums[right], nums[i]] = [nums[i], nums[right]];
            right--;
        } else {
            i++;
        }
    }
};
```

#### 易错点
1. 在遍历数组时，要注意更新左右边界。
2. 在交换元素时，要注意使用解构赋值。

### 72. 编辑距离

#### 题目链接
[https://leetcode.cn/problems/edit-distance/](https://leetcode.cn/problems/edit-distance/)

#### 题目内容
给你两个单词 word1 和 word2，请你计算出将 word1 转换成 word2 所使用的最少操作数。

你可以对一个单词进行如下三种操作：
1. 插入一个字符
2. 删除一个字符
3. 替换一个字符

示例：
```
输入：word1 = "horse", word2 = "ros"
输出：3
解释：
horse -> rorse (将 'h' 替换为 'r')
rorse -> rose (删除 'r')
rose -> ros (删除 'e')
```

#### 解析
这个问题要求计算将一个单词转换成另一个单词所使用的最少操作数。可以使用动态规划来解决这个问题。

#### 解题思路
1. **动态规划**：
   - 定义一个二维数组 dp，其中 dp[i][j] 表示将 word1 的前 i 个字符转换成 word2 的前 j 个字符所使用的最少操作数。
   - 初始化 dp[0][0] = 0，表示两个空字符串之间的操作数为 0。
   - 对于每个字符，更新 dp 数组。
   - 最终结果是 dp[word1.length][word2.length]。

#### 代码实现
```javascript
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    const m = word1.length;
    const n = word2.length;
    const dp = Array(m + 1).fill().map(() => Array(n + 1).fill(0));
    
    for (let i = 0; i <= m; i++) {
        dp[i][0] = i;
    }
    
    for (let j = 0; j <= n; j++) {
        dp[0][j] = j;
    }
    
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (word1[i - 1] === word2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1];
            } else {
                dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1;
            }
        }
    }
    
    return dp[m][n];
};
```

#### 易错点
1. 在初始化 dp 数组时，要注意使用 fill 方法。
2. 在更新 dp 数组时，要注意比较。

### 581. 最短无序连续子数组

#### 题目链接

### 56. 合并区间

#### 题目链接
[https://leetcode.cn/problems/merge-intervals/](https://leetcode.cn/problems/merge-intervals/)

#### 题目内容
以数组 `intervals` 表示若干个区间的集合，其中单个区间为 `intervals[i] = [starti, endi]`。请你合并所有重叠的区间，并返回一个不重叠的区间数组，该数组需恰好覆盖输入中的所有区间。

示例：
```
输入：intervals = [[1,3],[2,6],[8,10],[15,18]]
输出：[[1,6],[8,10],[15,18]]
解释：区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].

输入：intervals = [[1,4],[4,5]]
输出：[[1,5]]
解释：区间 [1,4] 和 [4,5] 可被视为重叠区间。
```

#### 解析
这个问题要求合并所有重叠的区间。重叠的判断标准是：如果两个区间有任何重叠部分，就应该合并成一个大区间。

#### 解题思路
1. **排序 + 一次遍历**：
   - 首先按照区间的起始位置对所有区间进行排序
   - 初始化结果数组，将第一个区间加入结果
   - 遍历排序后的区间，对于每个区间：
     - 如果它与结果数组中最后一个区间重叠，则合并这两个区间
     - 如果不重叠，则直接加入结果数组

#### 代码实现
```javascript
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    if (!intervals || intervals.length <= 1) return intervals;
    
    // 按区间起始位置排序
    intervals.sort((a, b) => a[0] - b[0]);
    
    const result = [intervals[0]];
    
    for (let i = 1; i < intervals.length; i++) {
        const current = intervals[i];
        const lastMerged = result[result.length - 1];
        
        // 如果当前区间的起始位置小于等于上一个合并区间的结束位置，说明有重叠
        if (current[0] <= lastMerged[1]) {
            // 合并区间，更新结束位置为两个区间结束位置的最大值
            lastMerged[1] = Math.max(lastMerged[1], current[1]);
        } else {
            // 没有重叠，直接加入结果
            result.push(current);
        }
    }
    
    return result;
};
```

#### 易错点
1. 排序时需要按区间的起始位置排序，而不是结束位置
2. 判断重叠的条件：当前区间的起始位置 <= 上一个区间的结束位置
3. 合并区间时，结束位置应该取两个区间结束位置的最大值
4. 处理边界情况，如空数组或只有一个区间的情况
### 55. 跳跃游戏

#### 题目链接
[https://leetcode.cn/problems/jump-game/](https://leetcode.cn/problems/jump-game/)

#### 题目内容
给定一个非负整数数组 `nums`，你最初位于数组的第一个下标。

数组中的每个元素代表你在该位置可以跳跃的最大长度。

判断你是否能够到达最后一个下标。

示例：
```
输入：nums = [2,3,1,1,4]
输出：true
解释：可以先跳 1 步，从下标 0 到达下标 1, 然后再从下标 1 跳 3 步到达最后一个下标。

输入：nums = [3,2,1,0,4]
输出：false
解释：无论怎样，总会到达下标为 3 的位置。但该下标的最大跳跃长度是 0 ， 所以永远不可能到达最后一个下标。
```

#### 解析
这个问题要求判断是否能从数组的第一个位置跳到最后一个位置。每个位置的值代表可以跳跃的最大步数，我们需要判断是否有一条路径能够到达终点。

#### 解题思路
1. **贪心算法**：
   - 维护一个变量 `maxReach`，表示能够到达的最远位置
   - 遍历数组，对于每个位置 i：
     - 如果 i > maxReach，说明无法到达位置 i，返回 false
     - 更新 maxReach = max(maxReach, i + nums[i])
     - 如果 maxReach >= nums.length - 1，说明可以到达最后一个位置，返回 true

2. **反向遍历**：
   - 从后往前遍历，维护一个变量 `lastPos` 表示能到达最后一个位置的最小索引
   - 对于每个位置 i，如果 i + nums[i] >= lastPos，则更新 lastPos = i
   - 最后检查 lastPos 是否为 0

#### 代码实现（贪心算法）
```javascript
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let maxReach = 0;
    
    for (let i = 0; i < nums.length; i++) {
        // 如果当前位置已经超过了能到达的最远位置，返回false
        if (i > maxReach) return false;
        
        // 更新能到达的最远位置
        maxReach = Math.max(maxReach, i + nums[i]);
        
        // 如果已经能到达或超过最后一个位置，返回true
        if (maxReach >= nums.length - 1) return true;
    }
    
    return true; // 可以到达最后一个位置
};
```

#### 代码实现（反向遍历）
```javascript
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let lastPos = nums.length - 1;
    
    for (let i = nums.length - 2; i >= 0; i--) {
        if (i + nums[i] >= lastPos) {
            lastPos = i;
        }
    }
    
    return lastPos === 0;
};
```

#### 易错点
1. 边界情况处理：单个元素的数组应返回true
2. 贪心算法中，当前位置必须小于等于能到达的最远位置，否则无法继续
3. 更新最远可达位置时，需要取当前最远位置和新计算位置的最大值
4. 反向遍历时，判断条件是当前位置加上可跳跃距离能否到达或超过最后能到达的位置

### 53. 最大子数组和

#### 题目链接
[https://leetcode.cn/problems/maximum-subarray/](https://leetcode.cn/problems/maximum-subarray/)

#### 题目内容
给你一个整数数组 `nums`，请你找出一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。

子数组是数组中的一个连续部分。

示例：
```
输入：nums = [-2,1,-3,4,-1,2,1,-5,4]
输出：6
解释：连续子数组 [4,-1,2,1] 的和最大，为 6。

输入：nums = [1]
输出：1

输入：nums = [5,4,-1,7,8]
输出：23
```

#### 解析
这是一个经典的动态规划问题，也可以用贪心算法解决。我们需要找到一个具有最大和的连续子数组。

#### 解题思路
1. **动态规划**：
   - 定义状态：`dp[i]` 表示以第 i 个元素结尾的连续子数组的最大和
   - 状态转移方程：`dp[i] = max(dp[i-1] + nums[i], nums[i])`
   - 最终结果是 dp 数组的最大值

2. **贪心算法（Kadane算法）**：
   - 维护两个变量：
     - `currentSum`：当前子数组的和
     - `maxSum`：全局最大子数组和
   - 遍历数组，对于每个元素：
     - 如果 currentSum > 0，继续累加当前元素
     - 如果 currentSum <= 0，重置 currentSum 为当前元素
     - 更新 maxSum = max(maxSum, currentSum)

3. **分治法**：
   - 将数组分成左右两部分
   - 递归计算左半部分的最大子数组和
   - 递归计算右半部分的最大子数组和
   - 计算跨越中点的最大子数组和
   - 返回三者中的最大值

#### 代码实现（动态规划）
```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    if (!nums || nums.length === 0) return 0;
    
    const dp = new Array(nums.length);
    dp[0] = nums[0];
    let maxSum = dp[0];
    
    for (let i = 1; i < nums.length; i++) {
        dp[i] = Math.max(dp[i-1] + nums[i], nums[i]);
        maxSum = Math.max(maxSum, dp[i]);
    }
    
    return maxSum;
};
```

#### 代码实现（贪心算法）
```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    if (!nums || nums.length === 0) return 0;
    
    let currentSum = nums[0];
    let maxSum = nums[0];
    
    for (let i = 1; i < nums.length; i++) {
        // 如果当前累加和为负数，重新开始累加
        currentSum = Math.max(nums[i], currentSum + nums[i]);
        maxSum = Math.max(maxSum, currentSum);
    }
    
    return maxSum;
};
```

#### 代码实现（分治法）
```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    if (!nums || nums.length === 0) return 0;
    
    return maxSubArrayHelper(nums, 0, nums.length - 1);
};

function maxSubArrayHelper(nums, left, right) {
    if (left === right) return nums[left];
    
    const mid = Math.floor((left + right) / 2);
    
    // 计算左半部分的最大子数组和
    const leftMax = maxSubArrayHelper(nums, left, mid);
    // 计算右半部分的最大子数组和
    const rightMax = maxSubArrayHelper(nums, mid + 1, right);
    // 计算跨越中点的最大子数组和
    const crossMax = maxCrossingSum(nums, left, mid, right);
    
    // 返回三者中的最大值
    return Math.max(leftMax, rightMax, crossMax);
}

function maxCrossingSum(nums, left, mid, right) {
    // 计算包含mid的左半部分最大子数组和
    let leftSum = 0;
    let maxLeftSum = -Infinity;
    for (let i = mid; i >= left; i--) {
        leftSum += nums[i];
        maxLeftSum = Math.max(maxLeftSum, leftSum);
    }
    
    // 计算包含mid+1的右半部分最大子数组和
    let rightSum = 0;
    let maxRightSum = -Infinity;
    for (let i = mid + 1; i <= right; i++) {
        rightSum += nums[i];
        maxRightSum = Math.max(maxRightSum, rightSum);
    }
    
    // 返回跨越中点的最大子数组和
    return maxLeftSum + maxRightSum;
}
```

#### 空间优化版本（动态规划）
```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    if (!nums || nums.length === 0) return 0;
    
    let prevMax = nums[0];
    let maxSum = nums[0];
    
    for (let i = 1; i < nums.length; i++) {
        prevMax = Math.max(prevMax + nums[i], nums[i]);
        maxSum = Math.max(maxSum, prevMax);
    }
    
    return maxSum;
};
```

#### 易错点
1. 边界情况处理：空数组或只有一个元素的数组
2. 更新当前子数组和时，需要比较当前元素和当前元素加上前面子数组和的大小
3. 分治法中跨越中点的最大子数组和计算逻辑
4. 在动态规划中，需要记录全局最大值，而不只是最后一个元素的状态 



<BackToTop />