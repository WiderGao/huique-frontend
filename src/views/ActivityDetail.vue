<template>
    <div class="app">
      <el-page-header @back="goBack" content="活动详情"></el-page-header>
      <div class="box-card">
        <div class="detail">
          <el-tag type="success">{{detail.name}}</el-tag><br/>
          <img :src="detail.process_img"/>
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
          <el-button v-else round block type="info" @click="handleEnroll">报名</el-button>
        </div>
      </div>
    </div>
</template>

<script>
  import api from '../api'
  export default {
    name: 'ActivitiyDetail',
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
        this.$ajax
          .get("/activitymsg/joinactivity", {
            params: {
              activityid: this.detail.activityid,
            },
          })
          .then((response) => {
            if (response.data.status == 200) {
              this.$store.commit("addJoinedActivity", this.detail);
              this.$message({
                message: '报名成功',
                type: 'success'
              });
            } else this.$message.error(response.data.msg);
          });
      },
      //取消报名
      handleCancel() {
        this.$ajax
          .get("/activitymsg/cancelactivity", {
            params: {
              activityid: this.detail.activityid,
            },
          })
          .then((response) => {
            if (response.data.status == 200) {
              this.$store.commit("removeJoinedActivity", this.detail.activityid);
              this.$message({
                message: response.data.msg,
                type: 'success'
              });
            } else this.$message.error(response.data.msg);
          });
      },
    },
    created() {
      this.$ajax
        .get("activitymsg", {
          params: {
            activityid: this.$route.params.activityid,
          },
        })
        .then((response) => {
          if (response.data.status == 200) this.detail = response.data.msg;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  }
</script>
<style scoped>

  .box-card{
    background: rgb(231, 238, 246);
    box-sizing: border-box;
    box-shadow: 0 12px 20px rgba(0,0,0,0.5);
    border-radius: 10px;
  }
</style>
