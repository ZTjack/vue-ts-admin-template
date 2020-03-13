/*
 * @Author: Jack
 * @Date: 2020-01-10 15:40:37
 * @LastEditors: Jack
 * @LastEditTime: 2020-01-16 12:19:16
 * @Description:
 */
import waves from './waves'

const install = function(Vue: any) {
  Vue.directive('waves', waves)
}

// @ts-ignore
if (window.Vue) {
  // @ts-ignore
  window.waves = waves
  // @ts-ignore
  window.Vue.use(install)
}

// @ts-ignore
waves.install = install
export default waves
