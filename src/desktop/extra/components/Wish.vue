<template>
  <div class="wish-wrap">
    <div class="titlebar"></div>
    <div class="body">
      <div class="author">{{author}} :</div>
      <div class="wish">{{wish}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["author", "wish"],
};
</script>

<style lang="scss" scoped>
.wish-wrap {
  position: relative;
  width: 260px;
  height: 240px;
  background-color: rgb(255, 242, 171);
  box-shadow: 1px 4px 11px 0px rgba(0, 0, 0, 0.16);
  border-radius: 10px;
  transform-style: preserve-3d;
  &::before {
    content: "";
    position: absolute;
    left: 10px;
    bottom: 10px;
    width: 100px;
    height: 50px;
    background-color: #000;
    transform: rotate(-10deg) translateZ(-1em);
    box-shadow: 3px 10px 20px 0px rgba(0, 0, 0, 0.53);
  }
  &::after {
    content: "";
    position: absolute;
    right: 10px;
    bottom: 10px;
    width: 100px;
    height: 50px;
    background-color: #000;
    transform: rotate(10deg) translateZ(-1em);
    box-shadow: -3px 10px 20px 0px rgba(0, 0, 0, 0.53);
  }
  .titlebar {
    width: 100%;
    height: 36px;
    background-color: #ffe974;
    border-radius: 10px 10px 0 0;
  }
  .body {
    padding: 20px;
    .author {
      font-size: 20px;
      font-weight: bold;
      margin-bottom: 10px;
    }
  }
}
</style>