<template>
  <header>
    <div class="title-container">
      <h1 class="title">
        <router-link :to="{ name: 'home' }">Pizza Planet</router-link>
      </h1>
      <h2>The #1 Place for Pizza!</h2>
    </div>
    <nav>
      <router-link :to="{ name: 'home' }" class="nav-link">Home</router-link>
      <router-link :to="{ name: 'about' }" class="nav-link">About</router-link>
      <router-link :to="{ name: 'admin' }" class="nav-link">Admin</router-link>
      <router-link :to="{ name: 'menu' }" class="nav-link">Menu</router-link>
    </nav>

  </header>
</template>

<style scoped>
header {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  padding: 1em;
  background: url('../assets/images/main-bg.jpg') no-repeat center/cover;
  height: 650px;
  color: #f2f2f2;


}

.title a {
  
  font-size: 3rem;
}
h2{
  font-size: 1rem;
  margin-top: -10px;
  text-align: center;
}

nav {
  display: flex;
  flex-wrap: wrap;
  gap: 1em;
}

.nav-link {
  margin-block: 1em;
  
  font-size: 1.2rem;
}


@media (min-width:850px){
  header{
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    padding-inline: 2em;
  }
}
</style>