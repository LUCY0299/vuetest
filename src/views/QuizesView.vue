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
import { quizes,search } from "../js/QuizesView.js";
import Card from "/src/components/CardComponents.vue"
</script>

<style scoped> @import "../styles/EveryView.css"; </style>