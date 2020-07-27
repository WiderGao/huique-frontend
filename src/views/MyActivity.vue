<template>
  <div class="my-activity-wrap">
    <van-empty v-if="activity.length==0" description="你还没有报名活动哦~"></van-empty>
    <activity-item
      v-else
      v-for="item in activity"
      :key="item.activityid"
      :detail="item"
      :to="'/activity/'+item.activityid"
    ></activity-item>
  </div>
</template>

<script>
import { Empty } from "vant";

import ActivityItem from "@/components/ActivityItem.vue";
import api from "../api";
export default {
  components: {
    [Empty.name]: Empty,
    "activity-item": ActivityItem,
  },
  data() {
    return {
      activity: [],
    };
  },
  created() {
    api.Activity.getJoinedActivity()
      .then((data) => {
        this.activity = data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style>
</style>