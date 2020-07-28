<template>
  <div class="app">
  <el-tabs type="border-card" style="background-color: #e7eef6">
    <el-tab-pane label="报名中">
      <div v-if="activities.singingUp.length==0" v-html="'<h3>暂无活动</h3>'"></div>
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
      <div v-if="activities.processing.length==0" v-html="'<h3>暂无活动</h3>'"></div>
      <activity-item class="activeItem"
        v-else
        v-for="item in activities.processing"
        :key="item.activityid"
        :detail="item"
         :to="'/activity/'+item.activityid"
      ></activity-item>
    </el-tab-pane>
    <el-tab-pane label="已结束"  >
      <div v-if="activities.finished.length==0" v-html="'<h3>暂无活动</h3>'"></div>
      <activity-item class="activeItem"
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
  import api from '@/api'
  import ActivitiesItems from './ActivitiesItems'
  export default {
    name: 'ActivityPanel',
    data:function () {
      return {
        activeTab: 0, //激活的标签页
        activities: { singingUp: [], processing: [], finished: [] } //活动列表
      }

    },
    components:{
      "activity-item": ActivitiesItems,
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
      }
    },
    mounted() {
      api.Activity.getAllActivity()
        .then((data)=>{
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
        .catch((error)=>{
          console.log(error);
        })

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
    }
  }
</script>

<style scoped>
  .activeItem{
    width: 100%;
    height: auto;
    float: left;

  }
  >>>.el-tabs--border-card{
    border-top-left-radius: 13px;
    border-top-right-radius: 13px;
    box-sizing: border-box;
    box-shadow: 3px 3px rgba(0,0,0,0.3);
  }
  >>>.el-tabs--border-card>.el-tabs__header{
    background-color:#274da0;
    border-top-left-radius: 13px;
    border-top-right-radius: 13px;
  }
  >>>.el-tabs--border-card>.el-tabs__header .el-tabs__item {
    color: #fff;
    margin-top: 8px;
    height: 35px;
  }
  >>>.el-tabs--border-card>.el-tabs__header .el-tabs__item.is-active{
    background-color: #e7eef6;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    height: 35px;
  }
  >>>.el-tabs__item{
    line-height: 30px;
  }

</style>
