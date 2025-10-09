<script setup></script>
<template>
  <section class="about">
    <div class="intro">
      <div>
        <h3>Quality Pizza for 30 years</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius ad, laborum cum quibusdam est, atque mollitia
          perspiciatis alias a at voluptates repudiandae illum praesentium veritatis?</p>
          <img src="../assets/images/calzone.jpg" alt="masa calzone">

      </div>

    </div>
    <div>
      <h3>Click en the links below for more info</h3>
      <nav>
        <ul>
          <router-link :to="{name:'history'}" class="nav-link">History</router-link>
          <router-link :to="{name:'delivery'}" class="nav-link">Delivery</router-link>
          <router-link :to="{name:'locations'}" class="nav-link">Locations</router-link>
        </ul>
      </nav>
      <router-view></router-view>
    </div>
  </section>

</template>

<style scoped>
.about{
  width: 90%;
  max-width: 1000px;
  margin: 0 auto;
  padding: 1em;
}

img{
  margin: 0 auto;
  border-radius: 5px;
}
</style>