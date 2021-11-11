<template>
  <div class="container">
    <div class="row text-end m-2">
      <div class="col-md-2">
        <router-link :to="{ name: 'Home' }">
        <button class="btn btn-success">Home</button>
        </router-link>
        </div>

      <div class="col-md-4">
        <SearchInput />
      </div>
      <div class="col-md-2">Role</div>
      <div class="col-md-3">Logs</div>
    </div>
  </div>
</template>

<script>

import SearchInput from "./SearchInput.vue";
export default {
  name:"Navbar",
  components:{
    SearchInput,
  }

};
</script>
