<script setup>
import { ref, computed } from 'vue';

const twd = ref(1000);

const jpy = computed({
  get:  () => (Number.parseFloat(Number(twd.value) / 0.278).toFixed(3)),   //tw轉jp
  set: (val) => (twd.value = Number.parseFloat(Number(val) * 0.278).toFixed(3)) //jp轉tw
})

const usd = computed({
  get: () => (Number.parseFloat(Number(twd.value) / 28.540).toFixed(3)),  //tw轉us
  set: (val) => (twd.value = Number.parseFloat(Number(val) * 28.540).toFixed(3)) //us轉tw
});

</script>

<template>
  <div class="container">
      <h1>Currency Converter</h1>
      <p>假設, 1 日幣 = 0.278 台幣, 且 1 美金 = 28.540 台幣: </p>
      <div>台幣 <input type="text" v-model="twd"></div>
      <div>日幣 <input type="text" v-model="jpy"></div>
      <div>美金 <input type="text" v-model="usd"></div>
  </div>
</template>


<style scoped>
.container {
  height: 100vh;
  text-align: center;
  display: flex;
  align-items: center; 
  justify-content: center;
  flex-direction: column;   /* 垂直方向排列 */
}

</style>
