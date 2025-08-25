<script setup lang="ts">
import cardsKeys from 'shared/enums/cardsKeys'
import {Characteristic} from "entities/card";

const props = defineProps<{info: string }>()

const listName = ref<string>('Description')
const correctList = computed<string | Record<string, unknown>>(() => {
  return props.info ? props.info[listName.value] : ''
})
</script>

<template>
  <q-card>
    <q-card-section>
      <div class="text-h6">{{props.info.Title.Title}}</div>
      <div class="text-subtitle2">Источник: {{ props.info.Title.Source }}</div>
      <NuxtLink :to="`/races/${props.info.slug}`"><q-btn>Страница</q-btn></NuxtLink>
      <q-btn v-if="!props.info.Title.Legacy">Устаревшее</q-btn>
      <q-btn>Таланты (черты)</q-btn>
      <q-btn>Инстинкты</q-btn>
    </q-card-section>

    <q-separator dark></q-separator>


    <q-card-section v-if="listName !== 'Parameters'" v-html="correctList"/>
    <q-card-section v-else>
      <Characteristic :info="correctList" />
    </q-card-section>


    <q-separator dark></q-separator>

    <q-card-actions>
      <q-btn flat v-for="(btn, index) in cardsKeys"
             :label="btn.label"
             :tabindex="index + 1"
             @click="listName = btn.name"
      />
    </q-card-actions>
  </q-card>
</template>

<style scoped>

</style>