<template>
  <div class="Search">
    <h1>This is an Search page</h1>
    <h3>Chart with D3</h3>
    </div>
</template>

<script>
export default {
  name: "Search",

  created(){
    this.$store.dispatch("monthlyValues",this.$route.params.symbol);
  }
};
</script>
