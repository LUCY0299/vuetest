<template>
    <div class="results">
        <p>Your Results...</p>
        <h1> {{ props.numberOfCorrectAnswers }}/{{ props.quizQuestionlength }} </h1>
        <RouterLink to='/'>Go Back</RouterLink>
    </div>
</template>

<style scoped> @import "./styles/EveryComponents.css"; </style>

<script setup>
    import {defineProps} from "vue"
    import {RouterLink} from "vue-router"

    const props = defineProps({ quizQuestionlength:Number, numberOfCorrectAnswers:Number });
</script>