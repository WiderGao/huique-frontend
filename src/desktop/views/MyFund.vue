<template>
  <div class="my-activity-wrap">
    <div v-if="fund.length==0" class="empty">你还没有收藏基金哦~</div>
    <div
      v-for="item in fund"
      class="box-card"
      :key="item.fundid"
      @click="toDetail(item)"
    >{{item.name}}</div>
  </div>
</template>

<script>
import { Cell, CellGroup, Empty } from "vant";
import api from "@/api";
export default {
  components: {
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [Empty.name]: Empty,
  },
  data() {
    return {
      fund: [],
      fundType: [],
    };
  },
  methods: {
    toDetail: function (fund) {
      this.$router.push(
        "/fund/" + this.fundType[fund.fundtype] + "/" + fund.fundid
      );
    },
  },
  created() {
    api.Fund.getStoredFund()
      .then((data) => {
        this.fund = data;
      })
      .catch((error) => {
        console.log(error);
      });
    api.Fund.getFundType()
      .then((data) => {
        data.forEach((type) => {
          this.fundType[type.id] = type.name;
        });
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style scoped>
.empty {
  font-size: 24px;
  margin: 0 auto;
  padding: 20px;
  height: 500px;
  color: #fff;
}
.my-activity-wrap {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.box-card {
  min-height: 50px;
  line-height: 50px;
  border-collapse: collapse;
  text-align: center;
  margin: 15px auto;
  padding: 0 15px;
  width: 320px;
  cursor: pointer;
  font-size: 15px;
  background: #fff;
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.3);
  border-radius: 25px;
  color: #39456b;
  font-weight: bold;
}
</style>