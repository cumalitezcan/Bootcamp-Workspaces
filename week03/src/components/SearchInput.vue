<template>
  <!-- <v-autocomplete
  chips
  rounded
  solo-inverted
></v-autocomplete> -->
  <v-autocomplete
    v-model="searchValue"
    :items="items"
    solo
    dense
    rounded
    filled
    label="Şirket adı giriniz"
    @keydown.enter="goSend"
  ></v-autocomplete>
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
       items: ['foo', 'bar', 'fizz', 'buzz']
    };
  },
  methods: {
    goSend() {
      console.log(this.searchValue)
       this.$router.push({
        name: "Search",
        params: { symbol: this.searchValue },
      });
    },
  },
}
</script>