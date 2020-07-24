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
      this.$ajax
        .get("/usermsg/updatemsg", {
          params: {
            phone: this.$store.state.phone,
            username: this.$store.state.username,
            address: this.$store.state.address,
            fund_applicant_detail: this.$store.state.fund_applicant_detail,
            activity_volunteer_detail: this.$store.state
              .activity_volunteer_detail,
          },
        })
        .then((response) => {
          if (response.data.status == 200) this.$toast.success("提交成功");
        });
    },
  },
};
</script>

<style>
</style>