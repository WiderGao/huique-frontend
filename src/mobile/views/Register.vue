<template>
  <div class="register-wrap">
    <van-image :src="require('@/assets/img/header.png')" style="padding-top: 20px"></van-image>
    <div class="desc">灰雀，关注医疗移民</div>
    <van-form label-width="5em" @submit="onSubmit">
      <div class="form">
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
        <van-field
          v-model="checkPassword"
          type="password"
          name="checkPassword"
          label="重复密码"
          placeholder="请再次输入密码"
          left-icon="lock"
          :rules="[
          { validator: validateCheckPass, message: '两次密码输入不一致' },
        ]"
        />
        <van-field
          v-model="username"
          type="text"
          name="username"
          label="姓名"
          placeholder="请输入姓名"
          left-icon="manager"
          :rules="[{ required: true, message: '姓名不能为空' }]"
        />
      </div>
      <div class="btn" style="margin: 16px;">
        <van-button round block type="info" native-type="submit">注册</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import { Form, Field, Button, Toast, Image } from "vant";
import api from "@/api";
export default {
  components: {
    [Field.name]: Field,
    [Form.name]: Form,
    [Button.name]: Button,
    [Toast.name]: Toast,
    [Image.name]: Image,
  },
  data() {
    return {
      phone: "",
      password: "",
      checkPassword: "",
      username: "",
    };
  },
  methods: {
    onSubmit(values) {
      // console.log("submit", values);
      api.User.register(values.phone, values.password, values.username)
        .then((data) => {
          this.$toast.success(data);
          this.$router.push({ name: "Login" });
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
.desc {
  text-align: center;
  padding: 20px;
}
</style>