<template>
  <div class="my-info-wrap">
    <!-- Field 是基于 Cell 实现的，可以使用 CellGroup 作为容器来提供外边框。 -->
    <van-form>
      <van-field v-model="name" label="姓名" placeholder="请输入您的姓名" rows="1" required></van-field>
      <van-field v-model="phone" label="手机" placeholder="请输入您的手机号码" type="tel" rows="1" required></van-field>
      <van-field v-model="address" label="住址" placeholder="请输入您的住址" rows="1"></van-field>
    </van-form>
    <div style="margin: 16px;">
      <van-button round block type="info" @click="handleSubmit">更新</van-button>
    </div>
    <van-form>
      <van-field
        v-model="oldPassword"
        type="password"
        name="password"
        label="旧密码"
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
        v-model="newPassword"
        type="password"
        name="password"
        label="新密码"
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
    </van-form>
    <div style="margin: 16px;">
      <van-button round block type="info" @click="handleChangePass">修改密码</van-button>
    </div>
  </div>
</template>

<script>
import { Form, Field, Toast, Button } from "vant";
export default {
  components: {
    [Form.name]: Form,
    [Field.name]: Field,
    [Toast.name]: Toast,
    [Button.name]: Button,
  },
  data() {
    return {
      name: this.$store.state.username,
      phone: this.$store.state.phone,
      address: this.$store.state.address,
      oldPassword: "",
      newPassword: "",
      checkPassword: "",
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
          if (response.data.status == 200)
            this.$toast.success(response.data.msg);
        });
    },
    handleChangePass() {
      this.$ajax
        .get("/usermsg/changepass", {
          params: {
            oldPassword: this.oldPassword,
            newPassword: this.newPassword,
          },
        })
        .then((response) => {
          if (response.data.status == 200)
            this.$toast.success(response.data.msg);
          else this.$toast.fail(response.data.msg);
        });
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
      if (values !== this.newPassword) return false;
      else return true;
    },
  },
};
</script>

<style>
</style>