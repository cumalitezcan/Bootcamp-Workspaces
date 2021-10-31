<template>
  <h2>Create Account</h2>
  <HotelCard />
</template>

<script>
import HotelCard from "@/components/Carousel";
export default {
  components: {
    HotelCard
  }
}
</script>

<style scoped>
body {
	font-family: "Baloo 2", cursive;
	font-size: 16px;
	color: #ffffff;
	text-rendering: optimizeLegibility;
	font-weight: initial;
}

.dark {
	background: #110f16;
}

.light {
	background: #f3f5f7;
}

a,
a:hover {
	text-decoration: none;
	transition: color 0.3s ease-in-out;
}

#pageHeaderTitle {
	margin: 2rem 0;
	text-transform: uppercase;
	text-align: center;
	font-size: 2.5rem;
}

.postcard {
	flex-wrap: wrap;
	display: flex;

	box-shadow: 0 4px 21px -12px rgba(0, 0, 0, 0.66);
	border-radius: 10px;
	margin: 0 0 2rem 0;
	overflow: hidden;
	position: relative;
	color: #ffffff;

}
	


</style>