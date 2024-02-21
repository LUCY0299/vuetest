<template>
    <div class="card" @click="navigateToQuiz(quiz.id)">
        <img :src="quiz.img" alt="">
        <div class="card-text">
            <h2>{{ props.quiz.name }}</h2>
            <p>{{ props.quiz.questions.length }}questions</p>
        </div>
    </div>
</template>

<script setup>
    import { defineProps } from 'vue';
    import { useNavigateToQuiz } from '../router/index.js';

    const props = defineProps(['quiz']);
    const { navigateToQuiz } = useNavigateToQuiz();
</script>

<style scoped> @import "./styles/EveryComponents.css"; </style>