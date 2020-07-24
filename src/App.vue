<template>
  <div id="app">
    <top-nav></top-nav>
    <router-view></router-view>
    <bottom-tab></bottom-tab>
  </div>
</template>
<script>
import bottomTab from "@/components/BottomTab.vue";
import topNav from "@/components/TopNav.vue";
import { NavBar } from "vant";
export default {
  components: {
    [NavBar.name]: NavBar,
    "bottom-tab": bottomTab,
    "top-nav": topNav,
  },
  data() {
    return {};
  },
};
</script>
<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0;
}
body {
  font-size: 16px;
  background-color: #f8f8f8;
  -webkit-font-smoothing: antialiased;
}
#app {
  padding: 46px 0 60px 0;
}
</style>