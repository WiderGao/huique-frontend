<template>
  <div class="app">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
    >
      <span
        style="float: left;color: gray;font-size: 18px;font-weight: bold;border-right:1px gray;margin-right: 50px"
      >
        <img src="@/assets/img/logo.png" style="width: 50px;height: 50px" />
        灰雀
      </span>
      <el-menu-item index="1" @click="toHome" style="margin-left: 12%">
        <span :class="['menu-item', flag=='1'?'active':'']">主页-活动</span>
      </el-menu-item>
      <el-menu-item index="2" @click="toInfo" style="margin-left: 12%">
        <span :class="['menu-item', flag == '2' ? 'active':'']">信息查询</span>
      </el-menu-item>
      <el-menu-item index="3" @click="toProfile" style="margin-left: 12%">
        <span :class="['menu-item', flag=='3'?'active':'']">我的信息</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
import { Menu, MenuItem } from "element-ui";
export default {
  components: {
    [Menu.name]: Menu,
    [MenuItem.name]: MenuItem,
  },
  data() {
    return {
      activeIndex: "1",
      flag: "1",
    };
  },
  methods: {
    handleSelect(key, keyPath) {},
    toHome() {
      this.$router.push("/home");
      this.flag = "1";
    },
    toInfo() {
      this.$router.push("/info");
      this.flag = "2";
    },
    toProfile() {
      this.$router.push("/profile");
      this.flag = "3";
    },
  },
};
</script>

<style scoped>
app {
  margin: 0px;
  padding: 0px;
}
.menu-item {
  margin: 0px;
  background-color: orange;
  border-radius: 5px;
  text-align: center;
  font-weight: bold;
  border-radius: 10px;
  padding: 8px 20px;
  color: white;
}
.active {
  background-color: rgba(0, 142, 183, 0.67);
}
</style>
