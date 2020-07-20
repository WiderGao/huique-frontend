<template>
  <div class="fund-list-wrap">
    <van-cell-group>
      <van-cell
        v-for="item in fundList"
        :key="item.fundid"
        :title="item.name"
        :label="item.record_num"
        :to="$route.path+'/'+item.name"
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
    [CellGroup.name]: CellGroup
  },
  data() {
    return {
      fundList: []
    };
  },
  mounted() {
    this.$ajax
      .get("fundtypemsg/fundmsg", {
        params: {
          name: this.$route.params.disease
        }
      })
      .then(response => {
        this.fundList = response.data;
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>

<style>
</style>