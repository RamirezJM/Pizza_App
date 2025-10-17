<script setup>
import { usePizzas } from '../../composables/usePizzas';

const { allPizzas, deletePizza, message } = usePizzas()

</script>


<template>
  <h3>Menu</h3>
  <p class="error">{{ message }}</p>
  <table>
    <thead>
      <tr>
        <th>Pizza</th>
        <th>remove</th>
      </tr>
    </thead>
    <tbody v-for="pizza in allPizzas" :key="pizza.id">
      <tr>
        <td>{{ pizza.name }}</td>
        <td><button @click="deletePizza(pizza.id)">
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

button {
  border: none;
}

.error{
  color: red;
  text-align: center;
}

</style>