<template>
  <div class="my-activity-wrap">
    <van-cell-group>
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
import { Cell, CellGroup } from "vant";
import api from "../api";
export default {
  components: {
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
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