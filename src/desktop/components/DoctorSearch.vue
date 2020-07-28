<template>
  <div class="app">
    <el-container>
      <el-header>
        <div class="header" >
          <h2 style="margin-left: 15px">
            医生信息查询
          </h2>
          <div
            class="search-info-desc"
          >
            科室
          </div>
        </div>
      </el-header>
      <el-main class="main">
        <div
          v-for="item in showList"
          class="showlist"
        >
          <el-card
            :body-style="{ padding: '0px' }"
            style="height: 50px;padding: 10px"
          >
            <div @click="toDetail(item)">
              {{item}}
            </div>
          </el-card>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
  import api from "@/api";
  export default {
    name: 'DoctorSearch',
    data() {
      return {
        searchValue: "",
        sectionList: [],
        showList: []
      };
    },
    mounted() {
      api.Doctor.getSection()
        .then((data) => {
          this.sectionList = data;
          this.showList = this.sectionList;
        })
        .catch((error) => {
          console.log(error);
        });
      // this.$ajax
      //   .get("sectionmsg")
      //   .then(response => {
      //     this.sectionList = response.data;
      //     this.showList = this.sectionList;
      //   })
      //   .catch(error => {
      //     console.log(error);
      //   });
    },
      methods: {
      toDetail(item){
        this.$router.push('/doctor/'+item)
      },
      onClear() {
        this.showList = this.sectionList;
      }
    }

  }

</script>

<style scoped>
  .search-info-desc {
    padding: 4px 16px;
    font-size: 20px;
    color: #fff;
    width: 100%;
  }
  .header{
    margin: 0px;
    background: rgba(64,224,205,.8);
    padding: 20px;
    box-sizing: border-box;
    box-shadow: 0 15px 25px rgba(0,0,0,0.5);
    border-radius: 10px;
  }
  .header h2{
    color: #fff;
  }
  .main{
    margin-top: 100px;
  }
  .showlist{
    float: left;
    position: relative;
    margin: 10px;
    width: 280px;
    height: auto;
    font-size: 20px;
  }
</style>
