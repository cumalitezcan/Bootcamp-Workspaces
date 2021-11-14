<template>
    <div>
        <h2>Yetkisiz giriş</h2>
        <button @click="goToHome" class="btn btn-success">Go Home</button>
    </div>
</template>

<script>
export default {
     name: "Error",
    methods: {
    goToHome() {
      this.$router.push({ path: "/" });
    },
  },
};
</script>