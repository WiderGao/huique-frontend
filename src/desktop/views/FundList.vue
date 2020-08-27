<template>
  <div class="fund-list-wrap">
    <el-container>
      <el-aside class="fundlist" width="320px">
        <div class="dieasename">
          <p style="font-size: 23px">{{dieasename}}</p>
          <p style="color:#959394;">的有关基金组织</p>
        </div>
        <div
          v-for="item in fundList"
          :class="['box-card',flag==item.fundid?'active':'']"
          :key="item.fundid"
          @click="[changeActive(item.fundid),toDetail(item.fundid)]"
        >{{item.name}}</div>
      </el-aside>
      <el-main class="funddetail" v-if="$route.params.fundid!=undefined">
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import api from "@/api";
import { Container, Main, Aside, Footer, Row, Col } from "element-ui";
export default {
  name: "FundList",
  components: {
    [Container.name]: Container,
    [Main.name]: Main,
    [Aside.name]: Aside,
    [Footer.name]: Footer,
    [Row.name]: Row,
    [Col.name]: Col,
  },
  data() {
    return {
      fundList: [],
      dieasename: "",
      flag: "",
    };
  },
  methods: {
    getDiease: function () {
      var arr = this.$route.params.disease;
      this.dieasename = arr;
    },
    changeActive: function (fundid) {
      this.flag = fundid;
    },
    toDetail: function (fundid) {
      this.$router.push("/fund/" + this.dieasename + "/" + fundid);
    },
  },
  created() {
    // this.$ajax.get("fundtypemsg/fundmsg", {
    //   params: {
    //     name: this.$route.params.disease,
    //   },
    // });
    this.getDiease();
    api.Fund.getClassifiedFund(this.$route.params.disease)
      .then((data) => {
        this.fundList = data;
        this.changeActive(this.$route.params.fundid);
        console.log(this.flag);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style scoped>
.fundlist {
  margin: 0 auto;
  padding: 10px;
  overflow: visible;
}
.funddetail {
  padding: 10px;
  overflow: visible;
  width: calc(100% - 360px);
}
.dieasename {
  margin: 50px auto;
  max-width: 240px;
  background: rgba(255, 255, 255, 1);
  padding: 20px;
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.3);
  border-radius: 30px;
  text-align: center;
  line-height: 35px;
  font-weight: bold;
}

.box-card {
  min-height: 50px;
  line-height: 50px;
  border-collapse: collapse;
  text-align: center;
  margin: 15px auto;
  padding: 0 15px;
  cursor: pointer;
  font-size: 15px;
  background: #fff;
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.3);
  border-radius: 25px;
  color: #39456b;
  font-weight: bold;
}
.active {
  background-color: #409eff;
  color: #fff;
}
</style>

