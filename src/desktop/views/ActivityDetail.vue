<template>
  <div class="app">
    <el-page-header @back="goBack" content="活动详情"></el-page-header>
    <div class="box-card">
      <div class="detail">
        <el-tag type="success">{{detail.name}}</el-tag>
        <br />
        <img :src="detail.process_img" />
      </div>
      <div class="detail">
        <el-tag type="success">活动地点</el-tag>
        {{detail.place}}
      </div>
      <div class="detail">
        <el-tag type="success">开始时间</el-tag>
        {{detail.starttime}}
      </div>
      <div class="detail">
        <el-tag type="success">结束时间</el-tag>
        {{detail.endtime}}
      </div>
      <div class="detail">
        <el-tag type="success">报名截止</el-tag>
        {{detail.deadline}}
      </div>
      <div class="detail">
        <el-tag type="success">活动详情</el-tag>
        {{detail.detail}}
      </div>
      <div class="detail">
        <el-tag type="success">备注</el-tag>
        {{detail.remark}}
      </div>
      <div style="margin: 16px;" v-if="new Date(detail.deadline)>=new Date()">
        <el-button
          v-if="$store.state.joinedActivity.map(item => item.activityid).includes(detail.activityid)"
          round
          block
          type="info"
          @click="handleCancel"
        >取消报名</el-button>
        <el-button v-else round block type="primary" @click="handleEnroll">报名</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import api from "@/api";
import { PageHeader, Tag, Button } from "element-ui";
export default {
  name: "ActivitiyDetail",
  components: {
    [PageHeader.name]: PageHeader,
    [Tag.name]: Tag,
    [Button.name]: Button,
  },
  data() {
    return {
      detail: {},
    };
  },
  methods: {
    goBack() {
      this.$router.push("/home");
    },
    //报名
    handleEnroll() {
      api.Activity.joinActivity(this.detail.activityid)
        .then((data) => {
          this.$store.commit("addJoinedActivity", this.detail);
          this.$message({
            message: data,
            type: "success",
          });
        })
        .catch((error) => {
          this.$message.error(error.message);
          console.log(error);
        });
    },
    //取消报名
    handleCancel() {
      api.Activity.exitActivity(this.detail.activityid)
        .then((data) => {
          this.$store.commit("removeJoinedActivity", this.detail.activityid);
          this.$toast.success(data);
        })
        .catch((error) => {
          this.$toast.fail(error.message);
          console.log(error);
        });
    },
  },
  created() {
    api.Activity.getOneActivity(this.$route.params.activityid)
      .then((data) => {
        this.detail = data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>
<style scoped>
.box-card {
  background: rgb(231, 238, 246);
  box-sizing: border-box;
  box-shadow: 0 12px 20px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
}
</style>
