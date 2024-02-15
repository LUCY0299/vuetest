<template>
  <div class="converter">
      <h1>Currency Converter</h1>
      <p>假設, 1 日幣 = 0.278 台幣, 且 1 美金 = 28.540 台幣: </p>
      <div>台幣 <input type="text" v-model="twd"></div>
      <div>日幣 <input type="text" v-model="jpy"></div>
      <div>美金 <input type="text" v-model="usd"></div>
  </div>
</template>


<script setup>
import { twd, jpy, usd } from '../js/AboutPage.js'
</script>
<style scoped>  @import "../styles/AboutPage.css";</style>
