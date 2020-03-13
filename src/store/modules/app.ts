/*
 * @Author: Jack
 * @Date: 2020-01-16 14:06:01
 * @LastEditors  : Jack
 * @LastEditTime : 2020-01-19 13:57:04
 * @Description:
 */

import {
  VuexModule,
  Module,
  Mutation,
  Action,
  getModule
} from 'vuex-module-decorators'
import {
  getSidebarStatus,
  getSize,
  setSidebarStatus,
  setSize
} from '@/utils/cookies'
import store from '@/store'

export enum DeviceType {
  Mobile = 'mobile', // eslint-disable-line
  Desktop = 'desktop',// eslint-disable-line
}

export interface IAppState {
  device: DeviceType
  sidebar: {
    opened: boolean
    withoutAnimation: boolean
  }
  size: string
}

@Module({ dynamic: true, store, name: 'app' })
class App extends VuexModule implements IAppState {
  public sidebar = {
    opened: getSidebarStatus(),
    withoutAnimation: false
  }
  public device = DeviceType.Desktop
  public size = getSize() || 'medium'

  @Mutation
  private TOGGLE_SIDEBAR() {
    this.sidebar.opened = !this.sidebar.opened
    this.sidebar.withoutAnimation = false
    if (this.sidebar.opened) {
      setSidebarStatus(1)
    } else {
      setSidebarStatus(0)
    }
  }

  @Mutation
  private CLOSE_SIDEBAR(withoutAnimation: boolean) {
    this.sidebar.opened = false
    this.sidebar.withoutAnimation = withoutAnimation
    setSidebarStatus(0)
  }

  @Mutation
  private TOGGLE_DEVICE(device: DeviceType) {
    this.device = device
  }

  @Mutation
  private SET_SIZE(size: string) {
    this.size = size
    setSize(this.size)
  }

  @Action
  public toggleSideBar() {
    this.TOGGLE_SIDEBAR()
  }

  @Action
  public closeSideBar(withoutAnimation: boolean) {
    this.CLOSE_SIDEBAR(withoutAnimation)
  }

  @Action
  public toggleDevice(device: DeviceType) {
    this.TOGGLE_DEVICE(device)
  }

  @Action
  public setSize(size: string) {
    this.SET_SIZE(size)
  }
}

export const AppModule = getModule(App)
