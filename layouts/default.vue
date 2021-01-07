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
        <span> 欢迎，{{ userData.nickname }} </span>
        <span class="zhzw-header-proimage">
          <!-- <img src="../assets/images/profilephoto.png" alt="" /> -->
          <img :src="userData.imageUrl" alt="" />
        </span>
        <span
          ><i @click="signout" class="iconfont iconzhuxiaologout11"></i
        ></span>
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
        >
          <nuxt-link to="/manager">
            <el-menu-item index="1">
              <i class="el-icon-setting"></i>
              <span slot="title">主页</span>
            </el-menu-item>
          </nuxt-link>
          <el-submenu
            :index="index + 1"
            v-for="(item, index) in this.catelogList"
            :key="index"
          >
            <template slot="title">
              <i :class="item.iconName"></i>
              <span>{{ item.name }}</span>
            </template>
            <nuxt-link
              v-for="(item1, index1) in item.children"
              :key="index1"
              :to="item1.path"
            >
              <el-menu-item :index="index + 1 + '-' + index1">
                {{ item1.name }}
              </el-menu-item>
            </nuxt-link>
          </el-submenu>
          <!-- <nuxt-link to="/manager"> </nuxt-link> -->
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
  created() {
    this.initPage();
  },
  data() {
    return {
      userData: {},
      catelogList: [],
    };
  },
  methods: {
    initPage() {
      const userData = this.$Cookies.get('userData');
      const catelogList = this.$Cookies.get('catelog') || '{list:[]}';
      this.userData = JSON.parse(userData);
      this.catelogList = JSON.parse(catelogList).list.slice(1);
      console.log(this.catelogList, 'this.catelogList');
    },
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
