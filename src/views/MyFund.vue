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
    this.$ajax.get("/fundtypemsg/fundmsg/storedfund").then((response) => {
      if (response.data.status == 200) this.fund = response.data.msg;
    });
  },
};
</script>

<style>
</style>