import { createMemoryHistory, createRouter, RouteRecordRaw } from "vue-router";
import HomeView from "./HomeView.vue";
import LoginView from "./LoginView.vue";

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: LoginView,
  },
  {
    path: '/home',
    component: HomeView,
  },
]

export const router = createRouter({
  history: createMemoryHistory(),
  routes
})