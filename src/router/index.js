import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/HomePage.vue";
import AddHotel from "../views/AddHotel.vue";
import HotelPage from "../views/HotelPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "HomePage",
      component: Home,
    },
    {
      path: "/addhotel",
      name: "Add hotel",
      component: AddHotel,
    },
    {
      path: "/hotel/:id",
      name: "Hotel page",
      component: HotelPage,
    },
  ],
});

export default router;
