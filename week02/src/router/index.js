import {createRouter,createWebHistory} from "vue-router";

  const routes = [

    {   name:"HomePage",
        path:"/",
        component:()=>import("@/views/Home")
    },
    {
        name:"HotelPage",
        path:"/hotel/:id",
        component:()=>import("@/views/Hotel")
    },
    {
        name:"ReservationPage",
        path:"/reservation",
        component:()=>import("@/views/Reservation")
    },
    {
        name:"PaymentPage",
        path:"/payment",
        component:()=>import("@/views/Payment")
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes, // short for `routes: routes`
   
  })

  export default router;