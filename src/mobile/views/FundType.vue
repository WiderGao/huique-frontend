<template>
  <div class="fund-list-wrap">
    <van-cell-group>
      <van-cell
        v-for="item in fundList"
        :key="item.fundid"
        :title="item.name"
        :label="item.record_num"
        :to="'/fund/'+$route.params.disease+'/'+item.fundid"
        is-link
        center
      ></van-cell>
    </van-cell-group>
  </div>
</template>

<script>
import { Cell, CellGroup } from "vant";
import api from "@/api";
export default {
  components: {
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
  },
  data() {
    return {
      fundList: [],
    };
  },
  created() {
    api.Fund.getClassifiedFund(this.$route.params.disease)
      .then((data) => {
        this.fundList = data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style>
</style>