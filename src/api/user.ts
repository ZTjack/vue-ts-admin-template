/*
 * @Author: Jack
 * @Date: 2020-01-13 17:48:54
 * @LastEditors  : Jack
 * @LastEditTime : 2020-01-19 11:48:45
 * @Description:
 */
import request from '@/utils/request'

export function login(data: object) {
  return request({
    url: '/vue-element-admin/user/login',
    method: 'post',
    data
  })
}

export function getInfo(token: string | undefined) {
  return request({
    url: '/vue-element-admin/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/vue-element-admin/user/logout',
    method: 'post'
  })
}
