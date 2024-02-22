<template>
    <div ref="barChartTwo" style="width: 1000px; height: 800px;"></div>
</template>

<script setup>

import { useHotelBarChart } from '../router/index.js'; 
const {barChartTwo} = useHotelBarChart();
</script>