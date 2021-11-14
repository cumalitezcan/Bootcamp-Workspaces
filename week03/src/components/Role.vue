<template>
  <!-- <v-app>
    <v-switch
      v-model="switch1"
      inset
      :label="switch1?roles[0]:roles[1]"
    ></v-switch>
  </v-app> -->

  <v-container>
   
      <div>
        <select name="user" id="user" class="user-select" v-model="selected">
          <option value="guest">Guest</option>
          <option value="admin">Admin</option>
        </select>
      </div>
      <button v-if="selected=='admin'" @click="AdminPage" class="btn btn-success"></button>
   
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      selected:'guest',
    };
  },
  methods: {
    AdminPage() {
      if (this.selected == "guest") {
      } else if (this.selected == "admin") {
        this.$router.push({ path: "/admin" });
      }
    },
  },
};
</script>

<style>

</style>
