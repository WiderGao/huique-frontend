<template>
  <div class="app">
    <div class="box-card">
      <div slot="header" class="clearfix">
        <span>{{detail.name}}</span>
        <el-button
          v-if="$store.state.storedFund.map(item => item.fundid).includes(detail.fundid)"
          style="float: right; padding: 3px 0"
          type="info"
        >收藏此基金</el-button>
        <el-button v-else  type="info" @click="handleStore">收藏</el-button>
      </div>
      <div class="from">
        <div class="detail">
          <el-tag type="success">备案号</el-tag>
          {{detail.record_num}}
        </div>
        <div class="detail">
          <el-tag type="success">资助对象</el-tag>
          {{detail.people}}
        </div>
        <div class="detail">
          <el-tag type="success">资助方式</el-tag>
          {{detail.mode}}
        </div>
        <div class="detail">
          <el-tag type="success">申请流程</el-tag><br/>
          <img :src="detail.process_img"/>
        </div>
        <div class="detail">
          <el-tag type="success">联系方式</el-tag>
          {{detail.contact}}
        </div>
        <div class="detail">
          <el-tag type="success">申请表</el-tag>
          {{detail.form}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import api from '../api'
  export default {
    name: 'FundDetail',
    data() {
      return {
        detail: {}
      };
    },
    computed: {
      stored() {
        return this.$store.state.storedFund
          .map((item) => item.fundid)
          .includes(this.detail.fundid);
      },
    },
    methods: {
      //收藏
      handleStore() {
        api.Fund.storeFund(this.detail.fundid)
          .then((data) => {
            this.$store.commit("addStoredFund", this.detail);
            this.$message({
              message: data,
              type: 'success'
            });
          })
          .catch((error) => {
            this.$message.error(error.message);
            console.log(error);
          });
      },
      //取消收藏
      handleCancel() {
        api.Fund.dropFund(this.detail.fundid)
          .then((data) => {
            this.$store.commit("removeStoredFund", this.detail.fundid);
            this.$message({
              message: data,
              type: 'success'
            });
          })
          .catch((error) => {
            this.$message.error(error.message);
            console.log(error);
          });
      },
      reload(){
        console.log(this.$route.params.fundid)
        api.Fund.getOneFund(this.$route.params.fundid)
          .then((data) => {
            this.detail = data;
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
    created() {
     this.reload();
    },
    watch:{
      $route:{
        handler:function (to,from) {
          console.log(to)
          this.reload();
        },
        deep:true,
      }
    },
  }

</script>

<style scoped>

  .box-card{
    background: rgb(231, 238, 246);
    box-sizing: border-box;
    box-shadow: 0 12px 20px rgba(0,0,0,0.5);
    border-radius: 10px;
  }
  .app{
    margin: 0px;
    padding: 0px;
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
