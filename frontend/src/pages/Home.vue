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
        <button @click="save_data">save</button>
      </v-col>
    </v-row>
  </div>
</template>
<script>
// import { createResource } from 'frappe-ui'

export default {
  data() {
    return {
      name: '',
      email: '',
    }
  },
  methods: {
    async save_data() {
      let res = await this.$resources.get_data
      console.log('RES', res)
      // # Method 1
      // console.log('click')
      // // Put
      // let put = createResource({
      //   url: 'todo.api.put_data',
      //   params: {
      //     name: 'New-one',
      //   },
      //   onError(error) {
      //     console.log('error', error)
      //   },
      //   // on successful response
      //   onSuccess(data) {
      //     console.log('data', data)
      //   },
      // })
      // // Get
      // let get = createResource({
      //   url: 'todo.api.get_data',
      //   onError(error) {
      //     console.log('error', error)
      //   },
      //   // on successful response
      //   onSuccess(data) {
      //     console.log('data', data)
      //   },
      // })
      // await put.reload()
      // // put.promise
      // await get.reload()
      // // get.promise
      // // console.log('post.data', post.data) // data returned from request
      // // console.log('post.loading', post.loading) // true when data is being fetched
      // // console.log('post.error', post.error) // error that occurred from making the request or from validate function
      // // console.log('post.promise', post.promise) // promise object of the request, can be awaited
      // // post.params // params that were sent for making the request, if using makeParams, the return value is set here
      // // post.fetched // true when data has been fetched once, stays true after that
      // // post.previousData // when you call .reload(), previousData is set to current data, and then data is set to new returned data
      // // console.log('post.fetch()', post.fetch()) // make the web request (fetch call)
      // // // alias to fetch
      // // console.log(' post.reload()', post.reload())
    },
  },
  resources: {
    get_data() {
      return {
        type: 'list',
        doctype: 'Demo',
        fields: ['name', 'test'],
        orderBy: 'creation desc',
        start: 0,
        pageLength: 5,
        auto: true,
      }
    },
  },
}
</script>
