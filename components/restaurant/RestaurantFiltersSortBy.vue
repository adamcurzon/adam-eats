<template>
  <div class="flex flex-gap-20 flex-column">
    <div>
      <input
        type="radio"
        id="for_you"
        name="sort_by"
        value="for_you"
        checked
      /><label for="for_you">Picked for you</label>
    </div>
    <div>
      <input
        type="radio"
        id="most_popular"
        name="sort_by"
        value="most_popular"
        checked
      /><label for="most_popular">Most popular</label>
    </div>
    <div>
      <input
        type="radio"
        id="rating"
        name="sort_by"
        value="rating"
        checked
      /><label for="rating">Rating</label>
    </div>
  </div>
</template>
