<template>
  <DistrictBarChart />
  <HotelBarChart />
</template>
  
<script setup>
import DistrictBarChart from '../components/DistrictBarChart.vue'; 
import HotelBarChart from '../components/HotalBarChart.vue';
</script>
  
<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
html,
body {
  width: 100%;
  height: 100%;
  background-color: #e9e9e9;
}
#app {
  width: 100%;
  height: 100vh;
  padding: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>