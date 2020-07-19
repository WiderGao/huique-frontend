<template>
  <div id="app">
    <router-view></router-view>
    <bottom-tab></bottom-tab>
  </div>
</template>
<script>
import bottomTab from "@/components/BottomTab.vue";
export default {
  components: { "bottom-tab": bottomTab }
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
  padding-bottom: 60px;
}
</style>