<script setup></script>
<template>
  <section class="menu">
    <div class="menu__list">
      <h3>Our Pizzas</h3>
      <div class="menu__container">
        <div class="menu__card">
          <h4 class="menu__card__title">Margherita</h4>
          <p class="menu__card__info">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, eligendi.</p>
          <div class="menu__card__price">
            <div class="small">
              <p>9"</p>
              <p>$7.95</p>
              <button>Add</button>
            </div>
            <div class="large">
              <p>12"</p>
              <p>$12.95</p>
              <button>Add</button>
            </div>
          </div>


        </div>
      </div>
    </div>
    <div class="cart">
      <h3>Cart</h3>
      <div class="orders">
        <div class="orders__item">
          <div class="orders__item__buttons">
            <button class="quantity__btn">-</button>
            <span>1</span>
            <button class="quantity__btn">+</button>
          </div>
          <p class="orders__item__name">Margherita 9"</p>
          <p class="orders__item__price">$7.95</p>
        </div>
      </div>
      <p>Orders total: $90</p>
      <button>Place Order</button>
    </div>
  </section>
</template>

<style scoped>
.menu{
  width: 90%;
  margin: 0 auto;
  padding: 1em;
  display: grid;
  grid-template-columns: 1fr;
  gap: 1em;
}

.small, .large, .orders__item{
  display: flex;
  justify-content: space-between;
}






@media (min-width:900px){
  .menu{
    grid-template-columns: 1fr 1fr;
  }
}
</style>