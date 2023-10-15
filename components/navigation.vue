<template>
  <nav>
    <div>
      <button class="clear">
        <Icon name="material-symbols:menu-rounded" color="black" />
      </button>
      <NuxtLink to="/">
        <p>Adam <b>Eats</b></p>
      </NuxtLink>
    </div>
    <ul>
      <li><NuxtLink to="/cart">Cart</NuxtLink></li>
    </ul>
  </nav>
</template>
