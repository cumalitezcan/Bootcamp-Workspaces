<template>
  <h2>Create Account</h2>

  <p>
    <input type="text" placeholder="email" v-model="email" />
  </p>
  <p>
    <input type="password" placeholder="password" v-model="password.password" />
  </p>
  <p>
    <input
      type="password"
      placeholder="confirm Password"
      v-model="password.confirm"
    />
  </p>
  <button @click="submitForm">Submit</button>
</template>

<script>

// import {FormValidation} from '@/mixins/FormValidation'

export default {

    // mixins: [FormValidation],

   
     

      
   
};
</script>
