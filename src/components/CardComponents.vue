<template>
    <div class="card" @click="navigateToQuiz">
        <img :src="quiz.img" alt="">
        <div class="card-text">
            <h2>{{ props.quiz.name }}</h2>
            <p>{{ props.quiz.questions.length }}questions</p>
        </div>
    </div>
</template>

<script setup>
    import { defineProps } from 'vue';
    import { useRouter } from "vue-router"

    const router = useRouter()
    const props = defineProps(['quiz'])

    const navigateToQuiz = () => {
      router.push(`/quiz/${props.quiz.id}`)   //URL路徑
    }
</script>

<style scoped> @import "./styles/EveryComponents.css"; </style>