<template>
  <div class="item-list-title" :id="hash_slug">{{ category }}</div>
  <div class="item-list">
    <template v-for="productId in productIdList" :key="productId">
      <ItemCard :productId="productId" />
    </template>
  </div>
</template>

<script>
export default {
  props: ["category", "productIdList"],
  data() {
    return {
      hash_slug: "",
    };
  },
  mounted() {
    this.hash_slug = this.category.toLowerCase().replace(" ", "_");
    console.log();
  },
};
</script>
