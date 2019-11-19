import Vue from 'vue'
import VueRouter from 'vue-router'
import RootView from '../pages/rootView.vue'
import Discovery from '../pages/discovery.vue'
import Video from '../pages/video.vue'
import MyMusic from '../pages/myMusic.vue'
import Friends from '../pages/friends.vue'
import Me from '../pages/me.vue'
import MusicList from '../components/musicList/musicList.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: RootView,
    children: [
      {
        path: '',
        redirect: 'discovery'
      },
      {
        path: 'discovery',
        component: Discovery,
        children: [
          {
            path: ':id',
            component: MusicList
          }
        ]
      },
      {
        path: 'video',
        component: Video
      },
      {
        path: 'mymusic',
        component: MyMusic
      },
      {
        path: 'friends',
        component: Friends
      },
      {
        path: 'me',
        component: Me
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
