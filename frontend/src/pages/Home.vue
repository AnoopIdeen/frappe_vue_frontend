<template>
  <div>
    <v-row>
      <v-col>
        <v-text-field
          variant="outlined"
          label="Name"
          v-model="name"
        ></v-text-field
      ></v-col>

      <v-col
        ><v-text-field
          variant="outlined"
          label="Email"
          v-model="email"
        ></v-text-field>
      </v-col>
      <v-col>
        <v-btn @click="save_data"> save </v-btn>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: '',
      email: '',
    }
  },
  methods: {
    save_data() {},
  },
  resources: {
    get_data() {
      return {
        url: '',
      }
    },
  },
}
</script>
