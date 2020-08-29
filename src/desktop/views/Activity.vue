div<template>
  <div class="activity">
    <Speaker></Speaker>

    <el-row :gutter="10">
      <el-col :span="17">
        <div class="left-content">
          <Carousel></Carousel>
        </div>
      </el-col>
      <el-col :span="7">
        <div class="right-content">
          <div class="login-shortcut shortcut" @click="toLogin" v-if="$store.state.username==null">
            <img src="@/assets/img/login.jpg" alt />
          </div>
          <div class="help1-shortcut shortcut" @click="toApplyHelp">
            <img src="@/assets/img/help1.jpg" alt />
          </div>
          <div class="help2-shortcut shortcut" @click="toRaiseHelp">
            <img src="@/assets/img/help2.jpg" alt />
          </div>
          <div class="wishlist-shortcut shortcut" @click="toWishList">
            <img src="@/assets/img/wishlist.jpg" alt />
          </div>
        </div>
      </el-col>
    </el-row>

    <el-row>
      <el-col>
        <ActivityPanel></ActivityPanel>
      </el-col>
    </el-row>
    <!-- 
    <el-container style="color: #5a78b8">
      <el-aside style="width: 80%;margin: 0px;padding: 0px;font-weight: bold">
        <hr style="margin-top: 10px;margin-left: 10px" noshade="true" size="1px" />
      </el-aside>灰雀----迷途的家庭与世界的全部
    </el-container>
    <el-container>
      <el-main>
        <div class="box-card">
          <el-container>
            <el-main>
              <Carousel />
            </el-main>
            <el-footer>
              <Speaker />
            </el-footer>
            <div>
              <div class="box-card1" @click="toApplyHelp">帮助申请基金</div>
              <div class="box-card1" @click="toRaiseHelp">代写轻松筹/水滴筹</div>
            </div>
            <Megtable class="table" />
          </el-container>
        </div>
      </el-main>
      <el-aside width="34%">
        <el-container>
          <el-main>
            <ActivityPanel />
          </el-main>
        </el-container>
      </el-aside>
    </el-container>-->
  </div>
</template>

<script>
// @ is an alias to /src
import Carousel from "../components/Carousel";
// import Megtable from "../components/Megtable";
import Speaker from "../components/Speaker";
import ActivityPanel from "../components/ActivityPanel";
import { Row, Col, Button } from "element-ui";
export default {
  name: "Activity",
  methods: {
    toApplyHelp() {
      this.$router.push("/apply-help");
    },
    toRaiseHelp() {
      this.$router.push("/raise-help");
    },
    toLogin() {
      this.$router.push("/login");
    },
    toRegister() {
      this.$router.push("/register");
    },
    toMyActivity() {
      this.$router.push("/profile/myactivity");
    },
    toMyFund() {
      this.$router.push("/profile/myfund");
    },
    toWishList() {
      this.$router.push("/event/wishlist");
    },
  },
  components: {
    ActivityPanel,
    Carousel,
    // Megtable,
    Speaker,
    [Row.name]: Row,
    [Col.name]: Col,
    [Button.name]: Button,
  },
};
</script>
<style lang="scss" scoped>
.right-content {
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  height: 400px;
  .shortcut {
    display: block;
    cursor: pointer;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    flex: 1;
    margin-bottom: 10px;
    margin-right: 10px;
    border-radius: 16px;
    overflow: hidden;
    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
    &:last-child {
      margin-bottom: 0;
    }
  }
  // .shortcut {
  //   margin: 0 10px;
  //   background-color: #fff;
  //   height: 400px;
  //   border-radius: 10px;
  //   box-shadow: 0 4px 4px 0 rgb(0, 0, 0, 0.25);
  //   .title {
  //     padding: 15px 20px;
  //     border-bottom: 1px solid #e1e1e1;
  //   }
  //   .content {
  //     padding: 10px 20px;
  //     ::v-deep {
  //       .el-button {
  //         color: #fff;
  //         margin: 5px 0;
  //         width: 100%;
  //         height: 40px;
  //         border-radius: 20px;
  //         box-shadow: 0px 2px 3px 0px rgba(0, 0, 0, 0.25);
  //         background-color: rgb(47, 134, 249) !important;
  //         border: 0 !important;
  //       }
  //     }
  //   }
  // }
}
/* .table {
  margin: 20px;
}
.activity {
  padding: 0px;
}
.box-card {
  margin: 0px;
  padding: 20px;
  background: rgb(231, 238, 246);
  box-sizing: border-box;
  box-shadow: 0 12px 20px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
}
.box-card1 {
  width: 44%;
  float: left;
  height: 50px;
  border-collapse: collapse;
  text-align: center;
  line-height: 45px;
  margin: 6px 20px;
  font-size: 20px;
  background: rgb(39, 77, 160);
  box-sizing: border-box;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);
  border-radius: 25px;
  color: #e7eef6;
  font-weight: bold;
} */
</style>
