<template>
  <div class="activity-panel-wrap">
    <el-tabs type="card" style="background-color: #e7eef6">
      <el-tab-pane label="报名中">
        <div v-if="activities.singingUp.length==0" class="empty">暂无活动</div>
        <activity-item
          class="activeItem"
          v-else
          v-for="item in activities.singingUp"
          :key="item.activityid"
          :detail="item"
          :to="'/activity/'+item.activityid"
        ></activity-item>
      </el-tab-pane>
      <el-tab-pane label="进行中">
        <div v-if="activities.processing.length==0" class="empty">暂无活动</div>
        <activity-item
          class="activeItem"
          v-else
          v-for="item in activities.processing"
          :key="item.activityid"
          :detail="item"
          :to="'/activity/'+item.activityid"
        ></activity-item>
      </el-tab-pane>
      <el-tab-pane label="已结束">
        <div v-if="activities.finished.length==0" class="empty">暂无活动</div>
        <activity-item
          class="activeItem"
          v-else
          v-for="item in activities.finished"
          :key="item.activityid"
          :detail="item"
          :href="item.essay_url"
        ></activity-item>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import api from "@/api";
import ActivitiesItems from "./ActivitiesItems";
import { Tabs, TabPane } from "element-ui";
export default {
  name: "ActivityPanel",
  components: {
    [Tabs.name]: Tabs,
    [TabPane.name]: TabPane,
    "activity-item": ActivitiesItems,
  },
  data: function () {
    return {
      activeTab: 0, //激活的标签页
      activities: { singingUp: [], processing: [], finished: [] }, //活动列表
    };
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
    api.Activity.getAllActivity()
      .then((data) => {
        this.activities.singingUp = data.filter((item) =>
          this.isSingingUp(item.deadline)
        );
        this.activities.processing = data.filter((item) =>
          this.isProcessing(item.starttime, item.endtime)
        );
        this.activities.finished = data.filter((item) =>
          this.isFinished(item.endtime)
        );
      })
      .catch((error) => {
        console.log(error);
      });

    // this.$ajax
    //   .get("activitymsg")
    //   .then((response) => {
    //     if (response.data.status == 200) {
    //       this.activities.singingUp = response.data.msg.filter((item) =>
    //         this.isSingingUp(item.deadline)
    //       );
    //       this.activities.processing = response.data.msg.filter((item) =>
    //         this.isProcessing(item.starttime, item.endtime)
    //       );
    //       this.activities.finished = response.data.msg.filter((item) =>
    //         this.isFinished(item.endtime)
    //       );
    //     }
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  },
};
</script>

<style  lang="scss" scoped>
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
.el-tabs ::v-deep {
  margin: 20px 0;
  background-color: unset !important;
  overflow: visible;
  .el-tabs__content {
    overflow: visible !important;
  }
  .el-tabs__header,
  .el-tabs__item,
  .el-tabs__nav {
    border: 0;
  }
  .el-tabs__header {
    margin: 10px;
  }
  .el-tab-pane {
    display: flex;
    flex-wrap: wrap;
  }
  .el-tabs__item {
    background-color: rgb(39, 77, 160);
    color: #fff;
    border-radius: 20px;
    margin-right: 10px;
    // box-shadow: 0 4px 4px 0 rgb(0, 0, 0, 0.25);
  }
  .el-tabs__item.is-active {
    background-color: #ffaa00;
  }
}
.empty {
  font-size: 24px;
  margin: 0 auto;
  padding: 20px;
  color: #fff;
}
</style>
