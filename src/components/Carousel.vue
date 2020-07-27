<template >
  <div class="block shadow" >
    <el-carousel height="400px" >
      <el-carousel-item
        v-for="(image, index) in swipeImg"
        :key="index"
      >
        <h3><img :src="image" class="picture"></h3>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
  import api from "../api"
export default {
  name: 'Carousel',
  data: function () {
    return {
      swipeImg: [] // 轮播图片
    }
  },
  mounted() {
    api.Activity.getCarousel()
      .then((data) => {
        this.swipeImg = data;
      })
      .catch((error) => {
        console.log(error);
      })
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
  methods: {

  }
}
</script>

<style>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  .shadow{

    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
    /*border:1px solid #a1a1a1;*/
    /*border-radius: 8px;*/
  }

  .picture{
    background-size: cover;
  }
</style>
