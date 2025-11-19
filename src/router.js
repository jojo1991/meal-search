import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '@/views/HomePage.vue'
import MealsByName from '@/views/MealsByName.vue'
import MealsByLetter from '@/views/MealsByLetter.vue'
import MealsByIngredients from '@/views/MealsByIngredients.vue'
import MealDetails from '@/views/MealDetails.vue'
import Ingredients from '@/views/Ingredients.vue'

const routes = [
  {
    path: '/meal-search/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/meal-search/by-name/:name?',
    name: 'meals-by-name',
    component: MealsByName
  },
  {
    path: '/meal-search/by-letter/:letter?',
    name: 'meals-by-letter',
    component: MealsByLetter
  },
  {
    path: '/meal-search/by-ingredient/:ingredient?',
    name: 'meals-by-ingredients',
    component: MealsByIngredients
  },
  {
    path: '/meal-search/meal/:id',
    name: 'meal-details',
    component: MealDetails
  },
  {
    path: '/meal-search/ingredients',
    name: 'ingredients',
    component: Ingredients
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
