<script setup>
import { ref, onMounted, defineProps} from 'vue'
import LogginStore from '@/stores/login';

let logginStore = LogginStore()

let ImgSrc = localStorage.getItem('avatar')

</script>

<template>
  <div class="user-avatar">
    <div class="avatar-test" @click="logginStore.showLogin = false" v-if="!logginStore.isLoggin">
      点击登录
    </div>
    <img :src="ImgSrc" title="头像" v-else/>
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