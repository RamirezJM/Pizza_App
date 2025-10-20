<script setup>
import {ref} from 'vue'
import { useAuth } from '../composables/useAuth';

const {errorMessage, signUp} = useAuth()
const userData = ref({
  email: '',
  password: ''
})
</script>

<template>
  <div class="modal">
    <div class="modal-content">
      <span class="close-modal">X</span>
    
      <p class="modal-text">Please login to continue</p>
      <span>{{ errorMessage }}</span>
      <form>
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" placeholder="Enter email" v-model="userData.email">
        </div>
         <div class="form-group">
          <label for="password">Password</label>
          <input type="password" id="password" placeholder="Enter password" v-model="userData.password">
        </div>
        <button type="button">Sign In</button>
        <button type="button" @click.prevent="signUp(userData.email, userData.password)">Sign Up</button>
      </form>
    </div>
  </div>
</template>