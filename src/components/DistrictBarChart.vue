<template>
    <div class=barChart ref="barChartContainer" style="width: 1000px; height: 500px;"></div>
</template>

<script setup>
import { useDistrictBarChart } from '../router/index.js'; 
const { barChartContainer} = useDistrictBarChart();
</script>

<style>
.barChart{
    display: flex;
    align-items: center;    /* 垂直居中 */
    justify-content: center;/* 水平居中 */
}
</style>