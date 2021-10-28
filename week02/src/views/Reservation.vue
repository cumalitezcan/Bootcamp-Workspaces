<template>
  <h1>Reservation Page</h1>
  <div class="container">
      <h1 class="text-center">Rezervasyon Oluştur</h1>
      <div class="d-flex align-items-stretch flex-wrap">
          <Form />
      </div>
  </div>
</template>


<script>
import Form from "@/components/Form";
export default {
    components: {
        Form
    }
}
</script>
