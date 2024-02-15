import q from "/src/data/quizes.json"
import {ref, watch} from "vue"


export const quizes = ref(q)
export const search = ref("")

watch(search, () => {
    quizes.value = q.filter(quiz => quiz.name.toLowerCase().includes(search.value.toLowerCase()))
    //ref函數創建的quizes響應式應用，用value訪問
    //filter檢查指定數組的元素返回符合條件的
    //拿quiz的name轉成小寫，使搜尋不分大小寫
    //includes檢查quiz.name是否包含search.value
})