/*
 * @Author: Jack
 * @Date: 2020-01-10 15:40:37
 * @LastEditors  : Jack
 * @LastEditTime : 2020-02-03 16:24:16
 * @Description:
 */
import Vue from 'vue'
import { ErrorLogModule } from '@/store/modules/errorLog'
import { isArray } from '@/utils/validate'
import settings from '@/settings'

// you can set in settings.js
// errorLog: ['production', 'development']
const { errorLog: needErrorLog } = settings

function checkNeed() {
  const env = process.env.NODE_ENV
  return env && needErrorLog.includes(env)
}

if (checkNeed()) {
  Vue.config.errorHandler = function(err, vm, info) {
    // Don't ask me why I use Vue.nextTick, it just a hack.
    // detail see https://forum.vuejs.org/t/dispatch-in-vue-config-errorhandler-has-some-problem/23500
    Vue.nextTick(() => {
      ErrorLogModule.addErrorLog({
        err,
        vm,
        info,
        url: window.location.href
      })
    })
  }
}
