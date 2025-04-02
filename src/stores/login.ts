import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

const LogginStore = defineStore('login', () => {
  let isLoggin = ref(false)
  let showLogin = ref(true)
  let avatarMove = ref(false)
  // function increment() {
  //   count.value++
  // }

  return { isLoggin, showLogin, avatarMove }
})

export default LogginStore
