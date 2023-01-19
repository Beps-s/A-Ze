import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/HomePage.vue";
import AddHotel from "../views/AddHotel.vue";
import AddRoom from "../views/AddRoom.vue";
import HotelPage from "../views/HotelPage.vue";
import MyBookings from "../views/MyBookings.vue";
import MyHotels from "../views/MyHotels.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home Page",
      component: Home,
      props: true
    },
    {
      path: "/addhotel",
      name: "Add hotel",
      component: AddHotel,
    },
    {
      path: "/addroom",
      name: "Add room",
      component: AddRoom,
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
    {
      path: "/myhotels",
      name: "My Hotels Page",
      component: MyHotels,
    },
  ],
});

export default router;
