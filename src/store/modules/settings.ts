/*
 * @Author: Jack
 * @Date: 2020-01-16 16:39:05
 * @LastEditors  : Jack
 * @LastEditTime : 2020-01-16 16:43:59
 * @Description:
 */
import { VuexModule, Module, Mutation, Action, getModule } from 'vuex-module-decorators'
import store from '@/store'
import variables from '@/styles/element-variables.scss'
import defaultSettings from '@/settings'

export interface ISettingsState {
  theme: string
  fixedHeader: boolean
  showSettings: boolean
  tagsView: boolean
  sidebarLogo: boolean
}

@Module({ dynamic: true, store, name: 'settings' })
class Settings extends VuexModule implements ISettingsState {
  public theme = variables.theme
  public fixedHeader = defaultSettings.fixedHeader
  public showSettings = defaultSettings.showSettings
  public tagsView = defaultSettings.tagsView
  public sidebarLogo = defaultSettings.sidebarLogo

  @Mutation
  private CHANGE_SETTING(payload: { key: string, value: any }) {
    const { key, value } = payload
    if (Object.prototype.hasOwnProperty.call(this, key)) {
      (this as any)[key] = value
    }
  }

  @Action
  public ChangeSetting(payload: { key: string, value: any}) {
    this.CHANGE_SETTING(payload)
  }
}

export const SettingsModule = getModule(Settings)

