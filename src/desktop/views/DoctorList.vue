<template>
  <div class="app">
    <el-card class="box-card" v-for="item in doctorList" :key="item.id">
      <div class="text">
        <p style="font-size: 23px">{{item.name}}</p>
        <br/>
        <p>所在医院：{{item.corporation}}</p>
        <p>工作科室：{{item.section}}</p>
        <p>专业擅长：{{item.major}}</p>
      </div>
    </el-card>
  </div>
</template>

<script>
import api from "@/api";
import { Card } from "element-ui";
export default {
  name: "DoctorList",
  components: {
    [Card.name]: Card,
  },
  data() {
    return {
      doctorList: [],
    };
  },
  mounted() {
    api.Doctor.getDoctor(this.$route.params.section)
      .then((data) => {
        this.doctorList = data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style scoped>
.text {
  font-size: 14px;
  padding: 5px 0;
}
.box-card {
  width: 480px;
  margin: 20px;
}
.app{
  background-color: #f6c196;
  padding: 0px;
  margin: 0px;
  position: absolute;
  height: 100%;
  width: 100%;
}
</style>
