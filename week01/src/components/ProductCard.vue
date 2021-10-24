<template>
  <div class="row d-flex justify-content-between align-items-center">
    
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <a class="navbar-brand" href="#">Home</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 me-5 mb-lg-0">
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i class="fas fa-shopping-cart fa-lg"></i>
                <span v-if="cart.length != 0">
                  <span class="badge bg-light text-danger fs-5">{{
                    cart.length
                  }}</span>
                </span>
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li v-for="(c, index) in cart" :key="index">
                  <div class="m-2">
                    <button @click="decrement(c)" class="btn btn-danger btn-sm">
                      -
                    </button>
                    <span class="text fs-6 fw-bold"
                      >1-Piece:{{ c.selectedPrice.price }}$</span
                    >
                    <button @click="increment(c)" class="btn btn-success btn-sm">
                      +
                    </button>
                  </div>
                  <h6 class="fs-6 dropdown-item fw-bold">{{ c.title }}</h6>
                  <div>
                    <h6 class="dropdown-item fs-6 text-center fw-bold">
                      Quantity:{{ c.piece }} - Size:{{ c.selectedPrice.size }}
                    </h6>
                  </div>
                  <hr />
                </li>
                <div v-show="cart.length != 0">
                  <li class="text-center">
                    <button
                      @click="clearProducts()"
                      class="btn btn-outline-warning mb-2"
                    >
                      Clear All
                    </button>
                  </li>
                  
                  <li class="text-center">
                    <button @click="buy()" class="text-center btn btn-outline-primary">Buy</button>
                  </li>
                </div>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      
    </nav>
      
    <div
      v-for="(product, index) in products"
      :key="index"
      class="card m-3"
      :class="bgColor"
      style="width: 450px;"
    >
      <div class="row g-0">
        <div class="col-md-6">
          <div class="card-body">
            <img
              :src="product.imageUrl"
              class="img-fluid rounded-start m-3"
              alt="..."
              style="width:220px;"
            />
            <span v-for="(size, index) in product.sizeOfPrice" :key="index">
              <label
                class="btn btn-secondary btn-sm"
                :class="
                  product.color === 'blue' ? 'blue-button' : 'pink-button'
                "
                :for="size.price + index"
                >{{ size.size }}
              </label>

              <input
                @click="selectNumber(product.id, size.id)"
                type="radio"
                class="btn-check"
                name="size"
                :value="size.price"
                :id="size.price + index"
                v-model="selectedSize"
              />
            </span>
          </div>
        </div>

        <div class="col-md-6">
          <div class="card-body">
            <p
              class="card-text"
              :class="
                product.color === 'blue' ? 'blue-category' : 'pink-category'
              "
            >
              {{ product.category }}
            </p>
            <p
              class="card-text"
              :class="product.color === 'blue' ? 'blue-header' : 'pink-header'"
            >
              {{ product.title }}
            </p>
            <p
              class="card-text"
              :class="product.color === 'blue' ? 'blue-price' : 'pink-price'"
            >
              {{
                product.sizeOfPrice.find((p) => p.id == product.selectedPriceId)
                  .price
              }}
              $
            </p>
            <h6
              class="card-text"
              :class="
                product.color === 'blue'
                  ? 'pink-description'
                  : 'pink-description'
              "
            >
              {{ product.description }}
            </h6>
            <h6 class="mt-3">
              <select class="form-select">
                <option
                  v-for="(option, index) in selectOptions"
                  :key="index"
                  :value="option.value"
                  >{{ option.text }}</option
                >
              </select>
            </h6>

            <div class="mt-3">
              <span
                v-for="star in product.star"
                :key="star.id"
                class="fa fa-star checked"
              />

              <span v-if="product.star < 5">
                <span
                  v-for="star in 5 - product.star"
                  :key="star.id"
                  class="fa fa-star"
                />
              </span>
            </div>
          </div>
        </div>
        <button
          :class="product.color === 'blue' ? 'blue-button' : 'pink-button'"
          class="btn"
          @click="addToCart(product)"
        >
          Add to Cart
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import data from "../database/data.json";
export default {
  props: {
    products: {
      type: Array,
      required: true,
    },
    cart: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      selectOptions: data.selectOptions,
    };
  },
  methods: {
    addToCart(product) {
      this.$emit("addToCart", product);
    },

    getProductById(productId) {
      return this.products.find((product) => product.id == productId);
    },

    selectNumber(productId, sizeId) {
      console.log(productId, sizeId);
      let selectedProduct = this.getProductById(productId);
      selectedProduct.selectedPriceId = sizeId;
    },

    increment(item) {
      let piece = item.piece;
      item.piece = piece + 1;
    },

    decrement(item) {
      let piece = item.piece;
      if (piece == 1) {
        this.cart = this.cart.splice(item, 1);
      } else {
        item.piece = piece - 1;
      }
    },

    clearProducts() {
      this.cart = [];
    },

    buy() {
      alert("Ödeme Sayfasına Geçiliyor...");
    },
  },

  computed: {},
};
</script>

<style>
.pink-border {
  box-shadow: 2px 2px #d3adac;
}
.blue-border {
  box-shadow: 2px 2px #2565ae;
}
.pink-button {
  color: #f6f4f5 !important;
  background-color: #be837f !important;
}
.blue-button {
  color: #d5f3fe !important;
  background-color: #0f5298 !important;
}
.checked {
  color: orange;
}
.pink-button:hover {
  color: #be837f !important;
  background-color: #f6f4f5 !important;
}
.blue-button:hover {
  color: #0f5298 !important;
  background-color: #d5f3fe !important;
}
.pink-price {
  font-size: 30px;
  color: #d3adac;
  font-weight: 900;
  text-align: left;
}
.pink-category {
  font-size: 15px;
  text-align: left;
  color: #d3adac;
  font-weight: 700;
}
.pink-title {
  font-size: 25px;
  text-align: left;
}
.pink-description {
  font-size: 12px;
  text-align: left;
}
.blue-price {
  font-size: 30px;
  font-weight: 900;
  color: #0f5298;
  text-align: left;
}
.blue-category {
  font-size: 15px;
  text-align: left;
  color: #0f5298;
  font-weight: 700;
}

.pink-header {
  font-size: 20px;
  color: #d3adac;
  text-align: left;
}

.blue-header {
  font-size: 20px;
  color: #0f5298;
  text-align: left;
}
</style>
