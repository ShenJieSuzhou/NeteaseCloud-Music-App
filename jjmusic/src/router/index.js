import Vue from 'vue'
import VueRouter from 'vue-router'
import RootView from '../pages/rootView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'baseview',
    component: RootView,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

// 底部菜单栏目
// export const menuRoutes = [
//   {
//     path: '/discovery',
//     name: 'discovery',
//     meta: {
//       title: '发现',
//       icon: 'music',
//     }
//   },
//   {
//     path: '/video',
//     name: 'video',
//     meta: {
//       title: '视频',
//       icon: 'video',
//     }
//   },
//   {
//     path: '/myMusic',
//     name: 'myMusic',
//     meta: {
//       title: '我的',
//       icon: 'my',
//     }
//   },
//   {
//     path: '/friends',
//     name: 'friends',
//     meta: {
//       title: '朋友',
//       icon: 'friends',
//     }
//   },
//   {
//     path: '/account',
//     name: 'account',
//     meta: {
//       title: '帐号',
//       icon: 'account'
//     }
//   }
// ]



const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
