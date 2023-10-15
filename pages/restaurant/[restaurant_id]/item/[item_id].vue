<template>
  <div class="container padding">
    <NuxtLink
      :to="'/restaurant/' + useRoute().params.restaurant_id + '/'"
      class="padding-y text-grey flex flex-gap-20 flex-center"
    >
      <Icon name="material-symbols:arrow-back" /> Back to {{ storeName }}
    </NuxtLink>
    <div class="flex">
      <img class="width-50" :src="'/images/items/' + product.image" />
      <div class="flex flex-column flex-gap-20 width-50">
        <h1>{{ product.name }}</h1>
        <p>{{ product.price }}</p>
        <select>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
        <button>Add to order</button>
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
    product() {
      return this.storeStore.getProduct(
        useRoute().params.restaurant_id,
        useRoute().params.item_id
      );
    },
    storeName() {
      return this.storeStore.getStoreNameById(useRoute().params.restaurant_id);
    },
  },
};
</script>
