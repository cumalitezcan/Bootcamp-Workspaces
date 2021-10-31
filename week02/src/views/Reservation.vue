<template>
  <h1>Reservation Page</h1>
  <div class="container">
    <h1 class="text-center">Rezervasyon Oluştur</h1>
    <div
      class="d-flex align-items-stretch flex-wrap"   >
      <Form v-for="index in pCount" :key="index" :index="index" />
    </div>
  </div>
</template>

<script>
// import data from "../database/data.json";
import Form from "@/components/Form";
export default {
  name: "Reservation",
  components: {
    Form,
  },

  data() {
    return {
      hId: Number(this.$route.query.hId),
      pCount: Number(this.$route.query.pCount),
      submitCount:1,
    };
  },

  mounted() {
    console.log(typeof this.pCount);
  },

  methods:{
    submittedform(){
        this.submitCount++ 
   }
  }

  //  props:["reservation"],

  // created(){
  //     console.log(this.reservation)
  // }
};
</script>
