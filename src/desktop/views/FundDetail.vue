<template>
  <div class="fund-detail-wrap">
    <div class="box-card">
      <div class="header" slot="header">
        <span class="name">{{detail.name}}</span>
        <el-button
          v-if="$store.state.storedFund.map(item => item.fundid).includes(detail.fundid)"
          type="info"
          @click="handleCancel"
        >取消收藏</el-button>
        <el-button v-else type="primary" @click="handleStore">收藏</el-button>
      </div>
      <div class="content">
        <div class="record_num" v-if="detail.record_num">
          <el-tag type="success">备案号</el-tag>
          <div>{{detail.record_num}}</div>
        </div>
        <div class="people" v-if="detail.people">
          <el-tag type="success">资助对象</el-tag>
          <div>{{detail.people}}</div>
        </div>
        <div class="mode" v-if="detail.mode">
          <el-tag type="success">资助方式</el-tag>
          <div>{{detail.mode}}</div>
        </div>
        <div class="process" v-if="detail.process_img||detail.process_text">
          <el-tag type="success">申请流程</el-tag>
          <div v-if="detail.process_img">
            <img :src="detail.process_img" />
          </div>
          <div v-if="detail.process_text">{{detail.process_text}}</div>
        </div>
        <div class="contact" v-if="detail.contact">
          <el-tag type="success">联系方式</el-tag>
          <div>{{detail.contact}}</div>
        </div>
        <div class="form" v-if="detail.form">
          <el-tag type="success">申请表</el-tag>
          <a :href="detail.form">{{detail.form}}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Button, Message, Tag } from "element-ui";
import api from "@/api";
export default {
  name: "FundDetail",
  components: {
    [Button.name]: Button,
    [Tag.name]: Tag,
    [Message.name]: Message,
  },
  data() {
    return {
      detail: {},
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
      if (this.$store.state.phone == null) {
        this.$message.error("请先登录");
        return;
      }
      api.Fund.storeFund(this.detail.fundid)
        .then((data) => {
          this.$store.commit("addStoredFund", this.detail);
          this.$message({
            message: data,
            type: "success",
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
            type: "success",
          });
        })
        .catch((error) => {
          this.$message.error(error.message);
          console.log(error);
        });
    },
    reload() {
      console.log(this.$route.params.fundid);
      api.Fund.getOneFund(this.$route.params.fundid)
        .then((data) => {
          this.detail = data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  created() {
    this.reload();
  },
  watch: {
    $route: {
      handler: function (to, from) {
        console.log(to);
        this.reload();
      },
      deep: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.box-card {
  padding: 20px;
  background: #fff;
  box-sizing: border-box;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  border-radius: 14px;
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 20px;
  .name {
    font-size: 28px;
    font-weight: bold;
  }
}
.content > * {
  padding-bottom: 20px;
  white-space: pre-wrap;
  display: flex;
}
.content .el-tag {
  margin-right: 16px;
}
.content .process div {
  width: 100%;
}
.content .process {
  flex-wrap: wrap;
}
.content .process img {
  display: block;
  margin: 10px auto;
  max-width: 100%;
}
</style>
