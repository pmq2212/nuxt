<template>
  <div id="signup">
    <div class="signup-form">
      <div v-if="validate" class="alert alert-warning">
          <strong>{{ message }}</strong>
      </div>
      <form @submit.prevent="onSubmit">
        <div class="input">
          <label for="email">Mail</label>
          <input type="email" id="email" v-model="email">
        </div>
        <div class="input">
          <label for="password">Password</label>
          <input type="password" id="password" v-model="password">
        </div>
        <div class="input">
          <label for="confirm-password">Confirm Password</label>
          <input type="password" id="confirm-password" v-model="confirmPassword">
        </div>

        <div class="action">
          <div class="submit">
            <button class="btn btn-primary">Submit</button>
          </div>
          <div class="submit">
            <router-link class="btn btn-primary" :to="{ name: 'auth-login' }">Singin</router-link>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  export default {
    middleware: 'notAuthenticated',
    data () {
      return {
        email: '',
        age: null,
        password: '',
        confirmPassword: '',
        country: 'usa',
        hobbyInputs: [],
        terms: false,
        dataCountry: [
          {
            'id': 1,
            'code': 'USA',
          },
          {
            'id': 2,
            'code': 'JP',
          },
          {
            'id': 3,
            'code': 'VIETNAM',
          },
        ],
        message: '',
        validate: false,
      }
    },
    methods: {
      onAddHobby () {
        const newHobby = {
          id: Math.random() * Math.random() * 1000,
          value: ''
        }
        this.hobbyInputs.push(newHobby)
      },
      onDeleteHobby (id) {
        this.hobbyInputs = this.hobbyInputs.filter(hobby => hobby.id !== id)
      },
      onSubmit () {
        if (this.email == '' || this.password == '') {
          this.message = 'require email and password'
          this.validate = true

          return;
        }

        if (this.password != this.confirmPassword) {
          this.message = 'Confirm password not match'
          this.validate = true

          return;
        }

        this.validate = false

        const formData = {
          email: this.email,
          age: this.age,
          password: this.password,
          confirmPassword: this.confirmPassword,
          country: this.country,
          hobbies: this.hobbyInputs.map(hobby => hobby.value),
          terms: this.terms
        }
        console.log(formData)

        // this.$store.dispatch('signup', formData)
      },
      onSelect (obj) {
        console.log(obj);
        console.log(this.country, this.dataCountry)
      }
    }
  }
</script>
<style scoped lang="scss">
  .signup-form {
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

  .input.inline label {
    display: inline;
  }

  .input input {
    font: inherit;
    width: 100%;
    padding: 6px 12px;
    box-sizing: border-box;
    border: 1px solid #ccc;
  }

  .input.inline input {
    width: auto;
  }

  .input input:focus {
    outline: none;
    border: 1px solid #521751;
    background-color: #eee;
  }

  .input select {
    border: 1px solid #ccc;
    font: inherit;
  }

  .hobbies button {
    border: 1px solid #521751;
    background: #521751;
    color: white;
    padding: 6px;
    font: inherit;
    cursor: pointer;
  }

  .hobbies button:hover,
  .hobbies button:active {
    background-color: #8d4288;
  }

  .hobbies input {
    width: 90%;
  }

  .action {
    display: flex;

    .submit {
      padding: 10px;
    }
  }
</style>
