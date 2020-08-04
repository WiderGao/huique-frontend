<template>
  <div class="not-found-wrap">
    < :src="require('@/assets/img/404.png')" />
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
  .not-found-wrap{
    background: url("../../assets/img/404.png");
    position: absolute;
    width: 100%;
    max-width: 100%;
    height: 100%;
    background-size: cover;
  }
</style>
