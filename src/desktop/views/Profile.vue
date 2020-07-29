<template>
  <div class="app">
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
        <div class="box-card" v-if="$store.state.username==null" @click="toLogin">登录</div>
        <div class="box-card" v-if="$store.state.username==null" @click="toRegister">注册</div>
        <div class="box-card" @click="toMyinfo">个人信息</div>
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
.header {
  margin: 0px;
  background: rgba(64, 224, 205, 0.8);
  padding: 20px;
  box-sizing: border-box;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
}
.header h2 {
  color: #fff;
}

.box-card {
  width: 40%;
  float: left;
  height: 50px;
  border-collapse: collapse;
  text-align: center;
  margin: 15px 60px;
  font-size: 15px;
  background: rgb(231, 238, 246);
  box-sizing: border-box;
  box-shadow: 0 12px 20px rgba(0, 0, 0, 0.5);
  border-radius: 15px;
  color: #39456b;
  font-weight: bold;
}
</style>
