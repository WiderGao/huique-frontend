<template>
  <div class="about-wrap">
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
import { Cell, CellGroup, Button } from "vant";

export default {
  components: {
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [Button.name]: Button,
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
    this.$ajax.get("/aboutus/huiquemsg").then((response) => {
      if (response.data.status == 200) {
        this.feature = response.data.msg[0].msg1;
        this.huique = response.data.msg[1].msg1;
      }
    });
    this.$ajax.get("/aboutus/authormsg").then((response) => {
      if (response.data.status == 200) {
        this.author = response.data.msg;
      }
    });
  },
};
</script>

<style>
</style>