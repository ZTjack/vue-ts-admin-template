<!--
 * @Author: Jack
 * @Date: 2020-01-10 15:40:37
 * @LastEditors  : Jack
 * @LastEditTime : 2020-01-19 12:42:00
 * @Description:
 -->
<template>
  <div class="dashboard-container">
    <component :is="currentRole" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { UserModule } from '@/store/modules/user'
import adminDashboard from './admin/index.vue'
import editorDashboard from './editor/index.vue'

@Component({
  name: 'Dashboard',
  components: {
    adminDashboard,
    editorDashboard
  }
})
export default class extends Vue {
  private currentRole = 'adminDashboard'
  get roles() {
    return UserModule.roles
  }
  created() {
    if (!this.roles.includes('admin')) {
      this.currentRole = 'editorDashboard'
    }
  }
}
</script>
