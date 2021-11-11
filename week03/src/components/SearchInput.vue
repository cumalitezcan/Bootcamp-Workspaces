<template>
  <!-- <v-autocomplete
  chips
  rounded
  solo-inverted
></v-autocomplete> -->
<!-- <v-app>
  <v-autocomplete
    v-model="searchValue"
    solo
    dense
    rounded
    filled
    label="Şirket adı giriniz"
    @keydown.enter="goSend"
  ></v-autocomplete>
</v-app> -->


   <input
          type="text"
          v-model="searchValue"
          placeholder="Değer Giriniz"
          class="text-center border"
          @keydown.enter="goSend"
       
 >
</template>

 <!-- <input
          type="text"
          v-model="searchValue"
          placeholder="Değer Giriniz"
          class="text-center border"
          @keydown.enter="goSend"
        /> -->

<script>
export default {
  data() {
    return {
      searchValue: "",
    };
  },
  

  methods: {
    goSend() {
      console.log(this.searchValue)
       this.$router.push({
        name: "Result",
        params: { symbol: this.searchValue },
        
      });
    },
  },
  computed: {},
};
</script>
