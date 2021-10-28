<template>
  <div class="mt-2 col-md-6" v-for="(hotel, index) in data" :key="index">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title text-center">{{ hotel.name }}</h5>
        <p class="card-text">
          {{ hotel.description }}
        </p>
        <p class="card-text align-items-center d-flex justify-content-between">
          <small class="text-muted text-start">{{ hotel.location }}</small>
          <small class="text-muted text-center">{{ hotel.price }}</small>
          <small class="text-muted text-end">{{ hotel.star }}</small>
        </p>
        <hr />
        <div>
          <div>
            <h2>Resimler</h2>
          </div>
          <div class="text-end">
            <router-link :to="`/hotel/${hotel.id}`">
              <button class="btn btn-success">Seç</button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import data from "../database/data.json";
export default {
  data() {
    return {
      data: data.hotels,
     
    };
  },

 


};
</script>
