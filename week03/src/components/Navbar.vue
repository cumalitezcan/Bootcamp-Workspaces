<template>
  <div class="container">
    <div class="row text-end m-2">
      <div class="col-md-2">Home</div>
      <div class="col-md-4">
        <!-- <SearchInput /> -->
        <input
          type="text"
          v-model="searchValue"
          placeholder="Değer Giriniz"
          class="text-center border"
          @keydown.enter="goSend"
        />
      </div>
      <div class="col-md-2">Role</div>
      <div class="col-md-3">Logs</div>
    </div>
  </div>
</template>

<script>

import Role from "./Role.vue";
// import SearchInput from "./SearchInput.vue";
export default {
  data() {
    return {
      searchValue: "",
    };
  },
  components: {
    Role,
    // SearchInput
    
  },

  methods: {
    goSend() {
       this.$router.push({
        name: "Search",
        params: { symbol: this.searchValue },
      });
    },
  },
  computed: {},
};
</script>
