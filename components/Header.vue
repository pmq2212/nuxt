<template>
  <header id="header">
    <div class="logo">
      <nuxt-link to="/">Vue - Complete Guide</nuxt-link>
    </div>
    <nav>
      <ul>
        <li v-if="!this.auth.authenticated">
          <nuxt-link :to="{ name: 'auth-register' }">Register</nuxt-link>
        </li>
        <li v-if="!this.auth.authenticated">
          <nuxt-link :to="{ name: 'auth-login' }">Login</nuxt-link>
        </li>
        <li v-if="this.auth.authenticated">
          <a href="javascript:void(0)" @click="hanldeLogout()">Logout</a>
        </li>
        <li v-if="this.auth.authenticated">
          <nuxt-link :to="{ name: 'dashboard' }">Dash Board</nuxt-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import {mapState, mapActions} from 'vuex'

export default {
  computed: {
    ...mapState({
        auth: state => state.auth
    })
  },
  methods: {
    ...mapActions('auth', [
      'logout',
    ]),
    hanldeLogout () {
      this.logout()
        .then(res => {
          this.$router.push('/auth/login')
        })
        .catch(err => {

        })
    }
  },
  created() {
  }
}
</script>

<style scoped>
  #header {
    height: 56px;
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    align-items: center;
    background-color: #521751;
    padding: 0 20px;
  }

  .logo {
    font-weight: bold;
    color: white;
  }

  .logo a {
    text-decoration: none;
    color: white;
  }

  nav {
    height: 100%;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    height: 100%;
    display: flex;
    flex-flow: row;
    align-items: center;
  }

  li {
    margin: 0 16px;
  }

  li a {
    text-decoration: none;
    color: white;
  }

  li a:hover,
  li a:active,
  li a.router-link-active {
    color: #fa923f;
  }
</style>
