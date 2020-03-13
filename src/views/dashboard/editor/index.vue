<!--
 * @Author: Jack
 * @Date: 2020-01-10 15:40:37
 * @LastEditors: Jack
 * @LastEditTime: 2020-01-19 12:38:58
 * @Description:
 -->
<template>
  <div class="dashboard-editor-container">
    <github-corner class="github-corner" />
    <h1>Welcome to Editor Dashboard</h1>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

import GithubCorner from '@/components/GithubCorner/index.vue'

@Component({
  name: 'DashboardEditor'
})
export default class extends Vue {}
</script>

<style lang="scss" scoped>
.emptyGif {
  display: block;
  width: 45%;
  margin: 0 auto;
}

.dashboard-editor-container {
  background-color: #e3e3e3;
  min-height: 100vh;
  padding: 50px 60px 0px;
  .pan-info-roles {
    font-size: 12px;
    font-weight: 700;
    color: #333;
    display: block;
  }
  .info-container {
    position: relative;
    margin-left: 190px;
    height: 150px;
    line-height: 200px;
    .display_name {
      font-size: 48px;
      line-height: 48px;
      color: #212121;
      position: absolute;
      top: 25px;
    }
  }
}
</style>
