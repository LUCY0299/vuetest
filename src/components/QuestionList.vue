<template>
    <div class="question-container">
        <h1 class="question">
            {{ props.question.text }}
        </h1>
    </div>
    <div class="options-container">
        <div v-for="option in question.options" 
            :key="option.id" 
            class="option" 
            @click="emitSelectedOption(option.isCorrect)"
        >
            <p class="option-label"> {{ option.label }} </p>
            <div class="option-value">
                <p>{{ option.text }}</p>
            </div>
        </div>
        
    </div>
</template>

<script setup>
    import { defineProps, defineEmits } from 'vue';
    const emit = defineEmits(["selectOption" ]);
    const props = defineProps({ question: Object });

    const emitSelectedOption = (isCorrect) => {
        emit("selectOption" , isCorrect)
    }
</script>  

<style scoped> @import "./styles/EveryComponents.css"; </style>