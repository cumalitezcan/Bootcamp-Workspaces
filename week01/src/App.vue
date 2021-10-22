<template>
  <div id="app">
    <the-header />
    <b-container>
      <!-- d-flex align-items-stretch flex-wrap -->
    <b-row>
      <b-col class="d-flex align-items-stretch flex-wrap">
         <product-card
      v-for="product in products"
      :key="product.id"
      :product="product"
    />
      </b-col>
    </b-row>
   
    </b-container>
  </div>
  
</template>

<script>
import TheHeader from "./components/Header.vue";
import ProductCard from "./components/ProductCard.vue";
import data from "./database/data.json";
export default {
  name: "App",
  components: {
    TheHeader,
    ProductCard,
  },

  data() {
    return {
      products: [...data.products],
    };
  },
};
</script>

<style></style>
