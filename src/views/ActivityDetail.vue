<template>
  <div class="activity-detail-wrap">
    <van-cell-group>
      <van-cell>
        <template #title>
          <h2>{{detail.name}}</h2>
        </template>
        <template #label>
          <van-image :src="detail.img"></van-image>
        </template>
      </van-cell>
      <van-cell title="活动地点" :label="detail.place" clickable center></van-cell>
      <van-cell title="开始时间" :label="detail.starttime" clickable center></van-cell>
      <van-cell title="结束时间" :label="detail.endtime" clickable center></van-cell>
      <van-cell title="报名截止" :label="detail.deadline" clickable center></van-cell>
      <van-cell title="活动详情" :label="detail.detail" clickable center></van-cell>
      <van-cell title="备注" :label="detail.remark" clickable center></van-cell>
    </van-cell-group>
    <div style="margin: 16px;" v-if="new Date(detail.deadline)>=new Date()">
      <van-button
        v-if="$store.state.joinedActivity.map(item => item.activityid).includes(detail.activityid)"
        round
        block
        type="info"
        @click="handleCancel"
      >取消报名</van-button>
      <van-button v-else round block type="info" @click="handleEnroll">报名</van-button>
    </div>
  </div>
</template>

<script>
import { Cell, CellGroup, Image, Button, Toast } from "vant";
export default {
  components: {
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [Image.name]: Image,
    [Button.name]: Button,
    [Toast.name]: Toast,
  },
  data() {
    return {
      detail: {},
    };
  },
  methods: {
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
            this.$toast.success(response.data.msg);
          } else this.$toast.fail(response.data.msg);
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
            this.$toast.success(response.data.msg);
          } else this.$toast.fail(response.data.msg);
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
};
</script>

<style>
</style>