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
    this.$ajax.get("/activitymsg/joinedactivity").then((response) => {
      if (response.data.status == 200) this.activity = response.data.msg;
    });
  },
};
</script>

<style>
</style>