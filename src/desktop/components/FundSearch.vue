<template>
  <div class="fund-search-wrap">
    <el-container>
      <el-aside class="aside">
        <div class="header">
          <div class="text">
            <p>基金</p>
            <p>信息</p>
            <p>查询</p>
          </div>
          <div v-if="searchValue===''" class="search-info-desc">
            <p>{{fundType.length}}大病种，</p>
            <p>{{sum(fundType.map(item => item.num))}}条常见信息整合</p>
          </div>
        </div>
      </el-aside>
      <el-main class="main">
        <div
          v-for="item in showList"
          :key="item.fundtypeid"
          is-link
          center
          class="showlist"
          @click="toFondlist(item)"
        >
          <div class="content">
            <div class="name">{{item.name}}</div>
            <div class="info">
              <span class="number">{{item.num}}</span>条基金信息
            </div>
          </div>
          <div class="image">
            <img :src="item.img" />
          </div>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import api from "@/api";
import { Container, Aside, Main } from "element-ui";
export default {
  name: "FundSearch",
  components: {
    [Container.name]: Container,
    [Aside.name]: Aside,
    [Main.name]: Main,
  },
  data() {
    return {
      fundType: [],
      showList: [],
      searchValue: "",
      activeTab: 0,
    };
  },
  methods: {
    sum(arr) {
      let summary = 0;
      for (let i = 0; i < arr.length; i++) summary += arr[i];
      return summary;
    },
    toFondlist: function (item) {
      this.$router.push("/fund/" + item.name);
    },
  },
  created() {
    api.Fund.getFundType()
      .then((data) => {
        this.fundType = data;
        this.showList = this.fundType;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style lang="scss" scoped>
.search-info-desc {
  line-height: 20px;
  font-size: 12px;
  color: #fff;
  width: 100%;
  text-align: center;
}
.header {
  margin-top: 50px;
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
  margin-top: 20px;
}
.showlist {
  float: left;
  position: relative;
  margin: 10px;
  padding: 10px;
  width: 266px;
  height: 110px;
  background-color: white;
  box-sizing: border-box;
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.3);
  border-radius: 15px;
  display: flex;
  flex-wrap: nowrap;
  .image {
    flex-grow: 0;
    flex-shrink: 0;
    height: 100%;
    img {
      height: 100%;
    }
  }
  .content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 10px;
    flex-grow: 1;
    .name {
      font-size: 18px;
    }
    .number {
      font-size: 20px;
      font-weight: bold;
    }
  }
}
</style>
