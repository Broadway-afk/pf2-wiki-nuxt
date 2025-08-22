<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps({
  error: Object as () => NuxtError
})
</script>

<template>
  <div class="error-page">
    <h1>Страница не найдена</h1>
    <p>Похоже, запрошенная страница отсутствует.</p>
    <p>{{ error?.statusCode }}</p>
  </div>
</template>

<style scoped>

</style>