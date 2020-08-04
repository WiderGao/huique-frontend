<template>
  <div class="my-activity-wrap">
    <div v-if="activity.length==0" class="empty">你还没有报名活动哦~</div>
    <activity-item
      v-else
      v-for="item in activity"
      :key="item.activityid"
      :detail="item"
      :to="'/activity/'+item.activityid"
      class="activeItem"
    ></activity-item>
  </div>
</template>

<script>
import ActivityItem from "../components/ActivitiesItems.vue";
import api from "@/api";
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

<style scoped>
.empty {
  font-size: 24px;
  margin: 0 auto;
  padding: 20px;
  height: 500px;
  color: #fff;
}
@media (max-width: 992px) {
  .activeItem {
    width: calc(33.3% - 20px) !important;
    margin: 10px;
  }
}
.activeItem {
  width: calc(25% - 20px);
  margin: 10px;
}
</style>