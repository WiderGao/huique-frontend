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
      <van-button v-if="joined" round block type="info" @click="handleCancel">取消报名</van-button>
      <van-button v-else round block type="info" @click="handleEnroll">报名</van-button>
    </div>
  </div>
</template>

<script>
import { Cell, CellGroup, Image, Button, Toast } from "vant";
import api from "../api";

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
  computed: {
    joined() {
      return this.$store.state.joinedActivity
        .map((item) => item.activityid)
        .includes(this.detail.activityid);
    },
  },
  methods: {
    //报名
    handleEnroll() {
      api.Activity.joinActivity(this.detail.activityid)
        .then((data) => {
          this.$store.commit("addJoinedActivity", this.detail);
          this.$toast.success(data);
        })
        .catch((error) => {
          this.$toast.fail(error.message);
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

<style>
</style>