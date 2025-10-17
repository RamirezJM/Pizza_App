<script setup>
/* import { ref} from 'vue' */
import { useCart } from '../composables/useCart';
import {usePizzas} from '../composables/usePizzas';
const {cart, addToCart, updateQuantity, cartTotal} = useCart()

const {allPizzas} = usePizzas()

</script>

<template>
  <section class="menu">
    <div class="menu__list">
      <h3>Our Pizzas</h3>
      <div class="menu__container">
          <div class="menu__card" v-for="pizza in allPizzas" :key="pizza.id">
            <h4 class="menu__card__title">{{ pizza.name }}</h4>
            <p class="menu__card__info">{{ pizza.description }}</p>
            <div class="menu__card__price">
              <div class="small">
                <p>{{ pizza.options[0].size }}</p>
                <p>{{ pizza.options[0].price }}</p>
                <button class="menu__button" @click="addToCart(pizza, pizza.options[0])" >Add</button>
              </div>
              <div class="large">
                <p>{{ pizza.options[1].size }}</p>
                <p>{{ pizza.options[1].price }}</p>
              <button class="menu__button" @click="addToCart(pizza, pizza.options[1])" >Add</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="cart">
      <h3>Cart</h3>
      <div class="orders">
        <div class="orders__item" v-for="pizza in cart" :key="pizza.idPizza">
          <div class="orders__item__buttons">
            <button class="quantity__button menu__button" @click="updateQuantity(pizza, 'decrement')" >-</button>
            <span class="orders__item__quantity">{{ pizza.quantity }}</span>
            <button class="quantity__button menu__button" @click="updateQuantity(pizza, 'increment')">+</button>
          </div>
          <p class="orders__item__name">{{ pizza.name }}</p>
          <p class="orders__item__name">{{ pizza.size }}"</p>
          <p class="orders__item__price">{{ Number(pizza.price * pizza.quantity).toFixed(2)}}</p>
        </div>
      </div>
      <div class="orders__total">
        <p class="orders__total__price">Orders total: ${{ Number(cartTotal.toFixed(2)) }}</p>
        <button class="menu__button">Place Order</button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.menu {
  width: 90%;
  margin: 0 auto;
  padding: 1em;
  display: grid;
  grid-template-columns: 1fr;
  gap: 1em;
}

h4 {
  font-size: 1.2rem;
}

.small,
.large,
.orders__item {
  display: flex;
  justify-content: space-between;
  margin-block: .5em;
}


.menu__card {
  border-bottom: solid 1px #727272;
  padding: .5em;
}

.menu__button {
  background-color: var(--accent);
  color: #fff;
  padding: .5em 1em;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  font-weight: 600;
}

.cart {
  border: 1px solid #727272;
  background-color: lightyellow;
  padding: 1em;
  border-radius: 5px;
}

.orders__item__quantity {
  font-size: 1.1rem;
  margin-inline: .5em;
}

.quantity__button {
  font-size: 1.2rem;
  padding: .4em;

}

.orders__total {
  display: flex;
  justify-content: space-between;
  padding: .5em;
  margin-top: 1em;
  border-top: solid 1px #727272;
}

.orders__total__price {
  font-size: 1.1rem;
  font-weight: 600;
}

@media (min-width:900px) {
  .menu {
    grid-template-columns: 1fr 1fr;
  }
}
</style>