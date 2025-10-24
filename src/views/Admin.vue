<script setup>
import NewPizza from '../components/admin/NewPizza.vue';
import Pizzas from '../components/admin/Pizzas.vue';
import Orders from '../components/admin/Orders.vue';
import { useAuth } from '../composables/useAuth'
const { userData } = useAuth()

</script>

<template>
  <section class="admin">
    <h3>admin</h3>
    <div class="admin-content" v-if="userData">
      <NewPizza />
      <Pizzas />
      <Orders />
    </div>
    <p v-else class="message">You must be an Admin to wiew this section.</p>
  </section>
</template>

<style scoped>

.message{
  text-align: center;
  font-size: 1.2rem;
  font-weight: 600;
}

</style>