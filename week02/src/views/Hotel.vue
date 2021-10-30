<template>
  <div>
    <h1 class="text-center">{{ currentHotel.id }}</h1>
    <h1 class="text-center">{{ currentHotel.name }}</h1>
    <h1 class="text-center">{{ currentHotel.description }}</h1>

    <h5>Kişi Sayısı</h5>
    <select
      class="form-select form-select-sm"
      aria-label=".form-select-sm example"
      v-model="countPerson"
    >
      <option
        v-for="(option, index) in selectOptions"
        :key="index"
        :value="option.value"
      >
        {{ option.text }}
      </option>
    </select>
    <h1>{{ countPerson }}</h1>

    <router-link
      :to="{ name: 'ReservationPage', query: { hId :this.$route.params.id , pCount: this.countPerson } }"
    >
      <button class="btn btn-primary">Rezervasyon Yap</button>
    </router-link>
    <!-- <button @click="submit()" class="btn btn-primary">Rezervasyon Yap</button> -->
  </div>
</template>

<script>
import data from "../database/data.json";

export default {
  name: "Hotel",
  data() {
    return {
      data: data.hotels,
      selectOptions: data.selectOptions,
      currentHotel: {},
      countPerson: 1,
    };
  },

  created() {
    this.currentHotel = data.hotels.find((i) => i.id == this.$route.params.id);
  },

  methods: {
    submit() {
      this.$router.push({
        name: "ReservationPage",
      });
    },
  },
};
</script>
