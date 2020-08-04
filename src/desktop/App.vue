<template>
  <div class="app">
    <top-header></top-header>
    <router-view class="view"></router-view>
    <bottom-footer></bottom-footer>
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
export default {
  name: "App",
  components: {
    "top-header": Header,
    "bottom-footer": Footer,
  },
};
</script>

<style>
* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}
body {
  background: #274995;
}
.app {
  background: #f3c9a9 url("~@/assets/img/bg.svg") bottom/100% no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
}
.view {
  max-width: 1200px;
  width: 100%;
  flex-grow: 1;
  margin: 20px 0;
}
</style>
