import { ref } from "vue";
const count = ref(0);   //初始值0

// 接收router參數
export const addToCount = (router) => {
  count.value = count.value + 1;
  if (count.value === 10) {
    router.push('/AboutPage'); // 當計數器達到10時，導航到AboutPage
  }
};
export const subtractFromCount = () => {
  count.value = count.value - 1;
};

export default count;