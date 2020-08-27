<template>
  <div class="paint-wrap">
    <div class="author">作者：{{author}}</div>
    <img class="painting" :src="paint" alt />
  </div>
</template>

<script>
export default {
  props: ["author", "paint"],
};
</script>

<style lang="scss" scoped>
.paint-wrap {
  position: relative;
  width: 100%;
  .author {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 30px;
    line-height: 30px;
    font-weight: bold;
    text-indent: 20px;
    background-color: rgba(0, 0, 0, 0.4);
    font-size: 15px;
    color: white;
  }
  .painting {
    width: 100%;
    object-fit: cover;
  }
}
</style>