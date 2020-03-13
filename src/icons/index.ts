/*
 * @Author: Jack
 * @Date: 2020-01-10 17:34:38
 * @LastEditors  : Jack
 * @LastEditTime : 2020-01-10 17:36:52
 * @Description:
 */
import Vue from 'vue'
import SvgIcon from '@/components/SvgIcon/index.vue' // svg component

// register globally
Vue.component('svg-icon', SvgIcon)

const req = require.context('./svg', false, /\.svg$/)
const requireAll = (requireContext: any) =>
  requireContext.keys().map(requireContext)
requireAll(req)
