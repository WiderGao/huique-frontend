<template>
  <div class="activity-detail-wrap">
    <el-page-header @back="goBack" content="活动详情"></el-page-header>
    <div class="box-card">
      <div class="name">{{detail.name}}</div>
      <div class="image">
        <el-image class="image" :src="detail.img" fit="cover" />
      </div>
      <div class="content">
        <div class="place">
          <el-tag type="success">活动地点</el-tag>
          <div>{{detail.place}}</div>
        </div>
        <div class="starttime">
          <el-tag type="success">开始时间</el-tag>
          <div>{{detail.starttime}}</div>
        </div>
        <div class="endtime">
          <el-tag type="success">结束时间</el-tag>
          <div>{{detail.endtime}}</div>
        </div>
        <div class="deadline">
          <el-tag type="success">报名截止</el-tag>
          <div>{{detail.deadline}}</div>
        </div>
        <div class="detail">
          <el-tag type="success">活动详情</el-tag>
          <div>{{detail.detail}}</div>
        </div>
        <div class="remark">
          <el-tag type="success">备注</el-tag>
          <div>{{detail.remark}}</div>
        </div>
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
import { PageHeader, Tag, Button, Image } from "element-ui";
export default {
  name: "ActivitiyDetail",
  components: {
    [PageHeader.name]: PageHeader,
    [Tag.name]: Tag,
    [Button.name]: Button,
    [Image.name]: Image,
  },
  data() {
    return {
      detail: {},
    };
  },
  methods: {
    goBack() {
      this.$router.push("/activity");
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
  background: #fff;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  border-radius: 14px;
  padding: 20px;
  max-width: 800px;
  margin: 20px auto;
}
.el-page-header {
  max-width: 800px;
  margin: 0 auto;
}
.content > * {
  padding-bottom: 20px;
  white-space: pre-wrap;
  display: flex;
}
.content .el-tag {
  margin-right: 16px;
}
.name {
  font-size: 28px;
  font-weight: bold;
  text-align: center;
}
.image .el-image {
  width: 100%;
  height: 400px;
  margin: 20px 0;
  border-radius: 10px;
}
</style>
