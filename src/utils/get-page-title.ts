/*
 * @Author: Jack
 * @Date: 2020-01-10 15:40:37
 * @LastEditors: Jack
 * @LastEditTime: 2020-01-19 14:53:29
 * @Description:
 */
import defaultSettings from '@/settings'

const title = defaultSettings.title || 'Vue Element Admin'

export default function getPageTitle(pageTitle: string) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
