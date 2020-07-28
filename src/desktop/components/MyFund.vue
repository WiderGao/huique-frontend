<template>
  <div class="app">
    <el-card
      v-for="item in fund"
      :key="item.fundid"
      :to="'/fund/'+item.fundid"
      is-link
      center
    >
      <p>{{item.name}}</p>
      <p>{{item.record_num}}</p>
    </el-card>
  </div>
</template>

<script>
  export default {
    name: 'MyFund',
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
  }
</script>

<style scoped>

</style>
