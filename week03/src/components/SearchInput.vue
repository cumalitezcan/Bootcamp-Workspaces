<template>
  <div class="container">
    <div class="row">
      <input
        type="text"
        v-model="searchValue"
        placeholder="Değer Giriniz"
        class="text-center border"
        @keydown.enter="goSend"
      />
    </div>
    <hr>
    <div v-if="clicked" class="row">
      <div class="col-md-8">
        <select
          v-model="selectedItem"
          class="form-select"
          aria-label="Default select example"
        >
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
        <router-link :to="`/symbol/${selectedItem}/${defaultMoment}`">
          <button class="btn btn-success">Get to chart</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
export default {
  data() {
    return {
      searchValue: "",
      selectedItem: "",
      clicked: false,
      defaultMoment: "daily"
    };
  },

  methods: {
    ...mapMutations(["SET_SEARCH_RESULT"]),
    ...mapActions(["searchFromValue"]),
      goSend() {
      console.log(this.searchValue);
      this.$store.commit("SET_SEARCH_RESULT", this.searchValue);
      this.$store.dispatch("searchFromValue");
      this.clicked = !this.clicked
    },
  },
  computed: {
    ...mapState(["companyAndSymbolValues"]),
    ...mapGetters(["companyNameAndSymbol"]),
  },


 
};
</script>
