<template>
    <h1> {{currentHotel.name}}</h1>
  
</template>


<script>
import data from "../database/data.json";
export default {
    
  data() {
    return {
      data: data.hotels,
      currentHotel : {}
    }; 
  },

    created(){
     this.currentHotel = data.hotels.find(i=>i.id==this.$route.params.id)
  },

 
}
</script>