<template>
  <div class="nav-wrap">
    <div class="header">
      <el-image :src="require('@/assets/img/header.png')" fit="contain" style="height: 100%;"></el-image>
      <div class="line"></div>
    </div>
    <el-menu
      class="menu"
      :default-active="activeIndex"
      text-color="#fff"
      active-text-color="#fff"
      mode="horizontal"
    >
      <el-menu-item index="1" @click="toActivity">
        <span>主页-活动</span>
      </el-menu-item>
      <el-menu-item index="2" @click="toWish">
        <span>小小心愿单</span>
      </el-menu-item>
      <el-menu-item index="3" @click="toInfo">
        <span>信息查询</span>
      </el-menu-item>
      <el-menu-item index="4" @click="toProfile">
        <span>我的信息</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
import { Menu, MenuItem, Image } from "element-ui";
export default {
  components: {
    [Menu.name]: Menu,
    [MenuItem.name]: MenuItem,
    [Image.name]: Image,
  },
  data() {
    return {
      activeIndex: "1",
      flag: "1",
    };
  },
  methods: {
    toActivity() {
      this.$router.push("/activity");
      this.flag = "1";
    },
    toWish() {
      this.$router.push("/event/wishlist");
      this.flag = "2";
    },
    toInfo() {
      this.$router.push("/info");
      this.flag = "3";
    },
    toProfile() {
      this.$router.push("/profile");
      this.flag = "4";
    },
  },
};
</script>

<style lang="scss" scoped>
.nav-wrap {
  z-index: 1000;
  display: flex;
  height: 60px;
  width: 100%;
  margin: 0;
  background-color: #fff;
  .header {
    position: absolute;
    display: flex;
    top: 0;
    left: 0;
    height: 60px;
    width: 220px;
    .line {
      border-right: 1px solid #c4c4c4;
      margin: 10px;
    }
  }
  .menu {
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    background-color: unset;
    .el-menu-item {
      margin: 0 68px;
      padding: 0;
      span {
        background-color: rgb(255, 188, 53);
        padding: 8px 16px;
        border-radius: 10px;
        font-weight: bold;
      }
    }
    .el-menu-item.is-active {
      border-bottom-color: #409eff !important;
      border-bottom-width: 3px !important;
      span {
        background-color: rgb(0, 141, 184);
        color: #fff;
        padding: 8px 16px;
        border-radius: 10px;
        font-weight: bold;
      }
    }
  }
}
</style>
