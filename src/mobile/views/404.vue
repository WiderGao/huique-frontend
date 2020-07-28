<template>
  <div class="not-found-wrap">
    <van-image :src="require('@/assets/img/404.png')" />
  </div>
</template>

<script>
import { Image } from "vant";
export default {
  components: {
    [Image.name]: Image,
  },
};
</script>

<style scoped>
</style>