import Vue from 'vue'
import Router from 'vue-router'
// import RootView from '../pages/rootView.vue'
import Discovery from '../pages/discovery.vue'
import Video from '../pages/video.vue'
import MyMusic from '../pages/myMusic.vue'
import Friends from '../pages/friends.vue'
import Me from '../pages/me.vue'
import About from '../pages/About.vue'
// import App from '../App'
// import MusicList from '../components/musicList/musicList.vue'

// const MusicList = (resolve) => {
//   import('../components/musicList/musicList.vue').then((module) => {
//     resolve(module)
//   })
// }

Vue.use(Router)

// const routes = [
//   {
    
//   },
  
// ]

// const router = new VueRouter({
//   mode: 'history',
//   base: process.env.BASE_URL,
//   routes
// })

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/discovery'
    },
    {
      path: '/discovery',
      component: Discovery,
      children: [
        {
          path: 'test',
          component: About
        }
      ]
    },
    {
      path: '/video',
      component: Video
    },
    {
      path: '/mymusic',
      component: MyMusic
    },
    {
      path: '/friends',
      component: Friends
    },
    {
      path: '/me',
      component: Me
    }
  ]})
