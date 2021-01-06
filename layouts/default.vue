<style lang="scss">
.zhzw-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #666;
  color: #fff;
  font-size: 32px;
}
.zhzw-header-tools {
  display: flex;
  align-items: center;
  font-size: 14px;
  & > span {
    cursor: pointer;
    margin-right: 15px;
  }
}
.zhzw-header-proimage {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  overflow: hidden;
  & > img {
    width: 100%;
    height: 100%;
  }
}
</style>
<template>
  <el-container>
    <el-header class="zhzw-header">
      <div>Nuxt</div>
      <div class="zhzw-header-tools">
        <span> 欢迎，鑫仔 </span>
        <span class="zhzw-header-proimage">
          <img src="../assets/images/profilephoto.png" alt="" />
        </span>
        <span><i @click="signout" class="iconfont iconzhuxiaologout11"></i></span>
      </div>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <el-menu
          default-active="1-4-1"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#666"
          text-color="#fff"
          active-text-color="#ffd04b"
          :collapse="isCollapse"
        >
          <nuxt-link to="/manager">
          <el-menu-item index="1">
            <i class="el-icon-setting"></i>
            <span slot="title">主页</span>
          </el-menu-item>
          </nuxt-link>
        </el-menu>
      </el-aside>
      <el-main><Nuxt /></el-main>
    </el-container>
  </el-container>
</template>

<script>
import Cookies from 'js-cookie';

export default {
  name: 'default',
  middleware: 'checkLogin',
  created() {},
  methods: {
    signout() {
      Cookies.remove('token');
      this.$router.push('/login');
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>
