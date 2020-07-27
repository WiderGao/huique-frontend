<template>
  <div class="app" >
    <el-row style="width: 200%">
      <el-col :span="12">
        <el-card :body-style="{ padding: '0px' }" shadow="hover">
          <img :src="detail.img" class="image">
          <div style="padding: 14px;">
            <span>{{detail.name}}</span><br/>
            <span style="font-size: 13px">{{detail.place}}</span>
            <div class="bottom clearfix">
              <time class="time">{{ detail.deadline+'报名截止' }}</time>
              <el-button type="text" class="button" @click="onClick">查看详情</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    props: ["detail", "to", "href"],
    name: 'ActivitiesItems',
    methods: {
      onClick() {
        if (this.to) this.$router.push(this.to);
        if (this.href) window.open(this.href, "_blank");
      },
    },
  }
</script>

<style scoped>
  .time {
    font-size: 13px;
    color: #999;
  }

  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
    height:100%;
    background-repeat:no-repeat;
    background-size: 100% 100%;
    background-size: cover;
  }
  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both
  }

</style>
