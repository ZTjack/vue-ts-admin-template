import Vue from 'vue'
import Router, { RouteConfig } from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout/index.vue'

/* Router Modules */
import componentsRouter from './modules/components'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    hidden: true                   if set true, item will not show in the sidebar(default is false)
    alwaysShow: true               if set true, will always show the root menu
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    noCache: true                if set true, the page will no be cached(default is false)
    affix: true                  if set true, the tag will affix in the tags-view
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes: RouteConfig[] = [
  {
    path: '/redirect',
    component: Layout,
    meta: { hidden: true },
    children: [
      {
        path: '/redirect/:path*',
        component: () => import('@/views/redirect/index.vue')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    meta: { hidden: true }
  },
  {
    path: '/auth-redirect',
    component: () => import('@/views/login/auth-redirect.vue'),
    meta: { hidden: true }
  },
  {
    path: '/404',
    component: () => import('@/views/error-page/404.vue'),
    meta: { hidden: true }
  },
  {
    path: '/401',
    component: () => import('@/views/error-page/401.vue'),
    meta: { hidden: true }
  },
  {
    path: '/test',
    component: () => import('@/views/ts-view-demo/index.vue'),
    meta: { hidden: true }
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/index.vue'),
        name: 'Dashboard',
        meta: { title: 'Dashboard', icon: 'dashboard', affix: true }
      }
    ]
  },
  {
    path: '/profile',
    component: Layout,
    redirect: '/profile/index',
    meta: { hidden: true },
    children: [
      {
        path: 'index',
        component: () => import('@/views/profile/index.vue'),
        name: 'Profile',
        meta: { title: 'Profile', icon: 'user', noCache: true }
      }
    ]
  }
]

/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roles
 */

export const asyncRoutes: RouteConfig[] =
  process.env.NODE_ENV === 'development'
    ? [
        // TODO: will be deleted
        {
          path: '/permission',
          component: Layout,
          redirect: '/permission/page',
          name: 'Permission',
          meta: {
            alwaysShow: true,
            title: 'Permission',
            icon: 'lock',
            roles: ['admin', 'editor'] // you can set roles in root nav
          },
          children: [
            {
              path: 'page',
              component: () => import('@/views/permission/page.vue'),
              name: 'PagePermission',
              meta: {
                title: 'Page Permission',
                roles: ['admin'] // or you can only set roles in sub nav
              }
            },
            {
              path: 'directive',
              component: () => import('@/views/permission/directive.vue'),
              name: 'DirectivePermission',
              meta: {
                title: 'Directive Permission'
                // if do not set roles, means: this page does not require permission
              }
            },
            {
              path: 'role',
              component: () => import('@/views/permission/role.vue'),
              name: 'RolePermission',
              meta: {
                title: 'Role Permission',
                roles: ['admin']
              }
            }
          ]
        },
        /** when your routing map is too long, you can split it into small modules **/
        componentsRouter,

        // 404 page must be placed at the end !!!
        { path: '*', redirect: '/404', meta: { hidden: true } }
      ]
    : [{ path: '*', redirect: '/404', meta: { hidden: true } }]

const createRouter = () =>
  new Router({
    // mode: 'history', // require service support
    scrollBehavior: () => ({ x: 0, y: 0 }),
    routes: constantRoutes
  })

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  // It's a hack way, so need to add this line to ignore error for ts
  // @ts-ignore
  router.matcher = newRouter.matcher // reset router
}

export default router
