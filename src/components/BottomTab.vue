<template>
  <van-tabbar route>
    <van-tabbar-item replace to="/home" icon="wap-home-o">活动</van-tabbar-item>
    <van-tabbar-item replace to="/info" icon="search">信息查询</van-tabbar-item>
    <van-tabbar-item replace to="/profile" icon="user-o">我</van-tabbar-item>
  </van-tabbar>
</template>

<script>
import { Tabbar, TabbarItem, Icon } from "vant";

export default {
  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem,
    [Icon.name]: Icon
  }
};
</script>

<style scoped>
.van-tabbar {
  height: 60px;
}
</style>