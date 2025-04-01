<script setup>
import 'boxicons'

import HeaderSearch from '@/components/CusHeader/HeaderSearch.vue'
import HeaderUser from '@/components/CusHeader/HeaderUser.vue'
import Login from '@/components/Login/index.vue'

let isLoggin = false
</script>

<template>
  <div class="header">
    <div class="wrapper">
      <div id="logo"><box-icon name='pen' type='solid' color='#00bd7e' ></box-icon></div>
      <a href="#" class="text-log">
        NoteApp
      </a>
      <div class="content">
        <div class="search">
          <HeaderSearch />
        </div>
        <div class="user">
          <HeaderUser :isLoggin="isLoggin"/>
        </div> 
      </div>
    </div>
  </div>
  <Login />
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