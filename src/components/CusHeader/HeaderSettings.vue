<!-- TODO: 头像 hover 显示笔记数量、个人中心、退出登录 -->
 <script setup>
import { useRouter } from 'vue-router'

 import LogginStore from '@/stores/login';
 import { ElMessage, ElMessageBox } from 'element-plus';

 const route = useRouter()

 const logginStore = LogginStore()

let leaveAvatarMove = () => {
  logginStore.avatarMove = false
}

function logout() {
  ElMessageBox.confirm(
    '确定要退出登录吗?',
    {
      confirmButtonText: '确认',
      cancelButtonText: '取消',
      type: 'warning',
    }
  ).then(() => {
    ElMessage({
      type: 'success',
      message: '退出登录'
    })
    localStorage.removeItem('avatar')
    localStorage.removeItem('username')
    localStorage.removeItem('token')
    location.reload()
  })
}

 </script>
 
 <template>
  <div class="setting-contaier" @mouseleave="leaveAvatarMove">
    <div class="avatar-note">
      <a href="#">笔记数量<span>233</span></a>
    </div>
    <div class="my-userinfo">
      <a href="#">个人中心<span>管理</span> </a> 
    </div>
    <div class="logout" @click="logout">
      退出登录
    </div>
  </div>
 </template>
 
 <style scoped lang="less">
 .setting-contaier {
  position: absolute;
  transform: translate(-6rem, 3rem);
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  width: 10rem;
  height: 15rem;
  background-color:hsla(160, 100%, 37%, 1);
  border-radius: 5px;
  text-align: center;
  font-size: 14px;
  a {
    display: block;
    color: #000;
    &:hover {
      color: #fff;
    }
  }
  span {
    margin-top: -1.5rem;
    display: block;
    font-size: 10px; 
    color: #666; 
  }
  .avatar-note,
  .my-userinfo,
  logout {
   height: 2rem;
  }
  .logout{
    color: #ccc;
    &:hover {
      cursor: pointer;
      color: #000;
      transition: all ease-in-out 0.5s;
    }
  }
 }
 </style>