<!--
 * @Author: Jack
 * @Date: 2020-01-10 15:40:37
 * @LastEditors  : Jack
 * @LastEditTime : 2020-01-19 13:51:25
 * @Description:
 -->
<template>
  <div class="dashboard-editor-container">
    <github-corner class="github-corner" />

    <h1>Welcome to Admin Dashboard</h1>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

import GithubCorner from '@/components/GithubCorner/index.vue'

@Component({
  name: 'DashboardAdmin',
  components: {
    GithubCorner
  }
})
export default class extends Vue {}
</script>

<style lang="scss" scoped>
.dashboard-editor-container {
  padding: 32px;
  background-color: rgb(240, 242, 245);
  position: relative;

  .github-corner {
    position: absolute;
    top: 0px;
    border: 0;
    right: 0;
  }

  .chart-wrapper {
    background: #fff;
    padding: 16px 16px 0;
    margin-bottom: 32px;
  }
}

@media (max-width: 1024px) {
  .chart-wrapper {
    padding: 8px;
  }
}
</style>
