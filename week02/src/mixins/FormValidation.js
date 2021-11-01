// import { required, minValue, minLength, email } from "@vuelidate/validators";
// import { helpers } from "@vuelidate/validators";


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
    };
  },
    

//   validations() {
//     return {
//       user: {
//         tcNumber: { required, minLength: helpers.regex(/^\d{11}$/) },
//         phoneNumber: { required, minLength: helpers.regex(/^5\d{9}$/) },
//         name: { required, minLength: minLength(3) },
//         surname: { required, minLength: minLength(3) },
//         hesCode: {
//           required,
//           minLength: helpers.regex(/^[A-Z0-9]{4}-[A-Z0-9]{4}-[0-9]{2}$/),
//         },
//         email: { required, email },
//         gender: { required },
//         age: { required, minValue: minValue(6) },
//         numberOfDays: { required },
//       },
//     };
//   },
};
