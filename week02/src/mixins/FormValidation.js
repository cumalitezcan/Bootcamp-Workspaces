import useVuelidate from "@vuelidate/core";

export const FormValidation = {
    data() {
    return {
      v$: useVuelidate(),
      user: {
        tcNumber: {},
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
      completed: false,
      counter: 0
    };
  },
    
};
