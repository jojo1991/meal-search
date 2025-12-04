<script setup>
import { onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'
import store from '@/store'
import Meals from '@/components/Meals.vue'

const meals = computed(() => store.state.mealsByIngredient)

const route = useRoute()

onMounted(() => {
  store.dispatch('searchMealsByIngredient', route.params.ingredient)
})
</script>

<template>
  <div class="p-8">
    <h1 class="text-4xl font-bold mb-4 text-orange-500">
      Meals for {{ route.params.ingredient }}
    </h1>

    <Meals :meals="meals" />
  </div>
</template>
