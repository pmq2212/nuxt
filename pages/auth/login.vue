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

<script type="application/javascript" src="@@/app/business/LoginBusiness.js"></script>

<style scoped lang="scss">
  @import "@@/assets/login.scss";
</style>
