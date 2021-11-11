<template>
  <div>
    <h1>Result</h1>
    <div class="row">
      <div class="col-md-8">
        <select v-model="selectedItem" class="form-select" aria-label="Default select example">
          <option
            v-for="(company, index) in companyNameAndSymbol"
            :key="index"
            :value="company.symbol"
          >
            Company Name: {{ company.name }} ||| Symbol Name :
            {{ company.symbol }}
          </option>
        </select>
      </div>
      <div class="col-md-4">
           <router-link :to="`/symbol/${selectedItem}`">
        <button class="btn btn-success">Get to chart</button>
           </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
export default {
  name: "Result",

  data() {
    return {
      selectedItem: "",
    };
  },

  created() {
    this.$store.commit("SET_SEARCH_RESULT", this.$route.params.symbol);
    this.$store.dispatch("searchFromValue");
  },
  methods: {
    ...mapMutations(["SET_SEARCH_RESULT"]),
    ...mapActions(["searchFromValue"]),
    goChart(){
        
    }
  },
  computed: {
    ...mapState(["companyAndSymbolValues"]),
    ...mapGetters(["companyNameAndSymbol"]),
  },
};
</script>
