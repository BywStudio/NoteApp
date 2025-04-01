<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import LogginStore from '@/stores/login'
import request from '@/requests'

import HeaderSearch from '@/components/CusHeader/HeaderSearch.vue'
import HeaderUser from '@/components/CusHeader/HeaderUser.vue'
import Login from '@/components/Login/index.vue'
import { ElMessage } from 'element-plus'

const router = useRouter()

const logginStore = LogginStore()

let token = localStorage.getItem('token')

onMounted(() => {
  request.get('/my/userinfo', {
    headers: {
      Authorization: token
    }
  }).then(res => {
    // console.log(res.data)
    if(res.data.status === 1) {
      logginStore.showLogin = false
      return ElMessage({
        type: 'error',
        message: '登录后查看笔记'
      })
    }
    if(res.data.status === 0) {
      logginStore.isLoggin = true
      localStorage.setItem('avatar', res.data.data.avatar)
    }
  })
})
</script>

<template>
  <div class="header">
    <div class="wrapper">
      <div id="logo"><box-icon name='pen' type='solid' color='#00bb7d' ></box-icon></div>
      <a href="#" class="text-log">
        NoteApp
      </a>
      <div class="content">
        <div class="search">
          <HeaderSearch />
        </div>
        <div class="user">
          <HeaderUser />
        </div> 
      </div>
    </div>
  </div>
  <Login v-show="!logginStore.showLogin" />
</template>

<style scoped lang="less">
.header {
  width: 100%;
  height: 3rem;
  border-bottom: 0.5px solid var(--vt-c-divider-dark-1);
  .wrapper {
    display: flex;
    justify-content: flex-start;
    height: inherit;
    line-height: 3rem;
    .text-log {
      display: flex;
      width: 100px;
      &:hover {
        color: #fff;
      }
    }
    .content {
      flex-grow: 1;
      display: flex;
      justify-content: flex-end;
      .search {
        flex-grow: 1;
        align-self: center;  
        place-items: center;
        line-height: 2rem;
      }
    }
  }
}
</style>