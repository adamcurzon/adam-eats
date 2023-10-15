<script setup>
import { storeToRefs } from "pinia";
const storeStore = useStoreStore();
const { stores } = storeToRefs(storeStore);
storeStore.loadStores();
</script>

<template>
  <div class="restaurant-list">
    <template v-for="(store, key) in stores" :key="key">
      <RestaurantCard :store="stores[key]" :id="key" />
    </template>
  </div>
</template>
