/*
 * @Author: Jack
 * @Date: 2019-07-24 14:32:25
 * @LastEditors  : Jack
 * @LastEditTime : 2020-01-19 14:51:43
 * @Description: 全局配置文件
 * 1. 配置title
 * 2. 配置总体布局
 */

interface ISettings {
  title: string // Overrides the default title
  showSettings: boolean // Controls settings panel display
  tagsView: boolean // Controls tagsview display
  fixedHeader: boolean // If true, will fix the header component
  sidebarLogo: boolean // Controls siderbar logo display
  errorLog: string[] // The env to enable the errorlog component, default 'production' only
}

const settings: ISettings = {
  title: "Jack's VUE TS TEMPLATE",
  showSettings: true,
  tagsView: true,
  fixedHeader: false,
  sidebarLogo: false,
  errorLog: ['production']
}

export default settings
