<template>
  <div>
    <Header />

    <div class="container">
      <h1 class="text-center text-danger mt-3">{{ currentHotel.name }}</h1>
      <h1 class="text-center text-info">{{ currentHotel.description }}</h1>

      <HotelPictures :currentHotel="currentHotel" />
      <hr>
      <div class="row mt-3 f-flex align-items-center justify-content-between">
        <div class="col-md-4 d-flex flex-row align-items-center fw-bolder">
          <div class="col-3 ">
            <span class="text-primary">Kişi Sayısı:</span>
          </div>
          <div class="col-4">
          <select
            class="form-select form-select-sm fw-bolder text-center"
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
          </div>
        </div>
        <div class="col-md-3 fw-bolder">
         <span class="text-primary">Toplam ücret: </span>{{currentTotal(countPerson)}}
        </div>
        <div class="col-md-3 fw-bolder">
         <span class="text-primary">Tarih: </span> <Date />
        </div>
        <div class="col-md-2 text-end">
          <router-link
        :to="{
          name: 'ReservationPage',
          query: { hId: this.$route.params.id, pCount: this.countPerson },
        }"
      >
        <button class="btn btn-outline-primary fw-bolder">Rezervasyon Yap</button>
      </router-link>
        </div>
      </div>

      
    </div>
    <!-- <button @click="submit()" class="btn btn-primary">Rezervasyon Yap</button> -->
  </div>
</template>

<script>
import data from "../database/data.json";
import Header from "@/components/Header";
import HotelPictures from "@/components/HotelPictures";

export default {
  name: "Hotel",
  components: {
    Header,
    HotelPictures,
  },
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

  computed: {
     currentTotal(){
      return (value)=>{
        return (value * this.currentHotel.price )
      }
    },
  },
};
</script>
