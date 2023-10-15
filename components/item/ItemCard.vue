<template>
  <NuxtLink :to="'item/' + productId + '/'" class="item-card" append>
    <img :src="'/images/items/' + product.image" />
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
        this.$route.params.restaurant_id,
        this.productId
      );
    },
  },
};
</script>
