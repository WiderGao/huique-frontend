<template >
  <div class="carousel-wrap">
    <el-carousel height="400px">
      <el-carousel-item v-for="(image, index) in swipeImg" :key="index">
        <el-image :src="image" fit="cover" class="show-image" style="height:100%;width:100%;"></el-image>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
import api from "@/api";
import { Carousel, CarouselItem, Image } from "element-ui";
export default {
  name: "Carousel",
  components: {
    [Carousel.name]: Carousel,
    [CarouselItem.name]: CarouselItem,
    [Image.name]: Image,
  },
  data: function () {
    return {
      swipeImg: [], // 轮播图片
    };
  },
  mounted() {
    api.Activity.getCarousel()
      .then((data) => {
        this.swipeImg = data;
      })
      .catch((error) => {
        console.log(error);
      });
    // 获取轮播图片
    // this.$ajax
    //   .get("utils/generate_carousel_figure_url")
    //   .then((response) => {
    //     this.swipeImg = response.data;
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.carousel-wrap {
  margin: 0 10px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 4px 0 rgb(0, 0, 0, 0.25);
}
</style>
