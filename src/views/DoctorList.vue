<template>
    <div class="app">
      <el-card
        class="box-card"
        v-for="item in doctorList"
        :key="item.id"
      >
        <div class="text">
          所在医院：{{item.corporation}}
          工作科室：{{item.section}}
          专业擅长：{{item.major}}
        </div>
      </el-card>
    </div>
</template>

<script>
  import api from '../api'
  export default {
    name: 'DoctorList',
    data() {
      return {
        doctorList: []
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
    }
  }
</script>

<style scoped>
  .text {
    font-size: 14px;
    padding: 18px 0;
  }
  .box-card {
    width: 480px;
  }
</style>
