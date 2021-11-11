<template>
  <div class="Search">
    <h1>This is an Search page</h1>
    <ul>
      <li v-for="(company,index) in companyNameAndSymbol" :key="index">
        {{company.symbol}}
      </li>
    </ul>
   
  </div>
</template>

<script>
import { mapState,mapGetters,mapMutations,mapActions} from "vuex";
export default {
    name: "Search",

    created(){
        this.$store.commit("SET_SEARCH_RESULT",this.$route.params.symbol)
        this.$store.dispatch("searchFromValue")
        
        
    },
 methods: {
  ...mapMutations(['SET_SEARCH_RESULT']),
  ...mapActions(['searchFromValue']),
 },
    computed: {
    ...mapState(["companyAndSymbolValues"]),
    ...mapGetters(["companyNameAndSymbol"]),
  },



}
</script>
