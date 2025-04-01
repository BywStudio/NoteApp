<script setup lang="ts">
import { ref } from 'vue'
import request from '@/requests'

import { ElMessage } from 'element-plus'


const userInfo = ref({
  username: '',
  phone: '',
  password: '',
  confirmPassword: ''
})

function registerSubmit() {
  const { value: user } = userInfo
  if(!user.username) return ElMessage({
    type: 'warning',
    message: '请输入用户名'
  })
  if(!user.phone) return ElMessage({
    type: 'warning',
    message: '请输入手机号'
  })
  if(!user.password) return ElMessage({
    type: 'warning',
    message: '请输入密码'
  })
  if(!user.confirmPassword) return ElMessage({
    type: 'warning',
    message: '请确认密码'
  })
  if(user.username.length < 6) {
    return ElMessage({
      type: 'error',
      message: '用户名不能少于6位'
    })
  }
  if(user.phone.length !== 11) {
    return ElMessage({
      type: 'error',
      message: '请输入正确的11位手机号'
    })
  }
  if(user.password.length < 6) {
    return ElMessage({
      type: 'error',
      message: '密码不能少于6位'
    })
  }
  if(user.password !== user.confirmPassword) {
    return ElMessage({
      type: 'error',
      message: '两次密码输入不一致'
    })
  }
  request.post('/user/register', {
    username: user.username,
    phone: user.phone,
    password: user.password,
  }).then(res=> {
    if(res.data.status === 1) {
      return ElMessage({
        type: 'warning',
        message: res.data.message
      })
    }else {
      return ElMessage({
        type: 'success',
        message: res.data.message
      })
    }
  })
}

</script>

<template>
    <form v-on:submit.prevent id="register-form">
        <div class="input-item">
            <input type="text" placeholder="请输入用户名" v-model="userInfo.username" autofocus>
        </div>
        <div class="input-item">
            <input type="phone" placeholder="请输入手机号" v-model="userInfo.phone">
        </div>
        <div class="input-item">
            <input type="password" placeholder="请输入密码" v-model="userInfo.password">
        </div>
        <div class="input-item">
            <input type="password" placeholder="请确认密码" v-model="userInfo.confirmPassword">
        </div>
        <div class="input-item">
            <button @click="registerSubmit" @keyup.enter="registerSubmit">点击注册</button>
        </div>
    </form>
</template>

<style scoped>
#register-form {
    /* background-color: #fff; */
    margin: 0 auto;
    padding-top: 2rem;
    .input-item {
        margin-top: 1rem;
        /* transform: translateX(-1rem); */
        text-align: center;
        input {
            width: 12rem;
            height: 2rem;
            padding-left: 1rem;
            border: 1px solid #ddd;
            outline: none;
            border-radius: 5px;
            background-color: #ddd;
        };
        button {
            background-color: transparent;
            width: 5rem;
            height: 3rem;
            border: none;
            border-radius: 5px;
            &:hover {
                cursor: pointer;
                background-color: #fff;
                transition: all ease-in 0.5s;
            }
        }
    }
    .input-item:last-child {
        margin-top: 3rem;
    }
}
</style>