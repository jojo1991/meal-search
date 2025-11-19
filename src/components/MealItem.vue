<script setup>
const props = defineProps({
  meal: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="bg-white shadow rounded-2xl">
    <router-link
      :to="{
        name: 'meal-details',
        params: {
          id: meal.idMeal
        }
      }"
    >
      <img
        :src="meal.strMealThumb"
        class="rounded-t-2xl h-48 w-full object-cover"
      />
    </router-link>

    <div class="p-3">
      <h3 class="font-bold mb-4">
        {{ meal.strMeal }}
      </h3>
      <p class="line-clamp-3">
        {{ meal.strInstructions }}
      </p>
    </div>
  </div>
</template>
