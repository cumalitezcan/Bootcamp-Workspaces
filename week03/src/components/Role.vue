<template>
    <div class="d-flex align-items-center">
      <div class="me-2">
        <select class="user-select text-light" v-model="selected">
          <option class="text-dark font-monospace" value="guest">Guest</option>
          <option class="text-dark font-monospace" value="admin">Admin</option>
        </select>
      </div>
      <div>
        <button @click="AdminPage"><v-icon class="me-5">mdi-account-tie</v-icon></button>
      </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      selected: "guest",
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

<style></style>
