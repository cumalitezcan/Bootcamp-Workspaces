<template>
  <div id="app">
    <div class="container-fluid">
      <div class="d-flex align-items-stretch flex-wrap">
        <ProductCard :products="products" @addToCart="addToCart" :cart="cart" />
        </div>
      </div>
    </div>
  
</template>

<script>
import ProductCard from "./components/ProductCard.vue";
import data from "../src/database/data.json";
export default {
  name: "App",
  components: {
    ProductCard,
  },
  data() {
    return {
      products: data.products,
      cart: data.cart,
    };
  },
  methods: {
    getByProductById(productId) {
      console.log("getByProductId");
      return this.products.find((product) => product.id == productId);
    },
    addToCart(product) {
      let selectedProduct = this.getByProductById(product.id);
      let selectedPrice = selectedProduct.sizeOfPrice.find(
        (price) => price.id == product.selectedPriceId
      );
      console.log(selectedPrice);
      let findItem = this.cart.find( (x) => x.id == product.id && x.selectedPriceId == product.selectedPriceId);
      if (findItem) {
        console.log(findItem)
        findItem.piece = findItem.piece + product.piece;
      } else {
        let cartItem = { ...selectedProduct, selectedPrice };
        this.cart = [...this.cart, cartItem];
      }
    },

    deleteAll() {
      this.cart = [];
    },
    decrement(item) {
      let piece = item.piece;
      if (piece == 1) {
        this.cart = this.cart.filter((el) => el !== item);
      } else {
        item.piece = piece - 1;
      }
    },
    incerement(item) {
      let piece = item.piece;
      item.piece = piece + 1;
    },
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
