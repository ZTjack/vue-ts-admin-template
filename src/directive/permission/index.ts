/*
 * @Author: Jack
 * @Date: 2020-01-10 15:40:37
 * @LastEditors  : Jack
 * @LastEditTime : 2020-01-16 12:31:12
 * @Description:
 */
import permission from './permission'

const install = function(Vue: any) {
  Vue.directive('permission', permission)
}

// @ts-ignore
if (window.Vue) {
  // @ts-ignore
  window['permission'] = permission
  // @ts-ignore
  window.Vue.use(install)
}

// @ts-ignore
permission.install = install
export default permission
