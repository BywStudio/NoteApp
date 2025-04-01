<script setup>
import { ref, onMounted} from 'vue'

import LogginStore from '@/stores/login'
import request from '@/requests'
import { ElMessage } from 'element-plus'

const logginStore = LogginStore()

const userInfo = ref({
    phone: '',
    password: ''
})

function loginSubmit() {
    let { value: user } = userInfo
    if(!user.phone) return ElMessage({
        type: 'warning',
        message: '手机号不能为空'
    })
    if(user.phone.length !== 11) {
        return ElMessage({
        type: 'error',
        message: '请输入正确的11位手机号'
        })
    }
    if(!user.password) return ElMessage({
        type: 'warning',
        message: '密码不能为空'
    })
    if(user.password.length < 6) {
        return ElMessage({
        type: 'error',
        message: '密码不能少于6位'
        })
    }
    request.post('/user/login', {
        phone: user.phone,
        password: user.password
    }).then(res => {
        console.log(res.data)
        if(res.data.status === 0){
            return (
                ElMessage({
                    type: 'success',
                    message: res.data.message
                }),
                localStorage.setItem('token', res.data.token)         
            )
        }else {
            return ElMessage({
                type: 'warning',
                message: res.data.message
            })
        }
    })
}
</script>

<template>
    <form v-on:submit.prevent id="login-form">
        <div class="input-item">
            <input type="text" autofocus placeholder="请输入手机号" v-model="userInfo.phone" >
        </div>
        <div class="input-item">
            <input type="password" placeholder="请输入密码" v-model="userInfo.password">
        </div>
        <div class="input-item">
            <button @click="loginSubmit">点击登录</button>
        </div>
        <div class="input-item">
            <button @click="logginStore.showLogin = true" @keyup.enter="loginSubmit" class="close">x</button>
        </div>
    </form>
</template>

<style scoped>
#login-form {
    /* background-color: #fff; */
    margin: 0 auto;
    padding-top: 2rem;
    .input-item {
        margin-top: 2rem;
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
        .close {
            font-size: 18px;
            width: 2rem;
            height: 2rem;
            border-radius: 50% 50%;
        }
    }
    .input-item:last-child {
        margin-top: 3rem;
    }
}
</style>