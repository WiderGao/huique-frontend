<template>
  <div class="raise-help-wrap">
    <!-- Field 是基于 Cell 实现的，可以使用 CellGroup 作为容器来提供外边框。 -->
    <van-cell-group>
      <van-field v-model="name" type="text" label="姓名" placeholder="请输入您的姓名" rows="1" required></van-field>
      <van-field v-model="phone" type="tel" label="手机" placeholder="请输入您的手机号码" rows="1" required></van-field>
      <van-field
        v-model="details"
        type="textarea"
        label="情况描述"
        placeholder="请输入您的实际情况"
        autosize
        rows="1"
        required
      ></van-field>
    </van-cell-group>
  </div>
</template>

<script>
import { CellGroup, Field } from "vant";
export default {
  components: {
    [CellGroup.name]: CellGroup,
    [Field.name]: Field
  },
  data() {
    return {
      name: "",
      phone: "",
      details: ""
    };
  }
};
</script>

<style>
</style>