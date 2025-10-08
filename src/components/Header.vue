<template>
  <header>
    <h1 class="title">
      <router-link :to="{name: 'home'}">Pizza Planet</router-link>
    </h1>
    <nav>
      <router-link :to="{name:'home'}" class="nav-link">Home</router-link>
      <router-link :to="{name:'about'}" class="nav-link">About</router-link>
      <router-link :to="{name:'admin'}" class="nav-link">Admin</router-link>
      <router-link :to="{name:'menu'}" class="nav-link">Menu</router-link>
    </nav>
    <h2>The #1 Place for Pizza!</h2>
  </header>
</template>

<style scoped>
header{
  display: flex;
  align-items: center;
  padding: 1em;
}
.title a{
  text-decoration: none;
}
nav{
  margin-left: auto;
}
.nav-link{
  margin-block: 1em;
  text-decoration: none;
}
</style>