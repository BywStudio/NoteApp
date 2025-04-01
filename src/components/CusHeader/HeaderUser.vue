<script setup>
import { ref } from 'vue'

const props = defineProps({
  isLoggin: {
    type: Boolean
  }
})

let userName = ref('')


</script>

<template>
  <div class="user-avatar">
    <div class="avatar-test">{{isLoggin ? userName : '未登录'}}</div>
    <img src="" alt="avatar" class="avatar" v-if="isLoggin"/>
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
    background-color: pink;
    border-radius: 50%;
    align-self: center;
    margin-left: 0.5rem;
  }
}
</style>