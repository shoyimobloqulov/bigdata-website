import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RegisterView from "../views/RegisterView.vue"
import LoginView from "@/views/LoginView.vue";
import RemendingView from "@/views/RemendingView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Bosh sahifa',
      component: HomeView
    },
    {
      path: '/registration',
      name: "Ro'yhatga olish",
      component: RegisterView
    },
    {
      path: '/lichnyy-kabinet',
      name: "Tizimga kirish",
      component: LoginView
    },
    {
      path: '/reminding',
      name: "Yangilash",
      component: RemendingView
    }
  ]
})

export default router
