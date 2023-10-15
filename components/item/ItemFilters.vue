<template>
  <div class="filters items-filter">
    <template v-for="cat in categories">
      <NuxtLink :to="'#' + cat.toLowerCase().replace(' ', '_')">{{
        cat
      }}</NuxtLink>
    </template>
  </div>
</template>

<script>
export default {
  props: ["categories"],
};
</script>
