<template>
  <div class="mt-2 col-md-6" v-for="(hotel, index) in data" :key="index">
    <div class="card">
      <div class="card-header">
        <h5 class="card-title text-center text-decoration-underline fs-5 fw-bolder">{{ hotel.name }}</h5>
        <p class="card-text text-light">
          {{ hotel.description }}
        </p>
      </div>
      <div class="card-body content">
        <div class="row">
          <div class="col-md-4">
            <img :src="hotel.imageUrl" :style="(height = 50)" />
          </div>
          <div class="col-md-8">
            <div class="d-flex flex-column align-items-center">
              
             
            </div>
            <div class="d-flex flex-column align-items-center">
              <strong class="text-light font-monospace text-decoration-underline fs-5">1 Günlük</strong>
              <strong>{{ hotel.price }} ₺</strong>
              <strong>{{ hotel.price  }} $</strong>
              <strong>{{ hotel.price }} €</strong>
            </div>
          </div>
        </div>
        <hr />
        <div>
          <div class="d-flex justify-content-between align-items-center">
            <div>
              <strong><i class="fas fa-map-marker-alt me-1"></i>{{ hotel.location }}</strong>
            </div>
            <div>
              <Carousel :star="hotel.star" />
            </div>
            <div>
               <router-link :to="`/hotel/${hotel.id}`">
              <button class="btn btn-dark">Seç</button>
            </router-link>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import data from "../database/data.json";
import Carousel from "@/components/Carousel"

export default {
  components:{
    Carousel
  },

  data() {
    return {
      data: data.hotels,
    };
  },
};
</script>

<style scoped>
.card {
  height: 100%;
  width: 88%;
  background-color: rgb(68, 233, 255);
}

img {
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 5px;
  width: 200px;
}


</style>
