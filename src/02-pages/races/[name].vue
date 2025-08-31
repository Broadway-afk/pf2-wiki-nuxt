<script setup lang="ts">
import {Card} from "widgets/card";

const route = useRoute();

definePageMeta({
  async validate(route) {
    try {
      const validSlugs = await $fetch('/api/races/slugs');
      return validSlugs.data.map((el) => el.Slug).includes(route.params.name);
    } catch (error) {
      return false;
    }
  }
});

const { data, pending, error } = await useFetch(`/api/races/info?populate=*&filters[Slug][$eq]=${route.params.name}`, {
  server: true
})

if (error.value) {
  throw createError({ statusCode: 404, statusMessage: 'Post Not Found', fatal: true });
}
</script>

<template>
<div>
  <Card v-for="race in data.data" :info="race" :key="race.id" />
</div>
</template>

<style scoped>

</style>