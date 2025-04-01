<script setup>
</script>

<template>
    <form v-on:submit.prevent id="login-form">
        <div class="input-item">
            <input type="text" placeholder="请输入手机号">
        </div>
        <div class="input-item">
            <input type="password" placeholder="请输入密码">
        </div>
        <div class="input-item">
            <button>点击登录</button>
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
    }
    .input-item:last-child {
        margin-top: 3rem;
    }
}
</style>