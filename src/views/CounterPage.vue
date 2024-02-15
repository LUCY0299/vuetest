<script setup>
import { ref } from "vue";
import { useRouter } from 'vue-router';

const count = ref(0);   //初始值0
const router = useRouter();   //const-> 不能再被賦予新值


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

<template>
  <div class="container">
    <div>
      <h2>The current count is...</h2>
      <h1>{{ count }}</h1>
      <button @click="subtractFromCount"> - </button>
      <button @click="addToCount"> + </button>
    </div>
  </div>
</template>

<style scoped>
.container {
  text-align: center;
  height: 100vh;  /* vh視窗高度 的100% */
  display: flex;
  align-items: center;    /* 垂直居中 */
  justify-content: center;/* 水平居中 */
}
button{
  font-size: 30px;
  width: 40px;
  height: 40px;
  cursor: pointer;
}
</style>
