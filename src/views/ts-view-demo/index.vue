<!--
 * @Author: Jack
 * @Date: 2020-01-13 14:28:36
 * @LastEditors  : Jack
 * @LastEditTime : 2020-02-07 13:37:25
 * @Description:
 -->
<template>
  <dir>
    <h1>Ts View Demo</h1>
    <test-component msg="Hello World" test-str="123" />
    <div>Str: {{ str }}</div>
    <div>computedStr: {{ computedStr }}</div>
    <el-button type="primary" @click="setNewStr">
      set new str
    </el-button>
  </dir>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator'
import TestComponent from './component.vue'
// 规范的话
// 1. Data还是写在最前面
// 2. Watch放在一起
// 3. get写在一起
// 4. 剩下的就是时间周期函数
// 5. methods
@Component({
  // 写Name的地方
  name: 'TsViewDemo',
  components: {
    TestComponent
  }
})
export default class extends Vue {
  @Prop() msg!: string
  @Prop({ default: 'test' }) testStr!: string
  @Prop() strOrNUm!: string | number

  private str = 'testStr'
  private testObj = { a: 1, b: null }
  private testNum = 3

  get computedStr() {
    return 'computed ' + this.str
  }

  private setNewStr() {
    this.str = 'newTestStr'
  }

  mounted() {
    console.log('mounted')
    this.onStrChange('ccccccc')
  }

  // 第二个参数可以不填写
  @Watch('str', { immediate: true, deep: true })
  private onStrChange(value: string) {
    console.log('watch changed to ' + value)
  }
}
</script>
