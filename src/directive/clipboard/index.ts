import Clipboard from './clipboard'

const install = function(Vue: any) {
  Vue.directive('Clipboard', Clipboard)
}
// @ts-ignore
if (window.Vue) {
  // @ts-ignore
  window.clipboard = Clipboard
  // @ts-ignore
  window.Vue.use(install)
}

// @ts-ignore
Clipboard.install = install

export default Clipboard
