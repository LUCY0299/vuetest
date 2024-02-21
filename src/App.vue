<script setup>
  import {RouterView} from "vue-router"

</script>

<template>
  <div>
    <header>
      <router-link to="/CounterPage"> Counter /</router-link>  
      <router-link to="/AboutPage"> About /</router-link>  
      <router-link to="/Quizes"> Quizes /</router-link>
      <router-link to="/ChartPage"> Chart</router-link>
    </header>
  </div>

  <div class="container">
    <RouterView />
  </div>
</template>



<style scoped>
header{
  text-align: center;
}
</style>
