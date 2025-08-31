<script setup lang="ts">
import {Card} from 'widgets/card'

const { data, error } = await useFetch(`/api/races/info?populate=*`, {
  server: true
})

</script>

<template>
  <div>
    <div v-if="error">
      Произошла ошибка: {{ error.message }}
    </div>
    <div class="q-ma-lg" v-else>
      <Card v-for="race in data.data" :info="race" :key="race.id" />
    </div>
  </div>
</template>

<style scoped>

</style>