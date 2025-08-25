<script setup lang="ts">
const route = useRoute();

definePageMeta({
  async validate(route) {
    try {
      const validSlugs = await $fetch('/api/races/slugs');
      return validSlugs.data.map((el) => el.slug).includes(route.params.name);
    } catch (error) {
      return false;
    }
  }
});

const { data, pending, error } = await useFetch(`/api/races/info?populate=*&filters[slug][$eq]=${route.params.name}`, {
  server: true
})

if (error.value) {
  throw createError({ statusCode: 404, statusMessage: 'Post Not Found', fatal: true });
}
</script>

<template>
<div>
  {{data}}
</div>
</template>

<style scoped>

</style>