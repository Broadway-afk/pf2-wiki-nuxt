<script setup lang="ts">
import {menuList} from 'shared/enums/sidebar'
const props = defineProps<{ modelValue: boolean }>()
const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void
}>()
const value = computed({
  get() {
    return props.modelValue;
  },
  set(newValue) {
    emit("update:modelValue", newValue);
  },
});
</script>

<template>
  <q-drawer v-model="value" side="left" bordered overlay>
    <q-scroll-area class="fit">
      <q-list>
        <template v-for="(menuItem, index) in menuList" :key="index">
          <q-item clickable :active="menuItem.label === 'Outbox'" v-ripple>
            <q-item-section avatar>
              <q-icon :name="menuItem.icon"></q-icon>
            </q-item-section>
            <q-item-section>
              <q-btn-dropdown
                  v-if="menuItem.btnList"
                  :label="menuItem.label"
                  :to="menuItem.url"
                  auto-close
                  split>
                <q-list>
                  <q-item clickable v-for="(el, index) in menuItem.btnList" :key="index">
                    <q-item-section>
                      {{el.label}}
                    </q-item-section>
                  </q-item>
                </q-list>
              </q-btn-dropdown>
            </q-item-section>
          </q-item>
          <q-separator :key="'sep' + index"  v-if="menuItem.separator"></q-separator>
        </template>
      </q-list>
    </q-scroll-area>
  </q-drawer>
</template>

<style scoped>

</style>