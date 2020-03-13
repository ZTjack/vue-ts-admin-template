/*
 * @Author: Jack
 * @Date: 2020-03-02 15:41:49
 * @LastEditors: Jack
 * @LastEditTime: 2020-03-13 16:15:29
 * @Description:
 */
module.exports = {
  root: true,
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  env: {
    browser: true,
    node: true,
    es6: true
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/recommended',
    '@vue/typescript',
    'plugin:prettier/recommended'
  ],
  rules: {
    'vue/no-v-html': 0,
    // 每行多少个属性，html
    'vue/max-attributes-per-line': [
      0,
      {
        singleline: 2,
        multiline: {
          max: 1,
          allowFirstLine: false
        }
      }
    ],
    // 有的时候ts会 (this as HTMLElement).focus()
    'no-extra-semi': 0,
    'vue/html-indent': [
      0,
      'tab',
      {
        attribute: 1,
        baseIndent: 1,
        closeBracket: 0,
        alignAttributesVertically: true,
        ignores: []
      }
    ],
    'vue/html-closing-bracket-newline': 0,
    'vue/html-self-closing': 0,
    'vue/singleline-html-element-content-newline': [
      'error',
      {
        ignoreWhenNoAttributes: true,
        ignoreWhenEmpty: true
      }
    ]
  }
}
