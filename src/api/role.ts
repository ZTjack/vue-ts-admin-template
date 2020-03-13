/*
 * @Author: Jack
 * @Date: 2020-01-13 17:48:18
 * @LastEditors  : Jack
 * @LastEditTime : 2020-01-19 11:49:34
 * @Description:
 */
import request from '@/utils/request'

export function getRoutes() {
  return request({
    url: '/vue-element-admin/routes',
    method: 'get'
  })
}

export function getRoles() {
  return request({
    url: '/vue-element-admin/roles',
    method: 'get'
  })
}

export function addRole(data: object) {
  return request({
    url: '/vue-element-admin/role',
    method: 'post',
    data
  })
}

export function updateRole(id: number, data: object) {
  return request({
    url: `/vue-element-admin/role/${id}`,
    method: 'put',
    data
  })
}

export function deleteRole(id: number) {
  return request({
    url: `/vue-element-admin/role/${id}`,
    method: 'delete'
  })
}
