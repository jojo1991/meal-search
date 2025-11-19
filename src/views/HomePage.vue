<script setup>
import { ref, onMounted } from 'vue'
import useApi from '@/composables/use_api'
import Meals from '@/components/Meals.vue'

const { api } = useApi()
const meals = ref([])

onMounted(async () => {
  for (let i = 0; i < 9; i++) {
    const { data } = await api.get('random.php')
    meals.value.push(data.meals[0])
  }
})
</script>

<template>
  <div class="p-8">
    <h1 class="text-4xl font-bold mb-4 text-orange-500">
      Random Meals
    </h1>

    <Meals :meals="meals" />
  </div>
</template>
