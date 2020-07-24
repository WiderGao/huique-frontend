<template>
  <div class="top-nav">
    <van-nav-bar
      :title="$route.meta.title"
      fixed
      @click-left="pageBack"
      @click-right="showSharePanel"
    >
      <template #left v-if="$route.name!='Home'&&$route.name!='Info'&&$route.name!='Profile'">
        <v-icon name="chevron-left" color="#1989fa" scale="1.25"></v-icon>
        <div></div>
      </template>
      <template #right>
        <v-icon name="share-alt" color="#1989fa" scale="1.15"></v-icon>
      </template>
    </van-nav-bar>
    <van-share-sheet v-model="showShare" :options="options" title="立即分享给好友"></van-share-sheet>
  </div>
</template>

<script>
import Vicon from "vue-awesome/components/Icon";
import { NavBar, Icon, ShareSheet } from "vant";
export default {
  components: {
    [NavBar.name]: NavBar,
    [Icon.name]: Icon,
    [ShareSheet.name]: ShareSheet,
    "v-icon": Vicon,
  },
  data() {
    return {
      showShare: false,
      options: [
        [
          { name: "微信", icon: "wechat" },
          { name: "微博", icon: "weibo" },
          { name: "QQ", icon: "qq" },
        ],
        [
          { name: "复制链接", icon: "link" },
          { name: "分享海报", icon: "poster" },
          { name: "二维码", icon: "qrcode" },
        ],
      ],
    };
  },
  methods: {
    pageBack() {
      this.$router.go(-1);
    },
    showSharePanel() {
      this.showShare = true;
    },
  },
};
</script>

<style>
</style>