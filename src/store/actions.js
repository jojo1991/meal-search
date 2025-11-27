import useApi from '@/composables/use_api'

const { api } = useApi()

export function searchMeals({ commit }, keyword) {
  return api.get(`search.php?s=${keyword}`).then(({ data }) => {
    commit('setSearchedMeals', data.meals)
  })
}

export function searchMealsByLetter({ commit }, letter) {
  return api.get(`search.php?f=${letter}`).then(({ data }) => {
    commit('setMealsByLetter', data.meals)
  })
}

export function searchMealsByIngredient({ commit }, ingredient) {
  return api.get(`filter.php?i=${ingredient}`).then(({ data }) => {
    commit('setMealsByIngredient', data.meals)
  })
}
