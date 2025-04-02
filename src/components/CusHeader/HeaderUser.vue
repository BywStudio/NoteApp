<script setup>
import LogginStore from '@/stores/login'

const logginStore = LogginStore()

let imgSrc = localStorage.getItem('avatar')
let username = localStorage.getItem('username')

let enterAvatarMove = () => {
  logginStore.avatarMove = true
}

</script>

<template>
  <div class="user-avatar">
    <div class="avatar-test" @click="logginStore.showLogin = false" v-if="!logginStore.isLoggin">
      点击登录
    </div>  
    <img src="@/assets/user.png" alt="" v-else-if="imgSrc === null"/>
    <img :src="imgSrc" :title="username" v-else @mouseenter="enterAvatarMove" />
  </div>
  
</template>

<style scoped>
.user-avatar {
  display: flex;
  &:hover {
    cursor: pointer;
    color: hsla(160, 100%, 37%, 1);
    transition: all ease-in-out 0.5s;
  }
  img {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    margin-top: 0.5rem;
    margin-left: 0.5rem;
  }
}
</style>