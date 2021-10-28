<template>
  <div>
    <h1 class="text-center">{{ currentHotel.id }}</h1>
    <h1 class="text-center">{{ currentHotel.name }}</h1>
    <h1 class="text-center">{{ currentHotel.description }}</h1>

    <select
      class="form-select form-select-sm"
      aria-label=".form-select-sm example"
    >
      <option selected>Kişi Sayısı</option>
      <option v-for="(option,index) in selectOptions" :key="index"  :value="option.value">{{option.text}}</option>
    </select>

    

    <router-link :to="`/reservation`">
      <button class="btn btn-primary">Rezervasyon Yap</button>
    </router-link>
  </div>
</template>

<script>
import data from "../database/data.json";
export default {
  data() {
    return {
      data: data.hotels,
      selectOptions:data.selectOptions,
      currentHotel: {},
      
    };
  },

  created() {
    this.currentHotel = data.hotels.find((i) => i.id == this.$route.params.id);
  },
};
</script>
