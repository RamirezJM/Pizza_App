<script setup>
import { ref } from 'vue'
import { useAuth } from '../composables/useAuth';

const { errorMessage, signUp, modalOpen,toggleModal, logIn, logOut} = useAuth()
const formData = ref({
  email: '',
  password: ''
})
</script>

<template>
  
  <div class="modal" v-show="modalOpen">
    <div class="modal-content">
      <span class="close-modal" @click="toggleModal">X</span>

      <p class="modal-text">Please login to continue</p>
      <span class="error">{{ errorMessage }}</span>
      <form>
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" placeholder="Enter email" v-model="formData.email">
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" id="password" placeholder="Enter password" v-model="formData.password">
        </div>
        <div class="button-group">
          <button type="button" @click.prevent="logIn(formData.email, formData.password)">Sign In</button>
          <button type="button" @click.prevent="signUp(formData.email, formData.password)">Sign Up</button>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
.modal {
  position: fixed;
  width: 100vw;
  height: 100vh;
  padding: 1em;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, .8);
}
.signin-btn{
  position: sticky;
  top: 20px;

 

}
.close-modal {
  margin-bottom: 1em;
  color: var(--accent);
  font-size: 1.5rem;
  font-weight: 600;
}
.error{
  color: var(--accent);
  text-align: center;
  margin-block: 1em;
}
.modal-content{
  width: 90%;
  max-width: 600px;
  margin: 0 auto;
  background-color: rgb(72, 72, 72);
  padding: 1em;
  border-radius: 5px;
 }
form{
  display: flex;
  flex-direction: column;
  gap: 1em;
  margin-block: 2em;
  
}
.form-group{
  display: flex;
  flex-direction: column;
  
}

input {
  padding: .5em;
  width: 100%;
  
}

.button-group {
  display: flex;
  gap: 1em;
}
button{
  padding: .5em 1em;
  border-radius: 5px;
}
</style>