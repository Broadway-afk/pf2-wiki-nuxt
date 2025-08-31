<script setup lang="ts">
import {LinkArray} from "shared/ui/tabs/type";
import TabsRoute from "shared/ui/tabs/TabsRoute.vue";

const listTabs: LinkArray = [
  {
    label: 'Главная',
    url: '/',
  },
  {
    label: 'Правила',
    url: '/rules',
    btnList: [
      {
        url: '/races/human',
        label: 'Источники',
      }
    ],
  },
  {
    label: 'Персонаж',
    url: '/rules',
    btnList: [
      {
        url: '/races/human',
        label: 'Источники',
      }
    ],
  },
  {
    label: 'Игровой мастер',
    url: '/rules',
    btnList: [
      {
        url: '/races/human',
        label: 'Источники',
      }
    ],
  },
  {
    label: 'Игровой мир',
    url: '/rules',
    btnList: [
      {
        url: '/races/human',
        label: 'Источники',
      }
    ],
  },
  {
    label: 'Приключения',
    url: '/rules',
    btnList: [
      {
        url: '/races/human',
        label: 'Источники',
      }
    ],
  },
]

   /* [
    {
      label: 'Расы',
      url: '/races',
      btnList: [
        {
          url: '/races/human',
          label: 'Люди',
        }
      ],
    },
        {
          label: 'Классы',
          url: '/class',
          btnList: [
            {
              url: '/races/human',
              label: 'Люди',
            }
          ],
        },
        {
          label: 'Предыстории',
          url: '/backgrounds',
          btnList: [
            {
              url: '/races/human',
              label: 'Люди',
            }
          ],
        },
        {
          label: 'Таланты',
          url: '/feats',
          btnList: [
            {
              url: '/races/human',
              label: 'Люди',
            }
          ],
        },
        {
          label: 'Заклинания',
          url: '/spells',
          btnList: [
            {
              url: '/races/human',
              label: 'Люди',
            }
          ],
        },
        {
          label: 'Снаряжение',
          url: '/equipment',
          btnList: [
            {
              url: '/races/human',
              label: 'Люди',
            }
          ],
        },
        {
          label: 'Игровой мир',
          url: '/setting',
          btnList: [
            {
              url: '/races/human',
              label: 'Люди',
            }
          ],
        },
        {
          label: 'События',
          url: '/adventuring',
          btnList: [
            {
              url: '/races/human',
              label: 'Люди',
            }
          ],
        },
        {
          label: 'Бестиарий',
          url: '/monsters',
          btnList: [
            {
              url: '/races/human',
              label: 'Люди',
            }
          ],
        },
        {
          label: 'Источники',
          url: '/sources',
          btnList: [
            {
              url: '/races/human',
              label: 'Люди',
            }
          ],
        },
    ] */
</script>

<template>
  <q-header reveal elevated class="bg-primary text-white" height-hint="98">
    <q-toolbar>
      <q-btn dense flat round icon="menu" @click="$emit('toggleClick')" />

        <q-toolbar-title>
          <q-btn stretch flat to="/">
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
          </q-avatar>
            Pathfinder wiki
          </q-btn>
        </q-toolbar-title>
    </q-toolbar>

    <TabsRoute :info="listTabs" />
  </q-header>
</template>

<style scoped>

</style>