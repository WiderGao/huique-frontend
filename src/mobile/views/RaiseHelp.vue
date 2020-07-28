<template>
  <div class="raise-help-wrap">
    <!-- Field 是基于 Cell 实现的，可以使用 CellGroup 作为容器来提供外边框。 -->
    <van-cell-group>
      <van-field
        v-model="name"
        type="text"
        label="姓名"
        placeholder="请输入您的姓名"
        rows="1"
        required
        readonly
      ></van-field>
      <van-field
        v-model="phone"
        type="tel"
        label="手机"
        placeholder="请输入您的手机号码"
        rows="1"
        required
        readonly
      ></van-field>
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
    <div style="margin: 16px;">
      <van-button round block type="info" @click="handleSubmit">提交</van-button>
    </div>
  </div>
</template>

<script>
import { CellGroup, Field, Toast, Button } from "vant";
import api from "@/api";
export default {
  components: {
    [CellGroup.name]: CellGroup,
    [Field.name]: Field,
    [Toast.name]: Toast,
    [Button.name]: Button,
  },
  data() {
    return {
      name: this.$store.state.username,
      phone: this.$store.state.phone,
      details: "",
    };
  },
  methods: {
    handleSubmit() {
      api.User.changeUserInfo(
        this.phone,
        this.username,
        this.$store.state.address,
        this.details,
        this.$store.state.activity_volunteer_detail
      )
        .then((data) => {
          this.$toast.success("提交成功");
        })
        .catch((error) => {
          this.$toast.fail("请重试");
          console.log(error);
        });
    },
  },
};
</script>

<style>
</style>