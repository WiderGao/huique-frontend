<template>
  <div class="not-found-wrap">
    <img class="not-found-image" :src="require('@/assets/img/404.png')" />
  </div>
</template>

<script>
export default {
  components: {},
};
</script>

<style scoped>
.not-found-wrap {
  /* background: url("../../assets/img/404.png"); */
  /* position: absolute; */
  width: 100%;
  max-width: 100%;
  height: 100%;
  background-size: cover;
}
.not-found-image {
  display: block;
  margin: 0 auto;
}
</style>
