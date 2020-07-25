<template>
  <div class="login-wrap">
    <van-form label-width="3.2em" @submit="onSubmit">
      <van-field
        v-model="phone"
        type="tel"
        name="phone"
        label="手机号"
        placeholder="请输入手机号"
        left-icon="phone"
        :rules="[{ required: true, message: '手机号不能为空' },{ validator:validPhone, message:'请输入正确手机号'}]"
      />
      <van-field
        v-model="password"
        type="password"
        name="password"
        label="密码"
        placeholder="请输入密码"
        left-icon="lock"
        :rules="[
          { required: true, message: '密码不能为空' },
          { validator: validatePassLength, message: '密码长度为8-16位字符' },
          { validator: validatePassSpacesChar, message: '密码不能包含空格' },
          { validator: validatePassSpecialChar, message: '密码包含非法字符'},
        ]"
      />
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">登录</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import { Form, Field, Button, Toast } from "vant";
import api from "../api";
export default {
  components: {
    [Field.name]: Field,
    [Form.name]: Form,
    [Button.name]: Button,
    [Toast.name]: Toast,
  },
  data() {
    return {
      phone: "",
      password: "",
    };
  },
  methods: {
    onSubmit(values) {
      api.User.login(values.phone, values.password)
        .then((data) => {
          this.$toast.success(data);
          this.$router.push({ name: "Home" });
        })
        .catch((error) => {
          this.$toast.fail(error.message);
          console.log(error);
        });
    },
    validPhone(values) {
      if (values !== "") {
        if (!/^1[3456789]\d{9}$/.test(values)) {
          return false;
        } else return true;
      }
      return false;
    },
    validatePassLength(values) {
      if (/^.{8,16}$/.test(values)) return true;
      else return false;
    },
    validatePassSpacesChar(values) {
      if (/\s+/.test(values)) return false;
      else return true;
    },
    validatePassSpecialChar(values) {
      if (
        /[^\s\~\!\@\#\$\%\^\&\*\(\)\_\+\-\/\.\?\[\]\{\}\<\>\=0-9a-zA-Z]+/.test(
          values
        )
      )
        return false;
      else return true;
    },
    validateCheckPass(values) {
      if (values !== this.password) return false;
      else return true;
    },
  },
};
</script>

<style>
</style>