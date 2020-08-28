<template>
  <div class="paint-wrap">
    <div class="author">作者：{{author}}</div>
    <el-image class="painting" :src="paint" fit="cover">
      <div slot="placeholder" class="image-slot">
        加载中
        <span class="dot">...</span>
      </div>
    </el-image>
  </div>
</template>

<script>
import { Image } from "element-ui";
export default {
  props: ["author", "paint"],
  components: {
    [Image.name]: Image,
  },
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
    z-index: 10;
    &:hover {
      opacity: 1;
      background-color: rgba(0, 0, 0, 0.5);
    }
  }
  .image-slot {
    display: block;
    width: 600px;
  }
  .painting {
    height: 100%;
    width: 100%;
    ::v-deep img {
      display: block;
      max-height: 100%;
      min-width: 100%;
      height: 300px;
      width: auto;
    }
  }
}
</style>