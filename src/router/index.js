import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    redirect:'/works'
  },
  {
    path:'/index',
    component:()=>import('../views/Index.vue'),
    children:[
      {
        path:'/works',
        component:()=>import('../views/Works.vue')
      },
      {
        path:'/strict',
        component:()=>import('../views/Strict.vue')
      },
      {
        path:'/learn',
        component:()=>import('../views/Learn.vue')
      },
      {
        path:'/favorites',
        component:()=>import('../views/Favorites.vue')
      },
      {
        path:'/mine',
        component:()=>import('../views/Mine.vue')
      }
    ]
  },
  {
    path:'/list',
    component:()=>import('../components/List.vue')
  },
    {
    path:'/tinshutiaojie',
    component:()=>import('../components/tinshu/TinshuTiaojie.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
