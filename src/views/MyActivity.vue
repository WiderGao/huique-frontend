<template>
  <div class="my-activity-wrap">
    <activity-item
      v-for="item in activity"
      :key="item.activityid"
      :detail="item"
      :to="'/activity/'+item.activityid"
    ></activity-item>
  </div>
</template>

<script>
import ActivityItem from "@/components/ActivityItem.vue";
import api from "../api";
export default {
  components: {
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