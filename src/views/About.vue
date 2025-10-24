<script setup></script>
<template>
  <section class="about">
    <h3>Quality Pizza for 30 years</h3>
    <div class="intro">
      <p class="intro__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius ad, laborum cum quibusdam est, atque mollitia
        perspiciatis alias a at voluptates repudiandae illum praesentium veritatis?Lorem, ipsum dolor sit amet
        consectetur adipisicing elit. Minus, eum quibusdam? Neque maiores provident aliquam ipsa ratione tenetur quis
        amet?</p>
      <img src="../assets/images/calzone.jpg" alt="masa calzone" class="intro__img">
    </div>
    <div>
      <h3>Click en the links below for more info</h3>
      <nav>
        <ul>
          <router-link :to="{ name: 'history' }" class="nav-link">History</router-link>
          <router-link :to="{ name: 'delivery' }" class="nav-link">Delivery</router-link>
          <router-link :to="{ name: 'locations' }" class="nav-link">Locations</router-link>
        </ul>
      </nav>
      <router-view></router-view>
    </div>
  </section>

</template>

<style scoped>
.about {
  width: 90%;
  max-width: 1000px;
  margin: 0 auto;
  padding: 1em;
}

.intro {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1em;
}

img {
  margin: 0 auto;
  border-radius: 5px;
}

@media (min-width:800px) {
  .intro {
    flex-direction: row;
    justify-content: space-evenly;
  }
  .intro__img{
    width: 50%;
  }
  .intro__text{
    align-self: flex-start;
  }

}
</style>