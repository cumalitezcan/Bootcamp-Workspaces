<template>
  <div class="Search">
    <h1>This is an Search page</h1>
    <h3>Chart with D3</h3>
    </div>
</template>

<script>
// import {  mapMutations } from "vuex";
export default {
  name: "Search",

  created(){
    console.log(this.$route.params)
    console.log(this.$route.params.symbol)
    this.$store.dispatch("dailyValues",this.$route.params.symbol);
  }
};
</script>
