<script setup lang="ts">
const props = defineProps(['info'])

const liName = ref({
  "HitPoint": 'ОЗ',
  "Size": "Размер",
  "Speed": "Скорость",
  "StatIncreases": "Увеличение характеристик",
  "Languages": "Языки",
  "Vision": "Зрение"
})
</script>

<template>
<div>
  <div class="race_parameters--block" v-for="(item, index) in Object.entries(props.info).filter((el) => el[0] !=='id' && el[1])" :key="index">
    {{liName[item[0]]}}: <div v-html="item[1]"></div>
  </div>
</div>
</template>

<style>
.race_parameters--block {
  display: flex;
}
</style>