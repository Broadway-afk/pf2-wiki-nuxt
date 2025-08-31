<script setup lang="ts">
import {Header, Sidebar} from "./03-widgets/layout";

const leftDrawerOpen = ref<boolean>(false)

function toggleLeftDrawer(): void {
  leftDrawerOpen.value = !leftDrawerOpen.value
}

</script>

<template>
  <q-layout view="hHh LpR fFf">

    <Header @toggle-click="toggleLeftDrawer"/>

    <Sidebar v-model="leftDrawerOpen"/>

    <q-page-container>
      <div class="q-pa-md q-gutter-sm">
        <q-breadcrumbs>
          <q-breadcrumbs-el label="Home"></q-breadcrumbs-el>
          <q-breadcrumbs-el label="Components"></q-breadcrumbs-el>
          <q-breadcrumbs-el label="Breadcrumbs"></q-breadcrumbs-el>
        </q-breadcrumbs>
      </div>
      <NuxtPage page-key="static"/>
    </q-page-container>

  </q-layout>
</template>

<style>
*::-webkit-scrollbar {
  width: 3px;
  background: var(--q-dark);
}
*::-webkit-scrollbar-thumb {
  background: var(--q-secondary);
  border-radius: 4px;
}
</style>
