<template>
  <div class="about-wrap">
    <van-image :src="require('@/assets/img/header.png')" style="padding-top: 20px"></van-image>
    <van-cell-group>
      <van-cell title="功能简介" :label="feature"></van-cell>
      <van-cell title="灰雀简介" :label="huique"></van-cell>
      <van-cell title="作者">
        <template #label>
          <div v-for="item in author" :key="item.authorid">姓名：{{item.name}} 微信号：{{item.wxnumber}}</div>
        </template>
      </van-cell>
    </van-cell-group>
  </div>
</template>

<script>
import { Cell, CellGroup, Button, Image } from "vant";
import api from "../api";
export default {
  components: {
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [Button.name]: Button,
    [Image.name]: Image,
  },
  data() {
    return {
      feature: "",
      huique: "",
      author: [],
    };
  },
  methods: {
    handleFeedback() {},
  },
  created() {
    api.Common.getAppInfo()
      .then((data) => {
        this.feature = data[0].msg1;
        this.huique = data[1].msg1;
      })
      .catch((error) => {
        console.log(error);
      });
    api.Common.getAuthor()
      .then((data) => {
        this.author = data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style>
</style>