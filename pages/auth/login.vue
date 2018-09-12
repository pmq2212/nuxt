<template>
  <div id="signin">
    <div class="signin-form">
      <div v-if="validate" class="alert alert-warning">
        <strong>{{ message }}</strong>
      </div>
        <div class="input">
          <label for="email">Mail</label>
          <input type="email" id="email" v-model="user.email">
        </div>
        <div class="input">
          <label for="password">Password</label>
          <input type="password" id="password" v-model="user.password">
        </div>
        <div class="action">
          <div class="submit">
          <button class="btn btn-primary" @click="onSubmit">Submit</button>
          </div>
          <div class="submit">
            <router-link class="btn btn-primary" :to="{ name: 'auth-register' }">Register</router-link>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  middleware: 'notAuthenticated',
  layout: 'default', // Setting this component will load to Default layout
  data () {
    return {
      user: {
          email: '',
          password: ''
      },
      validate: false,
      messsage: ''
    }
  },
  computed: {
    ...mapState({
        loading: state => state.loading,
        auth: state => state.auth,
        url: state => state.url
    })
  },
  methods: {
    ...mapActions('auth', [
        'login',
    ]),
    onSubmit () {
      if (this.user.email == '' || this.user.password == '') {
        this.validate = true
        this.message = 'Please enter email and password'

        return
      }

      this.login(this.user)
        .then(res => {
          // redirect after login success

          let urlRedirect = window.localStorage.getItem('redirect_url') != null
            ? window.localStorage.getItem('redirect_url')
            : '/dashboard'
          this.$router.push(urlRedirect)

          window.localStorage.removeItem('redirect_url')
          // redirect(this.url.nextUrl)
        }).catch(err => {
          console.log(err)
        })
    }
  }
}
</script>

<style scoped lang="scss">
  .signin-form {
    width: 400px;
    margin: 30px auto;
    border: 1px solid #eee;
    padding: 20px;
    box-shadow: 0 2px 3px #ccc;
  }

  .input {
    margin: 10px auto;
  }

  .input label {
    display: block;
    color: #4e4e4e;
    margin-bottom: 6px;
  }

  .input input {
    font: inherit;
    width: 100%;
    padding: 6px 12px;
    box-sizing: border-box;
    border: 1px solid #ccc;
  }

  .input input:focus {
    outline: none;
    border: 1px solid #521751;
    background-color: #eee;
  }

  .action {
    display: flex;

    .submit {
      padding: 10px;
    }
  }

</style>
