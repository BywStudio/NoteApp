import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

const LogginStore = defineStore('login', () => {
  let isLoggin = ref(false)
  let showLogin = ref(true)
  // function increment() {
  //   count.value++
  // }

  return { isLoggin, showLogin }
})

export default LogginStore
