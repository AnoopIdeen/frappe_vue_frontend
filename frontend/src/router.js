import { createRouter, createWebHistory } from 'vue-router'
import store from "./store";

const routes = [
  {
    path: '/',
    name: 'Login',
    component: () => import('@/pages/Login.vue'),
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('@/pages/Home.vue'),
  },
]

let router = createRouter({
  history: createWebHistory('/todo'),
  routes,
})

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.isPublicRoute)) {
    if (store.getters.isLoggedIn) {
      next({ name: "Home" });
    } else {
      next();
    }
  } else {
    if (
      store.getters.isLoggedIn ||
      to.matched.some((record) => record.meta.isHybridRoute)
    ) {
      next();
    } else {
      import.meta.env.DEV ? next("/login") : (window.location.href = "/login");
    }
  }
});
export default router
