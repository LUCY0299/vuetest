<script setup>
    import q from "/src/data/quizes.json"
    import {ref, watch} from "vue"
    import Card from "/src/components/CardComponents.vue"

    const quizes = ref(q)
    const search = ref("")

    watch(search, () => {
        quizes.value = q.filter(quiz => quiz.name.toLowerCase().includes(search.value.toLowerCase()))
        //ref函數創建的quizes響應式應用，用value訪問
        //filter檢查指定數組的元素返回符合條件的
        //拿quiz的name轉成小寫，使搜尋不分大小寫
        //includes檢查quiz.name是否包含search.value
    })
</script>

<template>
    <div>
        <header>
            <h1>Quizes</h1>
            <input v-model.trim="search" type="text" placeholder="Search...">
            <!-- 綁定search輸入框  .trim去除輸入時的首尾空格-->
        </header>

        <div class="options-container">
            <Card v-for="quiz in quizes" :key="quiz.id" :quiz ="quiz"/>
        </div>
    </div>
</template>

<style scoped>

header{
    margin-bottom: 10px;
    margin-top: 30px;
    display:flex;
    align-items: center;
}

header h1{
    font-weight: bold;
    margin-right: 30px;
}

header input{
    border: none;
    background-color: rgba(128,128,128,0.1);
    padding: 10px;    /*內邊距 元素邊框（border）與元素內容（content）之間的空間*/
    border-radius: 5px;
}
.options-container{
    display: flex;
    flex-wrap: wrap;   /* 在橫向空間不足時能夠自動“換行” */
    margin-top: 40px;
}
</style>