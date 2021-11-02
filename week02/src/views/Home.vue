<template>
  <Header />
  <div class="container">
    <div class="d-flex align-items-stretch flex-wrap">
      <HotelCard />
    </div>
  </div>
</template>

<script>
import HotelCard from "@/components/HotelCard";
import Header from "@/components/Header";

export default {
  name:'Home',
  components: {
    HotelCard,
    Header,
  },
};
</script>
