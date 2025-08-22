<script setup lang="ts">
const props = defineProps(['info'])

const liName = ref({
  "HitPoint": 'ОЗ',
  "Size": "Размер",
  "Speed": "Скорость",
  "StatIncreases": "Увеличение характеристик",
  "Languages": "Языки",
  "LanguagesDesc": "Дополнительные языки"
})
</script>

<template>
<div>
  <li v-for="(item, index) in Object.entries(props.info).filter((el) => el[0] !=='id')" :key="index">
    {{liName[item[0]]}}: {{item[1]}}
  </li>
</div>
</template>

<style scoped>

</style>