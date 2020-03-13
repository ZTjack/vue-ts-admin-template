/*
 * @Author: Jack
 * @Date: 2020-01-10 15:40:37
 * @LastEditors  : Jack
 * @LastEditTime : 2020-01-16 12:13:30
 * @Description:
 */
import adaptive from './adaptive'

const install = function(Vue: any) {
  Vue.directive('el-height-adaptive-table', adaptive)
}

// @ts-ignore
if (window.Vue) {
  // @ts-ignore
  window['el-height-adaptive-table'] = adaptive
  // @ts-ignore
  window.Vue.use(install)
}

// @ts-ignore
adaptive.install = install
export default adaptive
