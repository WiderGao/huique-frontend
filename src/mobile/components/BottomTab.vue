<template>
  <div class="bottom-tab">
    <van-tabbar v-model="active">
      <van-tabbar-item
        v-for="item in menu"
        :key="item.name"
        :name="item.name"
        :url="item.url"
        :to="item.to"
        replace
      >
        <span>{{item.title}}</span>
        <template #icon="props">
          <v-icon :name="props.active ? item.icon.active : item.icon.inactive"></v-icon>
        </template>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import Vicon from "vue-awesome/components/Icon";
import "vue-awesome/icons/home";
import "vue-awesome/icons/gift";
import "vue-awesome/icons/search";
import "vue-awesome/icons/user";
import "vue-awesome/icons/regular/user";
import "vue-awesome/icons/gamepad";

import { Tabbar, TabbarItem, Icon } from "vant";

export default {
  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem,
    [Icon.name]: Icon,
    "v-icon": Vicon,
  },
  data() {
    return {
      active: "",
      menu: [
        {
          name: "Activity",
          title: "活动",
          icon: {
            active: "home",
            inactive: "home",
          },
          to: "/activity",
        },
        {
          name: "WishList",
          title: "心愿单",
          icon: {
            active: "gift",
            inactive: "gift",
          },
          to: "/event/wishlist",
        },
        {
          name: "Info",
          title: "查询",
          icon: {
            active: "search",
            inactive: "search",
          },
          to: "/info",
        },
        {
          name: "Profile",
          title: "我的",
          icon: {
            active: "user",
            inactive: "regular/user",
          },
          to: "/profile",
        },
        {
          name: "WisyList",
          title: "雀语H5",
          icon: {
            active: "gamepad",
            inactive: "gamepad",
          },
          url: "https://static.wider.ink/queyu/",
        },
      ],
    };
  },
};
</script>

<style scoped>
.van-tabbar {
  height: 60px;
}
</style>