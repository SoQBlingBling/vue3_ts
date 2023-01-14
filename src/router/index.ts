import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect:"/login"
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/user/login.vue')
  },
  {
    path: '/home',
    name: 'home',
    beforeEnter(to, from, next) {
      if (from.path === '/login') {
        next()
      } else {
        next('/login')
      }
    },
    redirect:'/home/index',

    component: () => import('@/views/home/home.vue'),
    children:[
      {
        path:'index',
        component:()=>import('@/views/home/components/index.vue'),
      },
      {
        path:'other',
        component:()=>import('@/views/home/components/other.vue'),
      }
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  
  if (to.path ==='/login') {
    next()
  }else{
    if (sessionStorage.getItem('userName') && sessionStorage.getItem('userName')!='undefined') {
      next()
    }else{
      next('/login')
    }
  }


})
export default router
