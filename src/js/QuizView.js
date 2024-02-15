import { ref,computed } from "vue";
import quizes from "../data/quizes.json"

export function useQuiz(quizId){
    const quiz = quizes.find((q => q.id === quizId))  //q元素 => 對於每個q，若函數為true(q的id與quizId相等)，返回q
    //根據從URL取得的quiz ID，從包含多個測驗對象的陣列中尋找特定測驗對象      
        
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
        }                                      //10個問題，索引為0-9
        if(quiz.questions.length - 1 === currentQuestionIndex.value){
            showResults.value = true
        }

        currentQuestionIndex.value++   //移動到下個問題
    }
    return {
        quiz,
        currentQuestionIndex,
        numberOfCorrectAnswers,
        showResults,
        questionStatus,
        barPercentage,
        onOptionSelected,
    };
}
