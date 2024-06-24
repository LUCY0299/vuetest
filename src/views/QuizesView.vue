<template>
    <div>
        <header class="quizes-header">
            <h1>Quizes</h1>
            <input v-model.trim="search" type="text" placeholder="Search...">
            <!-- 綁定search輸入框  .trim去除輸入時的首尾空格-->
        </header>

        <div class="quizes-options">
            <Card v-for="quiz in quizes" :key="quiz.id" :quiz ="quiz"/>
        </div>
    </div>
</template>


<script setup>
import { useQuizes } from '../router/index.js';
import Card from "/src/components/CardComponents.vue"
import "../styles/EveryView.css";
const {quizes,search} =useQuizes();
</script>

