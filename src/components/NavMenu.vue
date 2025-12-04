<template>
  <nav class="bg-slate-800 text-white px-4 py-3 flex justify-center space-x-4">
    <router-link :to="{ name: 'home' }">
      Home
    </router-link>

    <router-link :to="{ name: 'meals-by-name' }">
      Meals by Name
    </router-link>

    <router-link :to="{ name: 'meals-by-letter' }">
      Meals by Letter
    </router-link>

    <router-link :to="{ name: 'ingredients' }">
      Ingredients
    </router-link>
  </nav>
</template>

<style lang="postcss" scoped>
.router-link-active {
  @apply underline underline-offset-4;
}
</style>
