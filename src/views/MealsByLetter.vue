<script setup>
import { computed, watch } from 'vue'
import { useRoute } from 'vue-router'
import store from '@/store'
import Meals from '@/components/Meals.vue'

const route = useRoute()

// A–Z as an array
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')

// Read meals from Vuex state
const meals = computed(() => store.state.mealsByLetter)

// Watch the route so when the :letter changes, we fetch new meals
watch(route, () => {
  store.dispatch('searchMealsByLetter', route.params.letter)
})
</script>

<template>
  <div class="p-8">
    <h1 class="text-4xl font-bold mb-4 text-orange-500">
      Search Meals by Letter
    </h1>

    <div class="flex justify-center gap-2 mt-2">
      <router-link
        v-for="letter in letters"
        :key="letter"
        :to="{
          name: 'meals-by-letter',
          params: { letter }
        }"
      >
        {{ letter }}
      </router-link>
    </div>

    <Meals :meals="meals" />
  </div>
</template>
