<template>
  <div class="app">
    <el-container>
        <el-aside class="aside">
          <div class="header">
            <div class="text">
              <p>医生</p>
              <p>信息</p>
              <p>查询</p>
            </div>
            <div v-if="searchValue===''" class="search-info-desc">
              <p>科室</p>
            </div>
          </div>
        </el-aside>
      <el-main class="main">
<!--        <div v-for="item in showList" class="showlist">-->
<!--          <el-card :body-style="{ padding: '0px' }" style="height: 50px;padding: 10px">-->
<!--            <div @click="toDetail(item)">{{item}}</div>-->
<!--          </el-card>-->
<!--        </div>-->
        <div
          v-for="item in showList"
          is-link
          center
          class="showlist"
          @click="toDetail(item)"
        >
          <div style="padding: 18px;line-height: 20px;margin: 0px">
            <p style="font-size: 20px">{{item}}</p>
          </div>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import api from "@/api";
import { Container, Header, Main, Card ,Aside} from "element-ui";
export default {
  name: "DoctorSearch",
  components: {
    [Container.name]: Container,
    [Header.name]: Header,
    [Main.name]: Main,
    [Card.name]: Card,
    [Aside.name]: Aside,
  },
  data() {
    return {
      searchValue: "",
      sectionList: [],
      showList: [],
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
    toDetail(item) {
      this.$router.push("/doctor/" + item);
    },
    onClear() {
      this.showList = this.sectionList;
    },
  },
};
</script>

<style scoped>
  .search-info-desc {
    line-height: 20px;
    font-size: 20px;
    color: #fff;
    width: 100%;
    text-align: center;
  }
.header {
  margin-top: 30px;
  margin-left: 60px;
  height: 330px;
  width: 180px;
  background: rgba(47, 134, 249, 0.8);
  padding: 20px;
  box-sizing: border-box;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.5);
  border-radius: 30px;
}
.header .text {
  letter-spacing: 7px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;
  margin-bottom: 30px;
  color: #fff;
  text-align: center;
  font-size: 28px;
  width: 70px;
  line-height: 45px;
}
.main {
  margin-top: 0px;
}
  .showlist {
    float: left;
    position: relative;
    margin: 10px;
    width: 280px;
    height: 110px;
    background-color: white;
    box-sizing: border-box;
    box-shadow: 0 3px 3px rgba(0, 0, 0, 0.3);
    border-radius: 15px;
  }
</style>
