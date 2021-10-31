<template>
  <form class="col-md-4 p-1 formDesign" @submit.prevent="afterSubmit">
    <div class="border">
      <h3 class="text-center text-decoration-underline">X Hoteli</h3>
      <div class="row mt-2">
        <div class="col-md-6">
          <label for="input1" class="form-label">T.C. No</label>
          <input
            type="number"
            class="form-control"
            id="input1"
            placeholder="XXXXXXXXXXX"
            v-model="v$.user.tcNumber.$model"
            :class="{ 'is-invalid': v$.user.tcNumber.$error }"
            :ref="'tcInput'+index"
          />
          <small
            class="text-center text-danger"
            v-if="
              v$.user.tcNumber.required.$invalid &&
              v$.user.tcNumber.$error &&
              clicked
            "
            >Boş olamaz ve 11 karakter içerir</small
          >
        </div>

        <div class="col-md-6">
          <label for="input2" class="form-label">Cep Telefon No</label>
          <input
            type="number"
            class="form-control"
            id="input2"
            placeholder="5XXXXXXXXX"
            v-model="v$.user.phoneNumber.$model"
            :class="{ 'is-invalid': v$.user.phoneNumber.$error }"
           :ref="'phoneInput'+index"
          />
          <small
            class="text-center text-danger"
            v-if="
              v$.user.phoneNumber.required.$invalid &&
              v$.user.phoneNumber.$error &&
              clicked "
            
            >Boş olamaz ve 10 karakter içerir</small
          >
        </div>
      </div>
      <hr class="text-primary" />
      <div class="row mt-2">
        <div class="col-md-6">
          <label for="input4" class="form-label">Ad</label>
          <input
            type="text"
            class="form-control"
            id="input4"
            v-model="v$.user.name.$model"
            :class="{ 'is-invalid': v$.user.name.$error }"
            :ref="'nameInput'+index"
          />
          <small
            class="text-center text-danger"
            v-if="
              v$.user.name.required.$invalid && v$.user.name.$error && clicked
            "
            >Boş olamaz ve en az 3 karakter içerir</small
          >
        </div>
        <div class="col-md-6">
          <label for="input5" class="form-label">Soyad</label>
          <input
            type="text"
            class="form-control"
            id="input5"
            v-model="v$.user.surname.$model"
            :class="{ 'is-invalid': v$.user.surname.$error }"
            :ref="'surNameInput'+index"
          />
          <small
            class="text-center text-danger"
            v-if="
              v$.user.surname.required.$invalid &&
              v$.user.surname.$error &&
              clicked
            "
            >Boş olamaz ve en az 3 karakter içerir</small
          >
        </div>
      </div>

      <hr class="text-primary" />

      <div class="row mt-2">
        <div class="col-md-6">
          <label for="input3" class="form-label">Hes Kodu</label>
          <input
            type="text"
            class="form-control"
            id="input3"
            placeholder="X9X9-9999-99"
            v-model="v$.user.hesCode.$model"
            :class="{ 'is-invalid': v$.user.hesCode.$error }"
            :ref="'hesCodeInput'+index"
          />
          <small
            class="text-center text-danger"
            v-if="
              v$.user.hesCode.required.$invalid &&
              v$.user.hesCode.$error &&
              clicked
            "
            >Boş olamaz 1. ve 3. karakter harf olmak zorundadır</small
          >
        </div>

        <div class="col-md-6">
          <label for="input6" class="form-label">Email</label>
          <input
            type="email"
            class="form-control"
            id="input6"
            v-model="v$.user.email.$model"
            :class="{ 'is-invalid': v$.user.email.$error }"
            :ref="'emailInput'+index"
          />
          <small
            class="text-center text-danger"
            v-if="
              v$.user.email.required.$invalid && v$.user.email.$error && clicked
            "
            >Boş olamaz ve Email formatında olmalıdır</small
          >
        </div>
      </div>

      <hr class="text-primary" />

      <div class="row mt-2">
        <div class="col-md-4">
          <label class="form-label">Cinsiyet</label>
          <div>
            <input
              class="form-check-input"
              type="radio"
              id="gridRadios1"
              value="Erkek"
              v-model="user.gender"

            />
            <label class="form-check-label" for="gridRadios1"> Erkek </label>
          </div>
          <div>
            <input
              class="form-check-input"
              type="radio"
              id="gridRadios2"
              value="Kadın"
              v-model="user.gender"
            />
            <label class="form-check-label" for="gridRadios2"> Kadın </label>
          </div>
          <small
            class="text-center text-danger"
            v-if="
              v$.user.gender.required.$invalid &&
              v$.user.gender.$error &&
              clicked
            "
            >Boş olamaz bir tanesini işaretleyin</small
          >
        </div>
        <div class="col-md-4">
          <label for="input7" class="form-label">Yaş</label>
          <input
            type="number"
            class="form-control"
            id="input7"
            v-model="v$.user.age.$model"
            :class="{ 'is-invalid': v$.user.age.$error }"
            :ref="'ageInput'+index"
          />
          <small
            class="text-center text-danger"
            v-if="
              v$.user.age.required.$invalid && v$.user.age.$error && clicked
            "
            >Boş olamaz ve Geçerli bir yaş aralığı giriniz</small
          >
        </div>
        <div class="col-md-4">
          <label for="input8" class="form-label">Gün Sayısı</label>
          <input
            type="number"
            class="form-control"
            id="input8"
            v-model="v$.user.numberOfDays.$model"
            :class="{ 'is-invalid': v$.user.numberOfDays.$error }"
            :ref="'daysInput'+index"
          />
          <small
            class="text-center text-danger"
            v-if="
              v$.user.numberOfDays.required.$invalid &&
              v$.user.numberOfDays.$error &&
              clicked
            "
            >Boş olamaz ve gün sayısı girilmelidir
          </small>
        </div>
      </div>

      <hr class="text-primary" />
      <div class="mt-3 d-grid gap-2 mb-2">
        <button @click="submitForm" type="submit" class="btn btn-primary" :ref="'btn'+index">
          Sign in
        </button>
        <h1>{{index}}</h1>
      </div>
    </div>
  </form>
