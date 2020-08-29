<template>
  <el-card header="代写轻松筹、水滴筹——提交申请">
    <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
      <el-form-item label="姓名">
        <el-input v-model="name" type="text" placeholder="请输入您的姓名" rows="1" required></el-input>
      </el-form-item>
      <el-form-item label="手机号码">
        <el-input v-model="phone" type="tel" placeholder="请输入您的手机号码" rows="1" required></el-input>
      </el-form-item>
      <el-form-item label="情况描述">
        <el-input
          v-model="details"
          type="textarea"
          placeholder="请输入您的实际情况"
          :autosize="{ minRows: 3, maxRows: 3000}"
          required
        ></el-input>
      </el-form-item>
      <el-button type="primary" style="display:block;margin:0 0 0 auto" @click="handleSubmit">提交</el-button>
    </el-form>
  </el-card>
</template>

<script>
import api from "@/api";
import { Card, Form, FormItem, Button, Input } from "element-ui";
export default {
  name: "RaiseHelp",
  components: {
    [Card.name]: Card,
    [Form.name]: Form,
    [FormItem.name]: FormItem,
    [Button.name]: Button,
    [Input.name]: Input,
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

<style scoped>
.el-card {
  max-width: 800px;
}
</style>
