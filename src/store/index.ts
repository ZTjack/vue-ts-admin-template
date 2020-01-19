/*
 * @Author: Jack
 * @Date: 2020-01-16 18:03:34
 * @LastEditors  : Jack
 * @LastEditTime : 2020-01-19 12:15:22
 * @Description:
 */

import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import { IAppState } from './modules/app'
import { IUserState } from './modules/user'
import { ITagsViewState } from './modules/tagsView'
import { IErrorLogState } from './modules/errorLog'
import { IPermissionState } from './modules/permission'
import { ISettingsState } from './modules/settings'

Vue.use(Vuex)

export interface IRootState {
  app: IAppState
  user: IUserState
  tagsView: ITagsViewState
  errorLog: IErrorLogState
  permission: IPermissionState
  settings: ISettingsState
}

// Declare empty store first, dynamically register all modules later.
export default new Vuex.Store<IRootState>({
  getters
})
