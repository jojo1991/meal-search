<script setup>
import { ref, onMounted, computed } from 'vue'
import use_api from '@/composables/use_api'

const api = use_api()

const keyword = ref('')

const ingredients = ref([])

onMounted(() => {
  api.get('list.php?i=list').then(({ data }) => {
    ingredients.value = data.meals || []
  })
})

const searchedIngredients = computed(() => {
  if (!keyword.value) {
    return ingredients.value
  }

  return ingredients.value.filter((i) =>
    i.strIngredient.toLowerCase().includes(keyword.value.toLowerCase())
  )
})
</script>

<template>
  <div class="p-8">
    <h1 class="text-4xl font-bold mb-4 text-orange-500">
      Search Meals by Ingredients
    </h1>

    <input
      type="text"
      v-model="keyword"
      placeholder="Enter ingredient name"
      class="rounded border-2 border-gray-200 w-full bg-white mb-5 px-3 py-2"
    />

    <div class="grid grid-cols-4 gap-5">
      <router-link
        v-for="ingredient in searchedIngredients"
        :key="ingredient.idIngredient"
        :to="{
          name: 'meals-by-ingredients',
          params: { ingredient: ingredient.strIngredient }
        }"
        class="bg-white rounded p-3 mb-3 shadow block"
      >
        <img
          :src="`https://www.themealdb.com/images/ingredients/${ingredient.strIngredient}-Small.png`"
          class="mb-2"
        />
        <h3 class="text-2xl font-bold mb-2">
          {{ ingredient.strIngredient }}
        </h3>
      </router-link>
    </div>
  </div>
</template>
