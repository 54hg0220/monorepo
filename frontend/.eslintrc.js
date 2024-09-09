module.exports = {
    parser: '@typescript-eslint/parser', // 使用 TypeScript 解析器
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended', // 使用 TypeScript 推荐规则
      'react-app',
      'react-app/jest',
    ],
    plugins: ['@typescript-eslint'], // 添加 TypeScript 插件
    rules: {
    },
  };
