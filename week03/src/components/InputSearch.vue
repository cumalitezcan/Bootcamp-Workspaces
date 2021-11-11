<template>
  <v-app>
    <v-card>
      <v-container fluid>
        <v-row align="center">
          <v-col cols="12">
            <v-autocomplete
              v-model="value"
              :items="items"
              dense
              filled
              label="Search"
              @keydown.enter="goSend"
            ></v-autocomplete>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      items: ["foo", "bar", "fizz", "buzz"],
      value: null,
    };
  },
  methods: {
    goSend(e) {
      this.value = e.target.value;
      console.log(this.value);
    },
  },
};
</script>
