<script setup>
import { usePizzas } from '../../composables/usePizzas';
import { ref } from 'vue';

const { allPizzas, deletePizza, message } = usePizzas()
const showMenu = ref(true)

</script>


<template>
  <div class="section-header">
      <h3>Menu</h3>
      <button class="toggle-btn" @click="showMenu = !showMenu">{{ showMenu ? 'hide section' : 'show section'
        }}</button>
        <p class="error">{{ message }}</p>
    </div>
  
  <table v-show="showMenu">
    <thead>
      <tr>
        <th>Pizza</th>
        <th>remove</th>
      </tr>
    </thead>
    <tbody v-for="pizza in allPizzas" :key="pizza.id">
      <tr>
        <td>{{ pizza.name }}</td>
        <td><button @click="deletePizza(pizza.id)" class="delete-button">
            <img src="../../assets/images/trash.svg" alt="trash icon">
          </button></td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
th,
td {
  padding: .5em;
  text-align: center;
  border-bottom: solid 1px rgb(72, 72, 72);
}

th {
  font-size: 1.1rem;
  font-weight: 600;
}

.delete-button {
  border: none;
}

.error{
  color: red;
  text-align: center;
}

</style>