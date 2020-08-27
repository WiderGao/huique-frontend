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
  height: 300px;
  .author {
    position: absolute;
    width: 100%;
    height: 300px;
    line-height: 300px;
    text-align: center;
    font-size: 24px;
    color: white;
    opacity: 0;
    transition: all 0.2s;

    &:hover {
      opacity: 1;
      background-color: rgba(0, 0, 0, 0.5);
    }
  }
  .painting {
    max-height: 100%;
    min-width: 100%;
    object-fit: cover;
    height: 300px;
  }
}
</style>