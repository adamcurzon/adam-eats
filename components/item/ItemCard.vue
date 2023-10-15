<template>
  <NuxtLink :to="'item/' + productId + '/'" class="item-card" append>
    <img :src="'/adam-eats/images/items/' + product.image" />
    <p class="flex flex-between">{{ product.price }}</p>
    <p class="text-grey text-small text-light">{{ product.name }}</p>
  </NuxtLink>
</template>

<script>
export default {
  props: ["productId"],
  setup() {
    const storeStore = useStoreStore();
    storeStore.loadStores();
    return { storeStore };
  },
  computed: {
    product() {
      return this.storeStore.getProduct(
        useRoute().params.restaurant_id,
        this.productId
      );
    },
  },
};
</script>
