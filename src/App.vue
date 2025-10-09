<script setup>
import Header from './components/Header.vue';
</script>

<template>
  <div>
    <Header />

    <router-view></router-view>

    <div class="components-section">
      <router-view name="delivery" class="info"></router-view>
      <router-view name="history" class="info"></router-view>
    </div>
  </div>

</template>

<style scoped>
.components-section{
  display: flex;
flex-direction: column;
gap: 1em;
  width: 90%;
  margin: 0 auto;
  padding: 1em;
}
.info{
  flex-basis: 50%;
}

@media (min-width:800px){
  .components-section{
    flex-direction: row;
  }
}
</style>
