<script setup>
import 'boxicons'

import HeaderSearch from '@/components/CusHeader/HeaderSearch.vue'
import HeaderNav from '@/components/CusHeader//HeaderNav.vue'
import HeaderUser from '@/components/CusHeader/HeaderUser.vue'
</script>

<template>
  <div class="header">
    <div class="wrapper">
      <div id="logo"><box-icon name='pen' type='solid' color='#57a671' ></box-icon></div>
      <a href="#" class="text-log">
        NoteApp
      </a>
      <div class="content">
        <div class="search">
          <HeaderSearch />
        </div>
        <nav>
          <HeaderNav />
        </nav>
        <div class="user">
          <HeaderUser />
        </div> 
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.header {
  // background-color: #fff;
  width: 100%;
  height: 3rem;
  border-bottom: 0.5px solid var(--vt-c-divider-dark-1);
  .wrapper {
    display: flex;
    justify-content: flex-start;
    // background-color: pink;
    height: inherit;
    line-height: 3rem;
    #logo {
        color: hsla(160, 100%, 37%, 1);
      }
    .text-log {
      display: flex;
      width: 100px;
      // vertical-align: baseline;
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
      nav {
        margin-right: 2rem;
      }
    }
  }
}
</style>