/*
 * @Author: Jack
 * @Date: 2020-01-10 15:40:37
 * @LastEditors: Jack
 * @LastEditTime: 2020-01-16 18:17:36
 * @Description:
 */
import Cookies from 'js-cookie'

const TokenKey = 'Admin-Token'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}
