import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    searchCompany: null,
    searchSymbol: null,
  },
  mutations: {
    SET_COMPANY_SEARCH_RESULT(state, payload) {
      state.searchCompany = payload;
    },
  },
  actions: {
    searchFromCompanyName({ state, commit }, payload) {
      const options = {
        method: "GET",
        url: "https://alpha-vantage.p.rapidapi.com/query",
        params: {
          keywords: `${state.searchCompany}`,
          function: "SYMBOL_SEARCH",
          datatype: "json",
        },
        headers: {
          "x-rapidapi-host": "alpha-vantage.p.rapidapi.com",
          "x-rapidapi-key":
            "83b6a8d056msh586464f5c969161p114268jsnd0bb370711c6",
        },
      };
      axios
        .request(options)
        .then((res) => {
          console.log(res.data);
          commit("SET_COMPANY_SEARCH_RESULT", res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  modules: {},
});
