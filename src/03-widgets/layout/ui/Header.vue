<script setup lang="ts">
import {LinkArray} from "shared/ui/tabs/type";
import TabsRoute from "shared/ui/tabs/TabsRoute.vue";

const listTabs: LinkArray = [
  {
    url: '/races',
    label: 'Расы',
  },
  {
    url: '/races',
    label: 'Расы',
  },
  {
    url: '/races',
    label: 'Расы',
  },
]
</script>

<template>
  <q-header reveal elevated class="bg-primary text-white" height-hint="98">
    <q-toolbar>
      <q-btn dense flat round icon="menu" @click="$emit('toggleClick')" />

      <q-toolbar-title>
        <q-avatar>
          <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
        </q-avatar>
        Title
      </q-toolbar-title>
    </q-toolbar>

    <TabsRoute :info="listTabs" />
  </q-header>
</template>

<style scoped>

</style>