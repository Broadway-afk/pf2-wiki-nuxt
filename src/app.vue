<script setup lang="ts">
import {Header, Sidebar} from "./03-widgets/layout";

const leftDrawerOpen = ref<boolean>(false)

function toggleLeftDrawer (): void {
  leftDrawerOpen.value = !leftDrawerOpen.value
}

</script>

<template>
  <q-layout view="hHh LpR fFf">

    <Header @toggle-click="toggleLeftDrawer" />

    <Sidebar v-model="leftDrawerOpen" />

    <q-page-container>
      <NuxtPage page-key="static" />
    </q-page-container>

  </q-layout>
</template>
