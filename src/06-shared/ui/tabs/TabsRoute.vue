<script setup lang="ts">
import {LinkArray} from "./type";

const props = defineProps<{
  info: LinkArray,
}>()
</script>

<template>
  <q-tabs align="left">
    <template v-for="(item, index) in info" :key="index">
      <q-btn-dropdown
          v-if="item.btnList"
          :label="item.label"
          :to="item.url"
          auto-close
          split
          stretch
          flat>
        <q-list>
          <q-item clickable v-for="(el, index) in item.btnList">
            <q-item-section>
              <q-route-tab
                  :to="el.url"
                  :label="el.label"
                  :key="index"
              />
            </q-item-section>
          </q-item>
        </q-list>
      </q-btn-dropdown>
      <q-route-tab v-else
          :to="item.url"
          :label="item.label"
      />
    </template>
  </q-tabs>
</template>

<style scoped>

</style>