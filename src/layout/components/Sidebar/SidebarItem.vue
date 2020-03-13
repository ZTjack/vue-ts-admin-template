<!--
 * @Author: Jack
 * @Date: 2020-01-10 15:40:37
 * @LastEditors  : Jack
 * @LastEditTime : 2020-02-03 18:26:44
 * @Description:
 -->

<template>
  <div v-if="!(item.meta && item.meta.hidden)">
    <template
      v-if="
        hasOneShowingChild(item, item.children) &&
          (!onlyOneChild.children || onlyOneChild.noShowingChildren) &&
          !(item.meta && item.meta.alwaysShow)
      "
    >
      <app-link v-if="onlyOneChild.meta" :to="resolvePath(onlyOneChild.path)">
        <el-menu-item
          :index="resolvePath(onlyOneChild.path)"
          :class="{ 'submenu-title-noDropdown': !isNest }"
        >
          <item
            :icon="onlyOneChild.meta.icon || (item.meta && item.meta.icon)"
            :title="onlyOneChild.meta.title"
          />
        </el-menu-item>
      </app-link>
    </template>

    <el-submenu
      v-else
      ref="subMenu"
      :index="resolvePath(item.path)"
      popper-append-to-body
    >
      <template slot="title">
        <item
          v-if="item.meta"
          :icon="item.meta && item.meta.icon"
          :title="item.meta.title"
        />
      </template>
      <sidebar-item
        v-for="child in item.children"
        :key="child.path"
        :is-nest="true"
        :item="child"
        :base-path="resolvePath(child.path)"
        class="nest-menu"
      />
    </el-submenu>
  </div>
</template>

<script lang="ts">
import path from 'path'
import { isExternal } from '@/utils/validate'
import Item from './Item.vue'
import AppLink from './Link.vue'
import { Component, Prop, Vue } from 'vue-property-decorator'
import { Route, RouteConfig } from 'vue-router'
import { AppModule, DeviceType } from '@/store/modules/app'

@Component({
  name: 'SidebarItem',
  components: {
    Item,
    AppLink
  }
})
export default class extends Vue {
  @Prop({ required: true }) private item!: RouteConfig
  @Prop({ type: Boolean, default: false }) private isNest!: boolean
  @Prop({ type: String, default: '' }) private basePath!: string

  private onlyOneChild: any

  get device() {
    return AppModule.device
  }

  private hasOneShowingChild(parent: any, children = []) {
    const showingChildren = children.filter((item: any) => {
      if (item.meta && item.meta.hidden) {
        return false
      } else {
        // Temp set(will be used if only has one showing child)
        this.onlyOneChild = item
        return true
      }
    })

    // When there is only one child router, the child router is displayed by default
    if (showingChildren.length === 1) {
      return true
    }

    // Show parent if there are no child router to display
    if (showingChildren.length === 0) {
      this.onlyOneChild = { ...parent, path: '', noShowingChildren: true }
      return true
    }
    return false
  }

  private resolvePath(routePath: string) {
    if (isExternal(routePath)) {
      return routePath
    }
    if (isExternal(this.basePath)) {
      return this.basePath
    }
    return path.resolve(this.basePath, routePath)
  }

  private fixBugIniOS() {
    const $subMenu = this.$refs.subMenu
    if ($subMenu) {
      // @ts-ignore
      const handleMouseleave = $subMenu.handleMouseleave
      // @ts-ignore
      $subMenu.handleMouseleave = (e: Event) => {
        if (this.device === DeviceType.Mobile) {
          return
        }
        handleMouseleave(e)
      }
    }
  }

  mounted() {
    this.fixBugIniOS()
  }
}
</script>
