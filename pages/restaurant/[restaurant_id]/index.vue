<script setup></script>

<template>
  <div>
    <div class="full-banner">
      <img :src="'/adam-eats/images/restaurants/' + getStore.image" />
    </div>
    <div class="padding-x padding-bottom">
      <h1>{{ getStore.name }}</h1>
      <p class="text-grey text-small text-light">
        {{ getStore.delivery_fee }} Delivery Fee -
        {{ getStore.delivery_window }}
      </p>
    </div>
    <div class="flex">
      <ItemFilters :categories="Object.keys(getStore.categories)" />
      <div class="item-list-holder">
        <template v-for="(productIdList, category) in getStore.categories">
          <ItemList :category="category" :productIdList="productIdList" />
        </template>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    const storeStore = useStoreStore();
    storeStore.loadStores();
    return { storeStore };
  },
  computed: {
    getStore() {
      return this.storeStore.getStoreById(useRoute().params.restaurant_id);
    },
  },
};
</script>
