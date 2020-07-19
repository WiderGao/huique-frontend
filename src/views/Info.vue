<template>
  <van-cell-group>
    <van-cell icon="like" title="基金信息查询" is-link></van-cell>
    <van-cell icon="manager" title="医生信息查询" is-link></van-cell>
  </van-cell-group>
</template>

<script>
import { Cell, CellGroup } from "vant";
export default {
  components: {
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup
  }
};
</script>

<style>
</style>