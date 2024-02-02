<!-- CounterObject.vue -->
<template>
  <div class="container">
  <div>
    <h2>The current count is...</h2>
    <h1>{{ count }}</h1>
    <button @click="subtractFromCount">-</button>
    <button @click="addToCount">+</button>
  </div>
  </div>
</template>

<script setup>
import { ref} from "vue";
import { useRouter } from 'vue-router';

const count = ref(0);
const router = useRouter();

const addToCount = () => {
  count.value = count.value + 1;
  if (count.value === 10) {
    router.push('/AboutPage'); // 當計數器達到10時，導航到AboutPage
  }
};
const subtractFromCount = () => {
  count.value = count.value - 1;
};
</script>

<style scoped>
.container {
  text-align: center;
  height: 100vh;
  display: flex;
  align-items: center; 
  justify-content: center;
}
</style>
