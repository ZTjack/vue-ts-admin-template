/*
 * @Author: Jack
 * @Date: 2020-01-10 15:40:37
 * @LastEditors: Jack
 * @LastEditTime: 2020-01-19 14:27:30
 * @Description:
 */
import store from '@/store'
import { UserModule } from '@/store/modules/user'

export default {
  inserted(el: any, binding: any, vNode: any) {
    const { value } = binding
    const roles = UserModule.roles

    if (value && value instanceof Array && value.length > 0) {
      const permissionRoles = value

      const hasPermission = roles.some((role: any) => {
        return permissionRoles.includes(role)
      })

      if (!hasPermission) {
        el.parentNode && el.parentNode.removeChild(el)
      }
    } else {
      throw new Error(`need roles! Like v-permission="['admin','editor']"`)
    }
  }
}
