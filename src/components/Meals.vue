<script setup>
import MealItem from './MealItem.vue'

const props = defineProps({
  meals: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <div
    v-if="meals.length"
    class="grid grid-cols-3 gap-5 p-8"
  >
    <MealItem
      v-for="meal in meals"
      :key="meal.idMeal"
      :meal="meal"
    />
  </div>

  <div
    v-else
    class="flex justify-center text-gray-600"
  >
    Meals not found
  </div>
</template>
