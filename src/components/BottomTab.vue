<template>
  <div class="bottom-tab">
    <van-tabbar route>
      <van-tabbar-item replace to="/home">
        <span>活动</span>
        <template #icon="props">
          <v-icon :name="props.active ? 'home':'home'"></v-icon>
        </template>
      </van-tabbar-item>
      <van-tabbar-item replace to="/info" icon="search">
        <span>查询</span>
        <template #icon="props">
          <v-icon :name="props.active ? 'search':'search'"></v-icon>
        </template>
      </van-tabbar-item>
      <van-tabbar-item replace to="/profile" icon="user-o">
        <span>我的</span>
        <template #icon="props">
          <v-icon :name="props.active ? 'user':'regular/user'"></v-icon>
        </template>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import Vicon from "vue-awesome/components/Icon";

import { Tabbar, TabbarItem, Icon } from "vant";

export default {
  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem,
    [Icon.name]: Icon,
    "v-icon": Vicon,
  },
};
</script>

<style scoped>
.van-tabbar {
  height: 60px;
}
</style>