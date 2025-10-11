<script setup></script>
<template>
  <section class="home">
    <div class="home__info">
    <h3 class="home__info__title">Hot out of the oven!</h3>
    <p>Vegetarian Hot Pizza</p>
    <p>Our signature vegetarian, but with a kick...</p>
    <router-link :to="{name:'menu'}" class="home__info__link">Let's Order</router-link>
    </div>
    <img src="../assets/images/fire.jpg" alt="pizza on oven" class="home__img">
  </section>
</template>

<style scoped>
.home{
  width: 90%;
  padding: 1em;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1em;
}
.home__info{
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1em;
}

.home__info__title{
  color: var(--accent);
}

.home__img{
  width: 100;
  border-radius: 5px;
}
.home__info__link{
  text-decoration: underline;
  text-underline-offset: .2em;
  font-size: 1.3rem;
  font-weight: 600;
}

@media (min-width:800px){
  .home{
    flex-direction: row;
    justify-content: space-between;
  }
  .home__img{
    width: 50%;
  }
}
</style>