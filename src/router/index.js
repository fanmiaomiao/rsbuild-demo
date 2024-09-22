import { createRouter,createWebHistory } from "vue-router";
import home from '../pages/home/home.vue';
import my from '../pages/my/my.vue'
const router = createRouter({
    history:createWebHistory(),
    routes:[
        {
          path:'/home',
          component:home,
      },
      {
        path:'/my',
        component:my,
    }
    ]
})
export default router;
