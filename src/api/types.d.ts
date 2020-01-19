/*
 * @Author: Jack
 * @Date: 2020-01-19 15:48:29
 * @LastEditors: Jack
 * @LastEditTime: 2020-01-19 15:48:50
 * @Description:
 */

export interface IRoleData {
  key: string
  name: string
  description: string
  routes: any
}

export interface IUserData {
  id: number
  username: string
  password: string
  name: string
  email: string
  phone: string
  avatar: string
  introduction: string
  roles: string[]
}
