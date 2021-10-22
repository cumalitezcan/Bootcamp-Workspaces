<template>
  <div class="row d-flex justify-content-between align-items-center">
    <div class="col offset-3">
      <div class="card m-3" :class="bgColor" style="width: 450px;">
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
                  :class="buttonColor"
                  :for="index"
                  >{{ size.size }}
                </label>

                <input
                  type="radio"
                  class="btn-check"
                  name="size"
                  :value="size.price"
                  :id="index"
                  v-model="selectedSize"
                />
              </span>
            </div>
          </div>

          <div class="col-md-6">
            <div class="card-body">
              <h5 class="card-title" :class="titleColor">Card title</h5>
              <p class="card-text" :class="categoryColor">
                {{ product.category }}
              </p>
              <p class="card-text">
                {{ product.title }}
              </p>
              <p class="card-text" :class="priceColor">{{ selectedSize ? selectedSize : "150" }} $</p>
              <h6 class="card-text">
                {{ product.description }}
              </h6>

              <h6>
                <select class="form-select" aria-label="Default select example">
                  <option
                    v-for="(option, index) in selectOptions"
                    :key="index"
                    :value="option.value"
                    >{{ option.text }}</option
                  >
                </select>
              </h6>
              <div>
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
              <button :class="buttonColor" class="btn" @click="addToCart">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import data from "../database/data.json";
export default {
  props: {
    product: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      selectOptions: [...data.selectOptions],
      selectedSize: null,
    };
  },
  methods: {
    addToCart() {
      alert("eklendi")
    },
  },
  computed: {
    bgColor() {
      return this.product.color === "blue" ? "blue-border" : "pink-border";
    },

    buttonColor() {
      return this.product.color === "blue" ? "blue-button" : "pink-button";
    },
    priceColor() {
      return this.product.color === "blue" ? "blue-price" : "pink-price";
    },
    titleColor() {
      return this.product.color === "blue" ? "blue-title" : "pink-title";
    },
    categoryColor() {
      return this.product.color === "blue" ? "blue-category" : "pink-category";
    },


  },
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

.pink-price{
  font-size:30px;
  color: #d3adac;
  font-weight: 900;
  text-align: left;
}
.pink-category{
  font-size:15px;
  text-align: left;
  color: #d3adac;
  font-weight: 700
}
.pink-title{
  font-size: 25px;
  text-align: left;
}
.pink-description{
  font-size:12px;
  text-align:left;
}

.blue-price{
  font-size:30px;
  font-weight: 900;
  color: #0F5298;
  text-align: left;
}
.blue-category{
  font-size:15px;
  text-align: left;
  color: #0F5298;
  font-weight: 700
}

</style>
