<template>
  <div class="profile-wrap">
    <el-container>
      <el-header>
        <div class="header">
          <h2
            style="margin-left: 15px"
          >我的信息 {{$store.state.username==null?'':$store.state.username}}</h2>
          <h3 style="float: right;margin-top: 0px" class="name"></h3>
        </div>
      </el-header>
      <el-main>
        <br />
        <br />
        <div class="box-card" v-if="$store.state.username==null" @click="toLogin">登录</div>
        <div class="box-card" v-if="$store.state.username==null" @click="toRegister">注册</div>
        <div class="box-card" v-if="$store.state.username!=null" @click="toMyinfo">个人信息</div>
        <div class="box-card" v-if="$store.state.username!=null" @click="toMyActivity">我的活动</div>
        <div class="box-card" v-if="$store.state.username!=null" @click="toMyFund">我的基金</div>
        <div class="box-card" @click="toFAQ">帮助反馈</div>
        <div class="box-card" @click="toAbout">关于灰雀</div>
        <div class="box-card" @click="toLogout" v-if="$store.state.username!=null">退出登录</div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import { Container, Header, Main } from "element-ui";
export default {
  name: "Profile",
  components: {
    [Container.name]: Container,
    [Header.name]: Header,
    [Main.name]: Main,
  },
  methods: {
    toLogin: function () {
      this.$router.push("/login");
    },
    toMyinfo: function () {
      this.$router.push("/profile/myinfo");
    },
    toMyActivity: function () {
      this.$router.push("/profile/myactivity");
    },
    toMyFund: function () {
      this.$router.push("/profile/myfund");
    },
    toFAQ: function () {
      this.$router.push("/FAQ");
    },
    toRegister: function () {
      this.$router.push("/register");
    },
    toAbout: function () {
      this.$router.push("/about");
    },
    toLogout: function () {
      this.$router.push("/logout");
    },
  },
};
</script>

<style scoped>
.profile-wrap {
  padding: 0px;
  height: 100%;
}
.header {
  position: relative;
  margin: 20px 40px;
  background: rgb(39, 77, 160);
  padding: 20px;
  box-sizing: border-box;
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
}
.header h2 {
  color: #e7eef6;
}

.box-card {
  width: 400px;
  height: 50px;
  line-height: 50px;
  border-collapse: collapse;
  text-align: center;
  margin: 15px auto;
  cursor: pointer;
  font-size: 15px;
  background: #fff;
  box-sizing: border-box;
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.3);
  border-radius: 25px;
  color: #39456b;
  font-weight: bold;
}
</style>
