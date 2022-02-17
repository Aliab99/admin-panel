
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import DiscountCode from '../views/DiscountCode.vue'
import Products from "../views/Products.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },

  {
    path: '/about',
    name: 'About',
    component:About
  },
  {
    path: '/DiscountCode',
    name: 'DiscountCode',
    component:DiscountCode
  },
  {
    path: "/products",
    name: "Products",
    component: Products,
  },
]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
