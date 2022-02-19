import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import DiscountCode from "../views/DiscountCode.vue";
import Products from "../views/Products.vue";
import Users from "../views/Users.vue";
import Orders from "../views/Orders.vue";
import Amarha from "../views/Amarha.vue";
import onProcess from "../views/Orders/onProcess.vue";
import sended from "../views/Orders/sended.vue";
import delivered from "../views/Orders/delivered.vue";
import canceled from "../views/Orders/canceled.vue";
import returned from "../views/Orders/returned.vue";
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/amarha",
    name: "Amarha",
    component: Amarha,
  },
  {
    path: "/orders",
    name: "Orders",
    component: Orders,
    children: [
      {
        path:'',
        name: 'onProcess',
        component:onProcess
    },
      {
        path:'sended',
        name: 'sended',
        component:sended
    },
      {
        path:'delivered',
        name: 'delivered',
        component:delivered
    },
      {
        path:'canceled',
        name: 'canceled',
        component:canceled
    },
      {
        path:'returned',
        name: 'returned',
        component:returned
    },
    ]
  },
  {
    path: "/DiscountCode",
    name: "DiscountCode",
    component: DiscountCode,
  },
  {
    path: "/products",
    name: "Products",
    component: Products,
  },
  {
    path: "/users",
    name: "Users",
    component: Users,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
