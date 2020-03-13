<!--
 * @Author: Jack
 * @Date: 2020-01-13 15:48:22
 * @LastEditors  : Jack
 * @LastEditTime : 2020-01-13 17:07:22
 * @Description:
 -->

<template>
  <dir>
    <h1>Ts Component Demo</h1>
    <h2>{{ msg }}</h2>
    <h2>{{ testStr }}</h2>
    <h3>{{ strOrNum }}</h3>
    <h3>{{ testArray }}</h3>
  </dir>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

// 总体来说，现在感觉vue-property-decorator的Model不是很好用，先不用了 https://juejin.im/post/5c173a84f265da610e7ffe44#heading-4
// Emit也是，暂时不用了，他利用的函数名字的解析作为emit的事件名字，代码可读性降低了

@Component({
  name: 'TestComponent'
})
export default class extends Vue {
  // 这里前面的type字段建议还是要写，写了在build的时候TS才会检查
  @Prop(String) private msg!: string
  @Prop({ type: String, default: 'test', required: true }) testStr!: string
  // 或者的关系
  @Prop([String, Number]) strOrNum!: string | number
  @Prop({
    type: Array,
    // 假如是Object或者数组类型，默认值需要通过工厂函数返回
    default: () => {
      return ['a', 'b']
    }
  })
  testArray!: string[]
}
</script>
