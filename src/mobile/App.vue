<template>
  <div id="app">
    <top-nav></top-nav>
    <transition name="van-fade" mode="out-in" :duration="100">
      <router-view></router-view>
    </transition>
    <bottom-tab></bottom-tab>
  </div>
</template>
<script>
import bottomTab from "./components/BottomTab.vue";
import topNav from "./components/TopNav.vue";
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
html,
body {
  height: 100%;
}
#app {
  display: flex;
  flex-direction: column;
  padding: 46px 0 60px 0;
  min-height: 100%;
}
.fa-icon {
  width: auto;
  height: 1em; /* 或任意其它字体大小相对值 */

  /* 要在 Safari 中正常工作，需要再引入如下两行代码 */
  max-width: 100%;
  max-height: 100%;
}
</style>