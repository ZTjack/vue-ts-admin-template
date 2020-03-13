/*
 * @Author: Jack
 * @Date: 2020-01-16 13:58:21
 * @LastEditors  : Jack
 * @LastEditTime : 2020-01-16 18:02:32
 * @Description:
 */

import Cookies from 'js-cookie'

// App
const sidebarStatusKey = 'sidebarStatus'
export const getSidebarStatus = () =>
  Cookies.get('sidebarStatus') ? !!Cookies.get('sidebarStatus') : true
export const setSidebarStatus = (sidebarStatus: number) =>
  Cookies.set(sidebarStatusKey, sidebarStatus.toString())

// elementUI size
const sizeKey = 'size'
export const getSize = () => Cookies.get(sizeKey)
export const setSize = (size: string) => Cookies.set(sizeKey, size)

// Admin
const tokenKey = 'Admin-Token'
export const getToken = () => Cookies.get(tokenKey)
export const setToken = (token: string) => Cookies.set(tokenKey, token)
export const removeToken = () => Cookies.remove(tokenKey)
