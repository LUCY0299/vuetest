<template>
  <HeaderOne />

    <div class="counter">
      <div>
        <h2>The current count is...</h2>
        <h1>{{ count }}</h1>
        <button @click="subtractFromCount"> - </button>
        <button @click="addToCount"> + </button>
      </div>
    </div>

  <FooterOne />
</template>

<script setup>
import HeaderOne from '../components/HeaderOne.vue';
import FooterOne from '../components/FooterOne.vue';
import { useCounter } from '../router/index.js';

const { count, addToCount, subtractFromCount } = useCounter();
</script>

<style scoped> @import "../styles/EveryView.css"; </style>