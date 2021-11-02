<template>
  <Header />
  <div class="container">
    <div v-if="completed" class="alert alert-info mt-3" role="alert">
      <PayModel :user="user" />
    </div>
    <div v-else class="alert alert-info mt-3" role="alert">
      <h4 class="text-center fw-bolder">Rezervasyon Oluştur</h4>
    </div>
    <h5>{{counter}}</h5>
    

    <div class="d-flex align-items-stretch flex-wrap mt-3">
      <Form
        v-for="index in pCount"
        :key="index"
        :ref="'form' + index"
        :index="index"
        :hId="hId"
        @completeForm="completeForm"
        @buyUser="buyUser"
        
      />
    </div>
  </div>
</template>

<script>
import Form from "@/components/Form";
import PayModel from "@/components/PayModel";
export default {
  name: "Reservation",
  components: {
    Form,
    PayModel
  },
  
    emits:['completed','buyUser'],

  data() {
    return {
      hId: Number(this.$route.query.hId),
      pCount: Number(this.$route.query.pCount),
      user: {
        name: null,
        surname: null,
        phone: null,
        email: null,
        count: null,
      },
      completed : false,
      
      
    };
  },
  methods: {
    buyUser(value) {
      (this.user.name = value.name),
        (this.user.surname = value.surname),
        (this.user.phone = value.phone),
        (this.user.email = value.email),
        (this.user.count = value.count);
    },
    completeForm(value){
      this.completed = value;
    },
    
  },
};
</script>
