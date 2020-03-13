/*
 * @Author: Jack
 * @Date: 2020-01-10 15:40:37
 * @LastEditors  : Jack
 * @LastEditTime : 2020-01-16 12:31:04
 * @Description:
 */
import drag from './drag'

const install = function(Vue: any) {
  Vue.directive('el-drag-dialog', drag)
}

// @ts-ignore
if (window.Vue) {
  // @ts-ignore
  window['el-drag-dialog'] = drag
  // @ts-ignore
  window.Vue.use(install); // eslint-disable-line
}

// @ts-ignore
drag.install = install
export default drag
