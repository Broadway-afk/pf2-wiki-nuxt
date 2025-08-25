<script setup lang="ts">
import characteristic from "shared/enums/cardsKeys";
const props = defineProps<{info: string}>()

</script>

<template>
  <div>
    <div class="race_parameters--block" v-for="(item, index) in Object.entries(props.info).filter((el) => el[0] !=='id' && el[1])" :key="index">
      {{characteristic[item[0]]}}: <div v-html="item[1]"></div>
    </div>
  </div>
</template>

<style>
.race_parameters--block {
  display: flex;
}
</style>