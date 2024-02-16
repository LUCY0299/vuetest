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
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const count = ref(0);
const router = useRouter();

const addToCount = () => {
  count.value++;
  if (count.value === 10) {
    router.push('/AboutPage'); // 當計數器達到10時，導航到AboutPage
  }
};

const subtractFromCount = () => {
  count.value--;
};
</script>

<style scoped> @import "../styles/EveryView.css"; </style>