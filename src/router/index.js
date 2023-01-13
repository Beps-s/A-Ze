import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/HomePage.vue";
import AddHotel from "../views/AddHotel.vue";
import HotelPage from "../views/HotelPage.vue";
import MyBookings from "../views/MyBookingsPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home Page",
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
    {
      path: "/mybookings",
      name: "My Bookings Page",
      component: MyBookings,
    },
  ],
});

export default router;
