/*
 * @Author: Jack
 * @Date: 2020-01-10 15:40:37
 * @LastEditors  : Jack
 * @LastEditTime : 2020-02-04 13:21:17
 * @Description:
 */
module.exports = {
  moduleFileExtensions: [
    'js',
    'jsx',
    'json',
    'vue',
    'ts',
    'tsx'
  ],

  transform: {
    '^.+\\.vue$': 'vue-jest',
    '.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
    '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.tsx?$': 'ts-jest'
  },

  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },

  snapshotSerializers: ['jest-serializer-vue'],

  testMatch: [
    '**/tests/unit/**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx)'
  ],

  collectCoverageFrom: ['src/utils/**/*.{js,vue}', '!src/utils/auth.ts', '!src/utils/request.ts', 'src/components/**/*.{js,vue}'],
  coverageDirectory: '<rootDir>/tests/unit/coverage',

  // 'collectCoverage': true,
  'coverageReporters': [
    'lcov',
    'text-summary'
  ],

  testURL: 'http://localhost/',

  globals: {
    'ts-jest': {
      babelConfig: true
    }
  }
}
