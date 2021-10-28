import { createApp } from "vue";
import App from "./App.vue";
import router from './router'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';

import hotelCard from "@/components/HotelCard";
import header from "@/components/Header";
import footer from "@/components/Footer";
import form from "@/components/Form";

const app = createApp(App);

app.use(router);
app.component("HotelCard",hotelCard)
app.component("Header",header)
app.component("Footer",footer)
app.component("Form",form)

app.mount("#app");
