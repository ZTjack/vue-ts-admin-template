/*
 * @Author: Jack
 * @Date: 2019-07-24 14:32:25
 * @LastEditors  : Jack
 * @LastEditTime : 2020-01-10 12:14:38
 * @Description:
 * 1. 采用了normalize作为base.css 然后再引入index.scss
 * 2. 全局引如了elementUI
 * 3. router分为了两部分，权限路由 && 非权限路由，默认值载入后者
 * 4. store基本都是按照modules来管理的，干净
 * 5. permission是接口router做权限管理的，动态载入上方的权限路由
 * 6. icons就是SvgIcon的一个应用，没用可以去掉的
 * 7. error-log就是在vue的全局errorHandle上挂载一些output
 * 8. 注册全局filter
 */
import Vue from 'vue'

import Cookies from 'js-cookie'

import 'normalize.css/normalize.css' // a modern alternative to CSS resets

import Element from 'element-ui'
import './styles/element-variables.scss'

import '@/styles/index.scss' // global css

import App from './App.vue'
import store from './store'
import router from './router'

import './icons' // icon
import './permission' // permission control
import './utils/error-log' // error log

import * as filters from './filters' // global filters

/**
 * If you don't want to use mock-server
 * you want to use MockJs for mock api
 * you can execute: mockXHR()
 *
 * Currently MockJs will be used in the production environment,
 * please remove it before going online ! ! !
 */
if (process.env.NODE_ENV === 'production') {
  import('../mock').then(({ mockXHR }) => {
    mockXHR()
  })
}

Vue.use(Element, {
  size: Cookies.get('size') || 'medium' // set element-ui default size
})

// register global utility filters
Object.keys(filters).forEach(key => {
  Vue.filter(key, (filters as { [key: string ]: Function })[key])
})

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
