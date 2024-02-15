<script setup>
    import { defineProps } from 'vue';

    const props = defineProps({ 
        questionStatus:String,
        barPercentage:String 
    });
</script>

<template>
    <header class="quiz-header">
        <h4>Question {{ props.questionStatus }}</h4>
        <div class="bar">
            <div class="completion" :style="{ width: props.barPercentage }"> </div>
                                     <!-- 表示百分比的字符串控制進度條的寬度  -->
        </div>
    </header>
</template>

<style scoped> @import "./styles/QuizHeader.css"; </style>