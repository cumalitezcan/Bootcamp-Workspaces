<template>
  <div class="mt-3">
    <Header />
    <b-container>
      <b-card no-body class="overflow-hidden" style="width: 540px;">
        <b-row no-gutters>
          <b-col md="6">
            <b-card-img
              :src="product.imageUrl"
              alt="Image"
              class="rounded-0"
            ></b-card-img>
          </b-col>
          <b-col md="6">
            <b-card-body title="Horizontal Card">
              <b-card-text>
                This is a wider card with supporting text as a natural lead-in
                to additional content. This content is a little bit longer.
              </b-card-text>
            </b-card-body>
          </b-col>
        </b-row>
      </b-card>

  

      <!-- <b-row class="d-flex justify-content-around">
             <b-card class="mb-3" v-for="product in products" :key="product.id"  :class="product.color === 'blue' ? 'blue-border' : 'pink-border'" style=" width:560px"> 
    
          </b-card>
        </b-row> -->
    </b-container>
  </div>
</template>

<script>
export default {
  name: "ProductCard",
  props: {
    product: {
      type: Object,
      required: true,
    },
  },

  //   data() {
  //     return {

  //     };
  //   },
};
</script>
