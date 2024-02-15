<template>
    <div>
        <QuizHeader 
            :questionStatus="questionStatus" 
            :barPercentage="barPercentage"
        />  <!-- QuizHeader Props -->
        <div>
            <QuestionList 
                v-if="!showResults"
                :question="quiz.questions[currentQuestionIndex]"
                @selectOption="onOptionSelected"                
            />
            <ResultScreen 
                v-else
                :quizQuestionlength="quiz.questions.length" 
                :numberOfCorrectAnswers="numberOfCorrectAnswers"
            />
        </div>
    </div>
</template>

<script setup>
import { useQuiz }  from '../js/QuizView.js';
import QuestionList from '../components/QuestionList.vue';
import QuizHeader from '../components/QuizHeader.vue';
import ResultScreen from '../components/ResultScreen.vue';
import { useRoute } from "vue-router"
const route = useRoute()  
const quizId = parseInt(route.params.id);
const {
    quiz,
    currentQuestionIndex,
    numberOfCorrectAnswers,
    showResults,
    questionStatus,
    barPercentage,
    onOptionSelected,
} = useQuiz(quizId);
</script>