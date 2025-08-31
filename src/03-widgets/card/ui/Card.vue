<script setup lang="ts">
import cardsKeys from 'shared/enums/cardsKeys'
import {Characteristic} from "entities/card";
import {onBeforeMount} from "vue";
import {Heritage} from "../model/heritages";
import {Trait} from "../model/traits";
import {InfoResponse} from "shared/model/infoResponse";

const props = defineProps<{ info: Record<string, unknown> }>()

const listName = ref<string>('Description')
const externalTab = ref<string>('Description')
const splitterModel = ref<number>(20)
const correctList = computed<string | Record<string, unknown>>(() => {
  return props.info ? props.info[listName.value] : ''
})

const externalList = [
  { label: 'Описание', name: 'Description' },
  { label: 'Родословные', name: 'Heritages' },
  { label: 'Таланты', name: 'Feats' },
]

const heritagesInfo = ref<InfoResponse<Heritage>>()
const featsInfo = ref<InfoResponse<Trait>>()

onBeforeMount(async () => {
  const ids = [8, ...props.info.Tags.map((el) => el.id)];
  const query = ids
      .map(id => `filters[Tags][id][$in]=${encodeURIComponent(id)}`)
      .join('&');
  const results = await Promise.all([
    useFetch(`/api/heritages/info?populate=Tags&${query}`),
    useFetch(`/api/feats/info?populate=Tags&${query}`)
  ]);
  const [heritages, feats] = results.map(result => result.data)
  heritagesInfo.value = heritages
  featsInfo.value = feats
})
</script>

<template>
  <q-card>
    <q-card-section>
      <div class="text-h6">{{ props.info.Title }}</div>
      <div class="text-subtitle2">Источник: {{ props.info.Source[0].Title }}</div>
      <q-tabs
          v-model="externalTab"
          dense
          class="text-grey"
          active-color="primary"
          indicator-color="primary"
          align="justify"
      >
        <q-tab v-for="(item, index) in externalList"
               :name="item.name"
               :label="item.label"
               :key="index"
        />
      </q-tabs>
    </q-card-section>

    <q-separator dark></q-separator>

    <q-card-section>
      <q-tab-panels v-model="externalTab" animated>
        <q-tab-panel name="Description">
          <q-splitter
              v-model="splitterModel"
              style="height: 360px"
          >
            <template v-slot:before>
              <q-tabs
                  v-model="listName"
                  vertical
                  class="text-teal"
              >
                <q-tab v-for="(item, index) in cardsKeys"
                       :name="item.name"
                       icon="mail"
                       :label="item.label"
                       :key="index"
                />
              </q-tabs>
            </template>

            <template v-slot:after>
              <q-tab-panels
                  v-model="listName"
                  animated
                  swipeable
                  vertical
                  transition-prev="jump-up"
                  transition-next="jump-up"
              >
                <template v-for="(item, index) in cardsKeys" key="index">
                  <q-tab-panel v-if="listName !== 'Parameters'"
                               :name="item.name"
                               v-html="info[item.name]"
                  />
                  <q-tab-panel v-else :name="item.name">
                    <Characteristic :info="correctList"/>
                  </q-tab-panel>
                </template>
              </q-tab-panels>
            </template>

          </q-splitter>
        </q-tab-panel>
        <q-tab-panel name="Heritages">
          {{heritagesInfo}}
        </q-tab-panel>
        <q-tab-panel name="Feats">
          {{featsInfo}}
        </q-tab-panel>
      </q-tab-panels>
    </q-card-section>
  </q-card>
</template>

<style scoped>

</style>