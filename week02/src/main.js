import { createApp } from "vue";
import App from "./App.vue";
import router from './router'



import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';


import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

import hotelCard from "@/components/HotelCard";
import header from "@/components/Header";
import form from "@/components/Form";
import star from "@/components/Star";
import hotelPictures from "@/components/HotelPictures";
import date from "@/components/Date";

const app = createApp(App);

app.use(router);


app.component("HotelCard",hotelCard)
app.component("Header",header)
app.component("Form",form)
app.component("Star",star)
app.component("HotelPictures",hotelPictures)
app.component("Date",date)


app.mount("#app");
