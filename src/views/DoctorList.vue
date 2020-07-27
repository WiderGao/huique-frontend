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
  export default {
    name: 'DoctorList',
    data() {
      return {
        doctorList: []
      };
    },
    mounted() {
      this.$ajax
        .get("sectionmsg/expert", {
          params: {
            section: this.$route.params.section
          }
        })
        .then(response => {
          this.doctorList = response.data;
        })
        .catch(error => {
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
