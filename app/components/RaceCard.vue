<script setup lang="ts">
import cardsKeys from '../enums/cardsKeys.js'

const props = defineProps(['info'])

const listName = ref('Description')
const correctList = computed(() => {
  return props.info ? props.info[listName.value] : ''
})

</script>

<template>
  <q-card>
    <q-card-section>
      <div class="text-h6">Тут будет название</div>
      <div class="text-subtitle2">Источник: {{ props.info.Source }}</div>
      <q-btn> Подробнее</q-btn>
    </q-card-section>

    <q-separator dark></q-separator>


    <q-card-section v-if="listName !== 'Parameters'" v-html="correctList"/>
    <q-card-section v-else>
      <RaceCharacteristic :info="correctList"/>
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

<style>

</style>