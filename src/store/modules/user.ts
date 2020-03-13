import {
  VuexModule,
  Module,
  Action,
  Mutation,
  getModule
} from 'vuex-module-decorators'
import { login, logout, getInfo } from '@/api/user'
import { getToken, setToken, removeToken } from '@/utils/cookies'
import router, { resetRouter } from '@/router'
import { PermissionModule } from './permission'
import { TagsViewModule } from './tagsView'
import store from '@/store'

export interface IUserState {
  token: string | undefined
  name: string
  avatar: string
  introduction: string
  roles: string[]
}

@Module({ dynamic: true, store, name: 'user' })
class User extends VuexModule implements IUserState {
  public token = getToken()
  public name = ''
  public avatar = ''
  public introduction = ''
  public roles: string[] = []
  public email = ''

  @Mutation
  private SET_TOKEN(token: string) {
    this.token = token
  }

  @Mutation
  private SET_INTRODUCTION(introduction: string) {
    this.introduction = introduction
  }

  @Mutation
  private SET_NAME(name: string) {
    this.name = name
  }

  @Mutation
  private SET_AVATAR(avatar: string) {
    this.avatar = avatar
  }

  @Mutation
  private SET_ROLES(roles: string[]) {
    this.roles = roles
  }

  @Action
  public async login(userInfo: { username: string; password: string }) {
    const { username, password } = userInfo
    return new Promise((resolve, reject) => {
      login({ username: username.trim(), password: password })
        .then(response => {
          const { data } = response
          this.SET_TOKEN(data.token)
          setToken(data.token)
          resolve()
        })
        .catch((error: any) => {
          reject(error)
        })
    })
  }

  @Action
  public async getInfo() {
    return new Promise((resolve, reject) => {
      getInfo(this.token)
        .then((response: any) => {
          const { data } = response

          if (!data) {
            reject('Verification failed, please Login again.')
          }

          const { roles, name, avatar, introduction } = data

          // roles must be a non-empty array
          if (!roles || roles.length <= 0) {
            reject('getInfo: roles must be a non-null array!')
          }

          this.SET_ROLES(roles)
          this.SET_NAME(name)
          this.SET_AVATAR(avatar)
          this.SET_INTRODUCTION(introduction)
          resolve(data)
        })
        .catch((error: any) => {
          reject(error)
        })
    })
  }

  @Action
  public async logout() {
    return new Promise((resolve, reject) => {
      logout()
        .then(() => {
          this.SET_TOKEN('')
          this.SET_ROLES([])
          removeToken()
          resetRouter()
          // reset visited views and cached views
          // to fixed https://github.com/PanJiaChen/vue-element-admin/issues/2485
          TagsViewModule.delAllViews()
          resolve()
        })
        .catch(error => {
          reject(error)
        })
    })
  }

  @Action
  public resetToken() {
    return new Promise(resolve => {
      this.SET_TOKEN('')
      this.SET_ROLES([])
      removeToken()
      resolve()
    })
  }

  @Action
  public async changeRoles(role: string) {
    const token = role + '-token'
    this.SET_TOKEN(token)
    setToken(token)
    await this.getInfo()

    return new Promise(resolve => {
      resetRouter()

      PermissionModule.generateRoutes(this.roles)

      router.addRoutes(PermissionModule.addRoutes)

      TagsViewModule.delAllViews()

      resolve()
    })
  }
}

export const UserModule = getModule(User)
