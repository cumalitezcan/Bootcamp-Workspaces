import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    search: null,
    companyAndSymbolValues: [],
    dailyValues: [],
    weeklyValues: [],
    monthlyValues: [],
    
  },
  mutations: {
    SET_SEARCH_RESULT(state, payload) {
      state.search = payload;
    },
    SET_COMPANY_SEARCH_RESULT(state, payload) {
      state.companyAndSymbolValues = payload;
    },
    SET_DAILY_RESULTS(state, payload) {
      state.dailyValues = payload;
    },
    SET_WEEKLY_RESULTS(state, payload) {
      state.weeklyValues = payload;
    },
    SET_MONTLY_RESULTS(state, payload) {
      state.monthlyValues = payload;
    },

  },
  actions: {
    searchFromValue({ state, commit }) {
      const options = {
        method: "GET",
        url: "https://alpha-vantage.p.rapidapi.com/query",
        params: {
          keywords: `${state.search}`,
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
          let obj = res.data.bestMatches
          commit("SET_COMPANY_SEARCH_RESULT",obj);
        })
        .catch((err) => {
          console.log(err);
        });
    
  },

  dailyValues({ state, commit },payload){
    
    const options = {
      method: 'GET',
      url: 'https://alpha-vantage.p.rapidapi.com/query',
      params: {
        function: 'TIME_SERIES_DAILY',
        symbol: payload,
        outputsize: 'compact',
        datatype: 'json'
      },
      headers: {
        'x-rapidapi-host': 'alpha-vantage.p.rapidapi.com',
        'x-rapidapi-key': '83b6a8d056msh586464f5c969161p114268jsnd0bb370711c6'
      },
    };
    axios
    .request(options)
    .then((res) => {
      console.log(res.data["Time Series (Daily)"])
    let obj = res.data["Time Series (Daily)"]
    commit("SET_DAILY_RESULTS",obj);
  })
  .catch((err) => {
    console.log(err);
  });
},

  },
  getters:{
    companyNameAndSymbol: (state) => {
      console.log("getters")
      return state.companyAndSymbolValues.map((company)=>{
        console.log(company)
        return {
          symbol: company["1. symbol"],
          name:company["2. name"],
        };
      }
      )
      console.log(state.companyAndSymbolValues)
      // return JSON.parse(state.searchResults)
    }
  },
  modules: {},
});
