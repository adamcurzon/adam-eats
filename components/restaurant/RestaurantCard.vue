<template>
  <NuxtLink :to="'/restaurant/' + id + '/'" class="restaurant-card">
    <img :src="'/adam-eats/images/restaurants/' + store.image" />
    <p class="flex flex-between">
      {{ store.name }}
      <span class="restaurant-rating text-small">{{ store.rating }}</span>
    </p>
    <p class="text-grey text-small text-light">
      {{ store.delivery_fee }} Delivery Fee - {{ store.delivery_window }}
    </p>
  </NuxtLink>
</template>

<script>
export default {
  props: ["store", "id"],
};
</script>
