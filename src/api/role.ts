/*
 * @Author: Jack
 * @Date: 2020-01-13 17:48:18
 * @LastEditors: Jack
 * @LastEditTime: 2020-01-13 17:48:48
 * @Description:
 */
import request from '@/utils/request'

export function getRoutes() {
  return request({
    url: '/routes',
    method: 'get'
  })
}

export function getRoles() {
  return request({
    url: '/roles',
    method: 'get'
  })
}

export function addRole(data:object) {
  return request({
    url: '/role',
    method: 'post',
    data
  })
}

export function updateRole(id:number, data:object) {
  return request({
    url: `/role/${id}`,
    method: 'put',
    data
  })
}

export function deleteRole(id:number) {
  return request({
    url: `/role/${id}`,
    method: 'delete'
  })
}
