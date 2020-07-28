<template>
  <div class="my-activity-wrap">
    <van-empty v-if="fund.length==0" description="你还没有收藏基金哦~"></van-empty>
    <van-cell-group v-else>
      <van-cell
        v-for="item in fund"
        :key="item.fundid"
        :title="item.name"
        :label="item.record_num"
        :to="'/fund/'+item.fundid"
        is-link
        center
      ></van-cell>
    </van-cell-group>
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
    };
  },
  created() {
    api.Fund.getStoredFund()
      .then((data) => {
        this.fund = data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style>
</style>