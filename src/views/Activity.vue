<template>
  <div id="activity-wrap">
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(image, index) in swipeImg" :key="index">
        <van-image :src="image" fit="cover" height="250"></van-image>
      </van-swipe-item>
    </van-swipe>
    <van-tabs v-model="activeTab" sticky animated swipeable>
      <van-tab title="报名中">
        <van-empty v-if="activities.singingUp.length==0" description="暂无活动"></van-empty>
        <activity-item
          v-else
          v-for="item in activities.singingUp"
          :key="item.activityid"
          :detail="item"
          :to="'/activity/'+item.activityid"
        ></activity-item>
      </van-tab>
      <van-tab title="进行中">
        <van-empty v-if="activities.processing.length==0" description="暂无活动"></van-empty>
        <activity-item
          v-else
          v-for="item in activities.processing"
          :key="item.activityid"
          :detail="item"
          :to="'/activity/'+item.activityid"
        ></activity-item>
      </van-tab>
      <van-tab title="已结束">
        <van-empty v-if="activities.finished.length==0" description="暂无活动"></van-empty>
        <activity-item
          v-else
          v-for="item in activities.finished"
          :key="item.activityid"
          :detail="item"
          :href="item.essay_url"
        ></activity-item>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import { Swipe, SwipeItem, Image, Tab, Tabs, Empty } from "vant";
import ActivityItem from "@/components/ActivityItem.vue";
export default {
  data() {
    return {
      swipeImg: [], //轮播图片
      activeTab: 0, //激活的标签页
      activities: { singingUp: [], processing: [], finished: [] }, //活动列表
    };
  },
  components: {
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [Image.name]: Image,
    [Tab.name]: Tab,
    [Tabs.name]: Tabs,
    [Empty.name]: Empty,
    "activity-item": ActivityItem,
  },
  methods: {
    isSingingUp(deadline) {
      let now = new Date(),
        dist = new Date(deadline);
      return now <= dist;
    },
    isProcessing(starttime, endtime) {
      let start = new Date(starttime),
        end = new Date(endtime),
        now = new Date();
      return now > start && now <= end;
    },
    isFinished(endtime) {
      let end = new Date(endtime),
        now = new Date();
      return now > end;
    },
  },
  mounted() {
    //获取轮播图片
    this.$ajax
      .get("utils/generate_carousel_figure_url")
      .then((response) => {
        this.swipeImg = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
    this.$ajax
      .get("activitymsg")
      .then((response) => {
        if (response.data.status == 200) {
          this.activities.singingUp = response.data.msg.filter((item) =>
            this.isSingingUp(item.deadline)
          );
          this.activities.processing = response.data.msg.filter((item) =>
            this.isProcessing(item.starttime, item.endtime)
          );
          this.activities.finished = response.data.msg.filter((item) =>
            this.isFinished(item.endtime)
          );
        }
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style scoped>
</style>