<template>
    <div>
        <QuizHeader 
            :questionStatus="questionStatus" 
            :barPercentage="barPercentage"
        />  
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
import QuestionList from '../components/QuestionList.vue';
import QuizHeader from '../components/QuizHeader.vue';
import ResultScreen from '../components/ResultScreen.vue';
import { useQuiz }  from '../router/index.js';
import { useQuizIdtoRoute } from '../router/index.js';

const { quizId } = useQuizIdtoRoute();  /* router name */
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