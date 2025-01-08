import { defineStore } from 'pinia'

export const useCounterStore = defineStore(
  'counter',
  () => {
    const count = useState('count', () => 0)

    const increment = () => {
      count.value += 1
    }
    const decrement = () => {
      count.value -= 1
    }

    const doubleCount = computed(() => count.value * 2)

    return {
      count,
      increment,
      decrement,
      doubleCount
    }
  }, {
  persist: {
    //https://prazdevs.github.io/pinia-plugin-persistedstate/zh/frameworks/nuxt.html
    storage: piniaPluginPersistedstate.cookies(),
    pick: ['count']
  }
})