import { createRouter, createWebHistory } from 'vue-router';
import Home from './pages/Home.vue'


const routes=[
    {name:'home',path:'/',component:Home},
]

const router=createRouter({
    history:createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve({ left: 0, top: 0 })
          }, 500)
        })
      },
})

export default router;