<template>
  <div class="row">
    <div v-for="index in currentHotel.imageDetails" :key="index" class="column">
      <img :src="index" alt="Snow" style="width: 100%" />
    </div>
  </div>
</template>

<script>

export default {
  props: ["currentHotel"],
 
};
</script>

<style scoped>
.column {
  float: left;
  width: 33.33%;
  padding: 5px;
}

.row::after {
  content: "";
  clear: both;
  display: table;
}

.row {
  display: flex;
}

.column {
  flex: 33.33%;
  padding: 5px;
}

img {
  border-radius: 8px;
}
</style>
