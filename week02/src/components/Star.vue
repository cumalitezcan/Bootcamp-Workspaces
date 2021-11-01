<template>
     <span
                v-for="index in star"
                :key="index"
                class="fa fa-star checked"
              />

              <span v-if="star < 5">
                <span
                  v-for="index in 5 - star"
                  :key="index"
                  class="fa fa-star unchecked"
                />
              </span>
              
</template>

<script>
export default {

props: ["star"],

}
</script>

<style scoped>
 .checked{
     color: orange;
 }

 .unchecked{
     color:beige
 }
</style>

