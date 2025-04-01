<script setup>
import { ref } from 'vue'

import Login from '@/components/Login/Login.vue'
import Register  from '@/components/Login/Register.vue'

const currentTab = ref('Login')
const isActive = ref(true)

const tabs = {
  Login,
  Register
}

</script>

<template>
  <div class="login-container">
    <div class="title">
      <div :class="{active: isActive}" @click="currentTab = 'Login'; isActive=true">登录</div>
      <div :class="{active: !isActive}" @click="currentTab = 'Register'; isActive=false">注册</div>
    </div>
    <keep-alive>
      <component :is="tabs[currentTab]"></component>
    </keep-alive>
  </div>
</template>

<style scoped>
.login-container {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  background-color: hsla(160, 100%, 37%, 1);
  width: 15rem;
  height: 20em;
  border-radius: 10px;
  padding: 3rem;
  .title {
    width: 10rem;
    display: flex;
    justify-content: space-around;
    /* background-color: #fff; */
    margin: 0 auto;
    color: #000;
    text-align: center;
    &:hover {
      cursor: pointer;
    }
    .active {
      color: #fff;
    }
    .login {
      &:hover {
        color: #fff;
        transition: all ease-in-out 0.5s;
      }
    }
    .register {
      &:hover {
        color: #fff;
        transition: all ease-in-out 0.5s;
      }
    }
  }
}
</style>