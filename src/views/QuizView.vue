<script setup>
    import QuestionList from '../components/QuestionList.vue';
    import QuizHeader from '../components/QuizHeader.vue';
    import ResultScreen from '../components/ResultScreen.vue';
    import { useRoute } from "vue-router"
    import { ref,computed } from "vue";
    import quizes from "../data/quizes.json"

    const route = useRoute()
    const quizId = parseInt(route.params.id)
    const quiz = quizes.find((q => q.id === quizId))
    const currentQuestionIndex = ref(0)
    const numberOfCorrectAnswers = ref(0)
    const showResults = ref(false)

    const questionStatus = computed(() => `${currentQuestionIndex.value}/${quiz.questions.length}`)
    /* 格式化字符串顯示簡單的文本信息 */
    const barPercentage = computed(()  => currentQuestionIndex.value/quiz.questions.length * 100 + '%')
    /* 直接進行數學計算，將結果乘以 100 轉換成一個百分比數值，最後加上百分比符號 */

    const onOptionSelected = (isCorrect) =>{
        if(isCorrect){
            numberOfCorrectAnswers.value++;
        }
        if(quiz.questions.length - 1 === currentQuestionIndex.value){
            showResults.value = true
        }

        currentQuestionIndex.value++
    }
</script>

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

