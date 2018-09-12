<template>
  <div id="dashboard">
    <h1>That's the dashboard!</h1>
    <p v-if="!this.auth.authenticated">You should only get here if you're authenticated!</p>
    <p v-if="this.auth.authenticated">Your email address: {{ this.auth.user }}</p>
    <div class="container container-center">
      <router-link class="btn btn-primary demo" :to="{ name: 'dashboard-listitem' }">Go to list item</router-link>
    </div>
  </div>
</template>

<script>
//   import axios from 'axios';
  import { mapState } from 'vuex'

  export default {
    middleware: 'authenticated',  // Setting this component will load to App layout
    computed: {
      ...mapState({
        auth: state => state.auth
      }),
    },
  }
</script>

<style scoped lang="scss">
  h1, p {
    text-align: center;
  }

  p {
    color: red;
  }

  .container-center {
    text-align: center;
    .demo {
      text-align: center;
    }
  }

</style>
