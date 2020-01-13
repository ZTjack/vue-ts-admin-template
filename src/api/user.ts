/*
 * @Author: Jack
 * @Date: 2020-01-13 17:48:54
 * @LastEditors: Jack
 * @LastEditTime: 2020-01-13 17:49:11
 * @Description:
 */
import request from '@/utils/request'

export function login(data:object) {
  return request({
    url: '/user/login',
    method: 'post',
    data
  })
}

export function getInfo(token:string) {
  return request({
    url: '/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/user/logout',
    method: 'post'
  })
}
