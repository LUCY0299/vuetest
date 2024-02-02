<!-- App.vue -->
<script setup>
  import {RouterView} from "vue-router"
</script>

<template>
  <div>
    <header>
      <router-link to="/CounterPage"> Counter</router-link>
      <router-link to="/AboutPage"> About</router-link>
      <router-link to="/QuizesView"> QuizView</router-link>
    </header>

    <main>
      <router-view></router-view>
    </main>
  </div>
  
</template>



<style scoped>
header{
  text-align: center;
}

main {
  background-color: aliceblue;
  height: 100vh;
  width: 100vw;
  
}


</style>
