<template>
  <div class="counter">
    <div>
      <h2>The current count is...</h2>
      <h1>{{ count }}</h1>
      <button @click="subtractFromCount"> - </button>
      <button @click="addToCount"> + </button>
    </div>
  </div>
</template>

<script setup>
import count,{  addToCount as origAddToCount, subtractFromCount } from '../js/CounterPage.js'
import { useRouter } from 'vue-router';

const router = useRouter();  
const addToCount = () => origAddToCount(router);
</script>

<style scoped> @import "../styles/CounterPage.css"; </style>