<template>
  <Header />
  <div class="container">
    <div class="d-flex align-items-stretch flex-wrap">
      <HotelCard />
    </div>
  </div>

  <Footer />
</template>

<script>
import HotelCard from "@/components/HotelCard";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
export default {
  components: {
    HotelCard,
    Header,
    Footer,
  },
};
</script>
