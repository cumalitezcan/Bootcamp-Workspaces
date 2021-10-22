<template>
  <div id="app">
    <Header />
    <div class="container">
      <div class="d-flex align-items-stretch flex-wrap">
        <ProductCard v-for="(product,index) in products" :key="index" :product="product" />
        
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import ProductCard from "./components/ProductCard.vue";
import data from "../src/database/data.json";
export default {
  name: "App",
  components: {
    Header,
    ProductCard,
  },
  data() {
    return {
      products: [...data.products],
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
