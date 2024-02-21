//index.js
import { createRouter, createWebHistory } from 'vue-router'
import CounterPage from '../views/CounterPage.vue';
import AboutPage from '../views/AboutPage.vue';
import QuizesView from '../views/QuizesView.vue';
import QuizView from '../views/QuizView.vue';
import ChartPage from '../views/ChartPage.vue'
import { ref, computed ,watch} from 'vue';
import { useRouter ,useRoute } from 'vue-router';
import q from "/src/data/quizes.json"
import quizes from "../data/quizes.json"

const routes = [
  { path: '/', redirect: '/Quizes'},
  { path: '/CounterPage', component: CounterPage },
  { path: '/AboutPage', component: AboutPage },
  { path: '/Quizes', component: QuizesView ,name: 'quizes'},
  { path: "/Quiz/:id", component: QuizView ,name: 'quiz',},
  { path: '/ChartPage' , component:ChartPage ,name :'chart'}
];

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

// CounterPage
export function useCounter() {
  const count = ref(0);
  const router = useRouter();
  const addToCount = () => {
    count.value++;
    if (count.value === 10) {
      router.push('/AboutPage'); 
    }
  };
  const subtractFromCount = () => {
    count.value--;
  };
  return { count, addToCount, subtractFromCount };
}

//AboutPage
export function useConverter() {
  const twd = ref(1000);
  const jpy = computed({
    get: () => (Number.parseFloat(Number(twd.value) / 0.278).toFixed(3)), //tw轉jp
    set: (val) => (twd.value = Number.parseFloat(Number(val) * 0.278).toFixed(3)) //jp轉tw
  });
  const usd = computed({
    get: () => (Number.parseFloat(Number(twd.value) / 28.540).toFixed(3)), //tw轉us
    set: (val) => (twd.value = Number.parseFloat(Number(val) * 28.540).toFixed(3)) //us轉tw
  });
  return { twd, jpy, usd }; 
}

//QuizesView
export function useQuizes(){
  const quizes = ref(q)
  const search = ref("")

  watch(search, () => {
      quizes.value = q.filter(quiz => quiz.name.toLowerCase().includes(search.value.toLowerCase()))
      //ref函數創建的quizes響應式應用，用value訪問
      //filter檢查指定數組的元素返回符合條件的
      //拿quiz的name轉成小寫，使搜尋不分大小寫
      //includes檢查quiz.name是否包含search.value
  })
  return {quizes,search};
}

//Card
export function useNavigateToQuiz() {
  const router = useRouter();
  const navigateToQuiz = (quizId) => {
    router.push(`/quiz/${quizId}`); // 使用参数 quizId 来动态导航
  }
  return { navigateToQuiz };
}

//Quiz
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
//Quiz Route name
export function useQuizIdtoRoute() {
  const route = useRoute();
  const quizId = parseInt(route.params.id); 
  return { quizId };
}