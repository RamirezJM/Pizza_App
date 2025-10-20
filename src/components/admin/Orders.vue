<script setup>
import { useOrders } from '../../composables/useOrders';
import {ref} from 'vue'

const { allOrders, getOrders, message, deleteOrder } = useOrders()
const showOrders = ref(true)

</script>


<template>
  <section class="orders">
    <div class="section-header">
      <h3>Current Orders: {{ allOrders.length }}</h3>
      <button class="toggle-btn" @click="showOrders = !showOrders">{{ showOrders ? 'hide section' : 'show section'
        }}</button>
         <p class="message">{{ message }}</p>
    </div>
       
    <table v-show="showOrders">
      <tbody v-for="order in allOrders" :key="order.id">
        <tr>
          <td class="left order" colspan="2">Order: {{ order.id }}
            <button @click="deleteOrder(order.id)">Delete</button>
          </td>
          <td>{{ order.createdAt.toDate().toLocaleString() }}</td>
        </tr>
        <tr>
          <th class="left">Item</th>
          <th>Size</th>
          <th>Quantity</th>
          <th>Total Price</th>

        </tr>
        <tr v-for="pizza in order.pizzas" :key="pizza.name + pizza.size" class="pizza-data">
          <td class="left">{{ pizza.name }}</td>
          <td>{{ pizza.size }}"</td>
          <td>{{ pizza.quantity }}</td>
          <td>${{ pizza.price * pizza.quantity }}</td>
        </tr>
      </tbody>

    </table>


  </section>
</template>

<style scoped>
.orders {
  overflow-x: auto;
}

table {
  min-width: 550px;
  border-collapse: collapse;
  border-spacing: 0 1rem;
  width: 100%;
  padding: 1em;
}

th,
td {
  text-align: center;
  padding: .5em;
}

tbody {
  border-bottom: solid 1px #727272;
  margin-bottom: 1em;
}

.left {
  text-align: left;
}

.order {
  font-weight: 600;
}

button {
  border: solid 1px var(--accent);
  padding: .3rem;
  border-radius: 5px;
  color: var(--accent);
  margin-inline: .5em;
  background-color: transparent;

}

.message {
  text-align: center;
  font-size: 600;
  margin-block: .5em;
}
</style>


<!-- <table>
      <thead>
        <tr>
          <th>Order Number</th>
          <th>Item</th>
          <th>Size</th>
          <th>Quantity</th>
          <th>Price(total)</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody v-for="order in allOrders" :key="order.id">
        <tr>
          <td>Order ID : {{ order.id }}</td>
          <td><button><img src="../../assets/images/trash.svg" alt="trash icon"></button></td>
        </tr>
        <tr v-for="pizza in order" :key="pizza.id">
          <td>1</td>
          <td>{{ pizza.name }}</td>
          <td>{{ pizza.size }}</td>
          <td></td>
          <td>{{ pizza.price }}</td>
          
        </tr>
      </tbody>
    </table> -->