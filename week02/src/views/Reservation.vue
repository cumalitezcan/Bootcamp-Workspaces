<template>
  <Header />
  <div class="container">
    <div class="alert alert-info mt-3" role="alert"><h4 class="text-center fw-bolder">Rezervasyon Oluştur</h4></div>
    <div class="d-flex align-items-stretch flex-wrap mt-3">
      <Form v-for="index in pCount" :key="index" :hId="hId" />
    </div>
  </div>
</template>

<script>
import Form from "@/components/Form";
export default {
  name: "Reservation",
  components: {
    Form,
  },

  data() {
    return {
      hId: Number(this.$route.query.hId),
      pCount: Number(this.$route.query.pCount),
      submitCount: 1,
    };
  },

  mounted() {
    console.log(typeof this.pCount);
  },

  methods: {
    submittedform() {
      this.submitCount++;
    },
  },
};
</script>
