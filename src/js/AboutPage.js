import { ref, computed } from 'vue';

export const twd = ref(1000);

export const jpy = computed({
  get:  () => (Number.parseFloat(Number(twd.value) / 0.278).toFixed(3)),   //tw轉jp
  set: (val) => (twd.value = Number.parseFloat(Number(val) * 0.278).toFixed(3)) //jp轉tw
})

export const usd = computed({
  get: () => (Number.parseFloat(Number(twd.value) / 28.540).toFixed(3)),  //tw轉us
  set: (val) => (twd.value = Number.parseFloat(Number(val) * 28.540).toFixed(3)) //us轉tw
});