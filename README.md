# utils-test使用手册

- 描述：npm包测试-方法库

- 安装

  `npm i @hjm123/utils-test`
- 引入
  
  `import { midSort,debounce } from '@hjm123/utils-test'`
- 使用

1. 二分法排序

  `midSort([7, 89, 2, 465, 789, 121, 5, 6, 7, 9, 756, 15])`

  `// 打印 [2, 5, 6, 7, 7, 9, 15, 89, 121, 465, 756, 789]`

2. 防抖

   `<button type="button" @click="handleClick">点击</button>`

   `const handleClick = debounce(() => {}, 1000);`
  
3. 节流

   使用方法同上