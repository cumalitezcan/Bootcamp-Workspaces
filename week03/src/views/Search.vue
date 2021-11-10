<template>
  <div class="Search">
    <h1>This is an Search page</h1>
  </div>
</template>

<script>
export default {
    name: "Search",
    created(){
        this.$store.commit("SET_COMPANY_SEARCH_RESULT",this.$route.params.symbol)
        this.$store.dispatch("searchFromCompanyName")
    },

}
</script>