</template>

<script>
import exampleMixin from "@/mixins/FormValidation";
import useVuelidate from "@vuelidate/core";
import { required, minValue, minLength, email } from "@vuelidate/validators";
import { helpers } from "@vuelidate/validators";

export default {
  mixins: [exampleMixin],
  props: ["index"],

  
  data() {
    return {
      v$: useVuelidate(),
      user: {
        tcNumber: "",
        phoneNumber: "",
        name: "",
        surname: "",
        hesCode: "",
        email: "",
        age: "",
        gender: "",
        numberOfDays: "",
      },
      clicked: false,
    };
  },

  validations() {
    return {
      user: {
        tcNumber: { required, minLength: helpers.regex(/^\d{11}$/) },
        phoneNumber: { required, minLength: helpers.regex(/^5\d{9}$/) },
        name: { required, minLength: minLength(3) },
        surname: { required, minLength: minLength(3) },
        hesCode: { required },
        email: { required, email },
        gender: { required },
        age: { required, minValue: minValue(6) },
        numberOfDays: { required },
      },
    };
  },

  // /^[A-Z0-9]{4}-[A-Z0-9]{4}-[0-9]{2}$/

  methods: {
    submitForm() {
      
      this.v$.$validate();
      if (!this.v$.$error) {
        alert("successfull");
      } else {
        alert("Form failed validation");
      }
      //  this.$refs[`tcInput${this.index+1}`].focus()
       
      
    },
    
    afterSubmit() {
      this.clicked = true;
     
    },
  },

  
};
</script>

<style scoped>
.formDesign {
  background-color: #42b983;
}
</style>
