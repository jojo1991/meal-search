<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import useApi from '@/composables/use_api'

const { api } = useApi()
const route = useRoute()

const meal = ref({})

onMounted(async () => {
  const { data } = await api.get(`lookup.php?i=${route.params.id}`)
  meal.value = data.meals[0]
})
</script>

<template>
  <div v-if="meal" class="m-10">
    <h1 class="text-5xl font-bold mb-10">
      {{ meal.strMeal }}
    </h1>

    <img
      :src="meal.strMealThumb"
      class="max-w-[25%] mb-10"
    />

    <p class="mb-10">
      {{ meal.strInstructions }}
    </p>

    <ul class="mb-10">
      <li
        v-for="i in 20"
        :key="i"
      >
        <div v-if="meal['strIngredient' + i] && meal['strIngredient' + i] !== ''">
          {{ i }}. {{ meal['strIngredient' + i] }}
        </div>
      </li>
    </ul>
  </div>
</template>
