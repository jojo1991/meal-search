<script setup>
import { onMounted, computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import store from '@/store'
import Meals from '@/components/Meals.vue'

const route = useRoute()
const keyword = ref('')

// read from Vuex state
const meals = computed(() => store.state.searchedMeals)

function searchMeals() {
  if (keyword.value) {
    store.dispatch('searchMeals', keyword.value)
  } else {
    store.commit('setSearchedMeals', [])
  }
}

onMounted(() => {
  keyword.value = route.params.name
  if (keyword.value) {
    searchMeals()
  }
})
</script>

<template>
  <div class="p-8 pb-0">
    <h1 class="text-4xl font-bold mb-4 text-orange-500">
      Search Meals by Name
    </h1>

    <div class="mb-5">
      <input
        v-model="keyword"
        @change="searchMeals"
        type="text"
        placeholder="Enter name"
        class="rounded border border-gray-400 w-full bg-white"
      />
    </div>

    <Meals :meals="meals" />
  </div>
</template>
