import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: "/login",
    component: () => import("@/views/Login")

  },
  {
    path: "/register",
    component: () => import("@/views/Register")
  },
  {
    path: '/',
    component: () => import("@/components/Home/Home.vue"),
    redirect: "home",
    children: [
      {
        path: "/home",
        component: () => import("@/views/HomeView"),
        meta: {
          name: '主页',
          isShoe: true
        }
      },
      {
        path: "/console",
        component: () => import("@/views/ConsoleView"),
        meta: {
          name: '打印信息',
          isShoe: true
        }
      },
      {
        path: "/chart",
        component: () => import("@/views/ChartView"),
        meta: {
          name: '图表',
          isShoe: true
        }
      }
    ]
  },

]

const router = new VueRouter({
  mode: "history",
  routes
})

export default router
