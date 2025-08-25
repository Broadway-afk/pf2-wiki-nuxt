<script setup lang="ts">
import {LinkArray} from "./type";
const props = defineProps<{info: LinkArray}>()
</script>

<template>
  <q-tabs align="left">
    <q-route-tab
        v-for="(item, index) in info"
        :to="item.url"
        :label="item.label"
        :key="index"
    />
  </q-tabs>
</template>

<style scoped>

</style>