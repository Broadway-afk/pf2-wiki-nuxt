<script setup lang="ts">
import RaceCard from "../components/RaceCard.vue";

const config = useRuntimeConfig()
const { data, pending, error } = await useFetch(`/api/races`, {
  server: true
})

</script>

<template>
  <div>
    <div v-if="pending">
      Загрузка...
    </div>
    <div v-else-if="error">
      Произошла ошибка: {{ error.message }}
    </div>
    <div v-else>
      <RaceCard v-for="race in data.data" :info="race" :key="race.id"/>
    </div>
  </div>
</template>

<style scoped>

</style>