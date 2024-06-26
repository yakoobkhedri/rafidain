import { createRouter, createWebHistory } from 'vue-router';
import Home from './pages/Home.vue'
import About from './pages/About.vue'
import Contact from './pages/Contact.vue'


const routes=[
    {name:'home',path:'/',component:Home},
    {name:'about',path:'/about',component:About},
    {name:'contact',path:'/contact',component:Contact},
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