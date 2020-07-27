<template>
  <div class="app">
    <activity-item
      v-for="item in activity"
      :key="item.activityid"
      :detail="item"
      :to="'/activity/'+item.activityid"
    ></activity-item>
  </div>
</template>

<script>
  import ActivitiesItems from './ActivitiesItems'
  export default {
    components: {
      "activity-item": ActivitiesItems
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

<style scoped>

</style>
