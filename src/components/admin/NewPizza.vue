<script setup>
import { ref } from 'vue'
import { addDoc } from 'firebase/firestore';
import { dbPizzasRef } from '../../firebase';

const statusMessage = ref('')
const statusType = ref(null)

const newPizza = ref({
  name: '',
  description: '',
  options: [
    {
      size: null,
      price: null
    },
    {
      size: null,
      price: null
    }
  ]
})
async function add() {
  try {
    await addDoc(dbPizzasRef, newPizza.value)

    statusMessage.value = `The pizza ${newPizza.value.name} was added.`
    statusType.value = 'success'

    newPizza.value = {
      name: '',
      description: '',
      options: [
        { size: null, price: null }, 
        { size: null, price: null }
      ]
    };
  } catch (error) {
    statusMessage.value = `There is an error adding the pizza: ${error}`
    statusType.value = 'error'

  } finally{
    setTimeout(() => {
    statusMessage.value = ''
    statusType.value = null
    }, 3000)
    
  } 

}


</script>


<template>

  <h3>Add a new piza</h3>
  <form>
    <div class="input__field">
      <label for="name">Name</label>
      <input type="text" id="name" name="name" v-model="newPizza.name">
    </div>
    <div class="input__field">
      <label for="description">Description</label>
      <textarea name="description" id="description" v-model="newPizza.description"></textarea>
    </div>
    <p>Option 1</p>
    <div class="input__field">
      <label for="size1">Size</label>
      <input type="text" id="size1" name="size1" v-model="newPizza.options[0].size">
    </div>
    <div class="input__field">
      <label for="price1">Price</label>
      <input type="text" id="price1" name="price1" v-model="newPizza.options[0].price">
    </div>
    <p>Option 2</p>
    <div class="input__field">
      <label for="size2">Size</label>
      <input type="text" id="size2" name="size2" v-model="newPizza.options[1].size">
    </div>
    <div class="input__field">
      <label for="price2">Price</label>
      <input type="text" id="price2" name="price2" v-model="newPizza.options[1].price">
    </div>
    <button @click.prevent="add()">Add</button>
    <span :class="{
      'success': statusType === 'success',
      'error': statusType === 'error'
    }">
      {{ statusMessage }}
    </span>
  </form>
</template>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  gap: 1em;
  width: 90%;
  max-width: 600px;
  margin: 0 auto;
  border: 1px solid rgb(76, 76, 76);
  padding: 1em;
}

.input__field {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: .5em;
  align-items: center;
}

label {
  grid-column: 1/2;
}

input,
textarea {
  grid-column: 2/5;
  width: 100%;
  padding: .5em;
}

button {
  width: fit-content;
  margin: 0 auto;
  background-color: var(--accent);
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: .5em 2em;
}

p {
  font-size: 1.1rem;
  font-weight: 600;
}
.success, .error{
  text-align: center;
}

.success{
  color: green;
}
.error{
  color: red;
}
</style>