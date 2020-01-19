<!--
 * @Author: Jack
 * @Date: 2020-01-10 15:40:37
 * @LastEditors: Jack
 * @LastEditTime: 2020-01-19 11:31:34
 * @Description:
 -->
<template>
  <div>
    <div style="margin-bottom:15px;">
      Your roles: {{ roles }}
    </div>
    Switch roles:
    <el-radio-group v-model="switchRoles">
      <el-radio-button label="editor" />
      <el-radio-button label="admin" />
    </el-radio-group>
  </div>
</template>

<script>
import { UserModule } from '@/store/modules/user'
export default {
  computed: {
    roles() {
      return this.$store.getters.roles
    },
    switchRoles: {
      get() {
        return this.roles[0]
      },
      set(val) {
        UserModule.changeRoles(val).then(() => {
          this.$emit('change')
        })
      }
    }
  }
}
</script>
