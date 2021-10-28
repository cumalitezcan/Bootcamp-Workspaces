import { createApp } from "vue";
import App from "./App.vue";
import router from './router'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';

import hotelCard from "@/components/HotelCard";

const app = createApp(App);

app.use(router);
app.component("HotelCard",hotelCard)

app.mount("#app");
