<template>
  <div :class="{ show: show }" class="header-search">
    <svg-icon
      class-name="search-icon"
      icon-class="search"
      @click.stop="click"
    />
    <el-select
      ref="headerSearchSelect"
      v-model="search"
      :remote-method="querySearch"
      filterable
      default-first-option
      remote
      placeholder="Search"
      class="header-search-select"
      @change="change"
    >
      <el-option
        v-for="item in options"
        :key="item.path"
        :value="item"
        :label="item.title.join(' > ')"
      />
    </el-select>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'
import { PermissionModule } from '@/store/modules/permission'
import { RouteConfig } from 'vue-router'
import Fuse from 'fuse.js'
import path from 'path'

@Component({
  name: 'HeaderSearch'
})
export default class extends Vue {
  private search = ''
  private options: RouteConfig[] = []
  private searchPool: RouteConfig[] = []
  private show = false
  private fuse: any = undefined

  get routes() {
    return PermissionModule.routes
  }

  @Watch('routes')
  private onRoutesChange() {
    this.searchPool = this.generateRoutes(this.routes)
  }

  @Watch('searchPool')
  private onSearchPoolChange(value: RouteConfig[]) {
    this.initFuse(value)
  }

  @Watch('show')
  private onShowChange(value: boolean) {
    if (value) {
      document.body.addEventListener('click', this.close)
    } else {
      document.body.removeEventListener('click', this.close)
    }
  }

  mounted() {
    this.searchPool = this.generateRoutes(this.routes)
  }

  private click() {
    this.show = !this.show
    if (this.show) {
      this.$refs.headerSearchSelect &&
        (this.$refs.headerSearchSelect as HTMLElement).focus()
    }
  }

  private close() {
    this.$refs.headerSearchSelect &&
      (this.$refs.headerSearchSelect as HTMLElement).blur()
    this.options = []
    this.show = false
  }
  private change(val: RouteConfig) {
    this.$router.push(val.path)
    this.search = ''
    this.options = []
    this.$nextTick(() => {
      this.show = false
    })
  }

  private initFuse(list: RouteConfig[]) {
    this.fuse = new Fuse(list, {
      shouldSort: true,
      threshold: 0.4,
      location: 0,
      distance: 100,
      maxPatternLength: 32,
      minMatchCharLength: 1,
      keys: [
        {
          name: 'title',
          weight: 0.7
        },
        {
          name: 'path',
          weight: 0.3
        }
      ]
    })
  }
  // Filter out the routes that can be displayed in the sidebar
  // And generate the internationalized title
  private generateRoutes(
    routes: RouteConfig[],
    basePath = '/',
    prefixTitle: string[] = []
  ): RouteConfig[] {
    let res: RouteConfig[] = []

    for (const router of routes) {
      // skip hidden router
      if (router.meta && router.meta.hidden) {
        continue
      }

      const data = {
        path: path.resolve(basePath, router.path),
        title: [...prefixTitle]
      }

      if (router.meta && router.meta.title) {
        data.title = [...data.title, router.meta.title]

        if (router.redirect !== 'noRedirect') {
          // only push the routes with title
          // special case: need to exclude parent router without redirect
          res.push(data)
        }
      }

      // recursive child routes
      if (router.children) {
        const tempRoutes = this.generateRoutes(
          router.children,
          data.path,
          data.title
        )
        if (tempRoutes.length >= 1) {
          res = [...res, ...tempRoutes]
        }
      }
    }
    return res
  }

  private querySearch(query: string) {
    if (query !== '') {
      this.options = this.fuse.search(query) as any
    } else {
      this.options = []
    }
  }
}
</script>

<style lang="scss" scoped>
.header-search {
  font-size: 0 !important;

  .search-icon {
    cursor: pointer;
    font-size: 18px;
    vertical-align: middle;
  }

  .header-search-select {
    font-size: 18px;
    transition: width 0.2s;
    width: 0;
    overflow: hidden;
    background: transparent;
    border-radius: 0;
    display: inline-block;
    vertical-align: middle;

    /deep/ .el-input__inner {
      border-radius: 0;
      border: 0;
      padding-left: 0;
      padding-right: 0;
      box-shadow: none !important;
      border-bottom: 1px solid #d9d9d9;
      vertical-align: middle;
    }
  }

  &.show {
    .header-search-select {
      width: 210px;
      margin-left: 10px;
    }
  }
}
</style>
