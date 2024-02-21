<template>
    <div ref="container" style="width: 600px; height: 400px" ></div>>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import usePie from '../router/echart.js'

const container = ref(null);   //用於訪問 DOM 元素

//生命週期鉤子 在組件掛載後執行
onMounted(() => {
    const { setOption, resize } = usePie(container.value)
    setOption([
    { value: 2200, name: '哆啦A夢', itemStyle: { color: '#46B3E6' } },
    { value: 2200, name: '小夫', itemStyle: { color: '#2E279D' } },
    { value: 4400, name: '胖虎', itemStyle: { color: '#4D80E4' } }
    ])
    window.addEventListener('resize', () => {
    resize()
    });
});
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
