// @ts-ignore
import {
  addResizeListener,
  removeResizeListener
} from 'element-ui/src/utils/resize-event'

/**
 * How to use
 * <el-table height="100px" v-el-height-adaptive-table="{bottomOffset: 30}">...</el-table>
 * el-table height is must be set
 * bottomOffset: 30(default)   // The height of the table from the bottom of the page.
 */

const doResize = (el: any, binding: any, vNode: any) => {
  const { componentInstance: $table } = vNode

  const { value } = binding

  if (!$table.height) {
    throw new Error(`el-$table must set the height. Such as height='100px'`)
  }
  const bottomOffset = (value && value.bottomOffset) || 30

  if (!$table) return

  const height =
    window.innerHeight - el.getBoundingClientRect().top - bottomOffset
  $table.layout.setHeight(height)
  $table.doLayout()
}

export default {
  bind(el: any, binding: any, vNode: any) {
    el.resizeListener = () => {
      doResize(el, binding, vNode)
    }
    // parameter 1 is must be "Element" type
    addResizeListener(window.document.body, el.resizeListener)
  },
  inserted(el: any, binding: any, vNode: any) {
    doResize(el, binding, vNode)
  },
  unbind(el: any) {
    removeResizeListener(window.document.body, el.resizeListener)
  }
}
