<template>
  <div class="activity-item-wrap">
    <el-card :body-style="{ padding: '0px' }">
      <el-image :src="detail.img" fit="cover" style="height:250px;width:100%;" />
      <div style="padding: 14px;">
        <span>{{detail.name}}</span>
        <br />
        <span style="font-size: 13px">{{detail.place}}</span>
        <div class="bottom clearfix">
          <time class="time">{{ detail.deadline+'报名截止' }}</time>
          <el-button type="text" class="button" @click="onClick">查看详情</el-button>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
import { Card, Button, Image } from "element-ui";
export default {
  props: ["detail", "to", "href"],
  name: "ActivitiesItems",
  components: {
    [Card.name]: Card,
    [Button.name]: Button,
    [Image.name]: Image,
  },
  methods: {
    onClick() {
      if (this.to) this.$router.push(this.to);
      if (this.href) window.open(this.href, "_blank");
    },
  },
};
</script>

<style lang="scss" scoped>
.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}
.el-card {
  border: 0;
  border-radius: 14px;
}
</style>
