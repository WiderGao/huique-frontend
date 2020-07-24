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
      console.log("submit", values);
      this.$ajax
        .post("login", {
          phone: values.phone,
          password: values.password,
        })
        .then((response) => {
          if (response.data.status == 200) {
            this.$ajax
              .get("/usermsg")
              .then((response) => {
                console.log(response.data);
                this.$store.commit("saveUserName", response.data.msg.username);
                this.$store.commit("savePhone", response.data.msg.phone);
                this.$store.commit("saveAddress", response.data.msg.address);
                this.$store.commit(
                  "saveFundApplicantDetail",
                  response.data.msg.fund_applicant_detail
                );
                this.$store.commit(
                  "saveActivityVolunteerDetail",
                  response.data.msg.activity_volunteer_detail
                );
              })
              .catch((error) => {
                throw error;
              });
            this.$ajax
              .get("/activitymsg/joinedactivity")
              .then((response) => {
                this.$store.commit("saveJoinedActivity", response.data.msg);
              })
              .catch((error) => {
                throw error;
              });
            this.$ajax
              .get("/fundtypemsg/fundmsg/storedfund")
              .then((response) => {
                this.$store.commit("saveStoredFund", response.data.msg);
              })
              .catch((error) => {
                throw error;
              });
            this.$toast.success(response.data.msg);
            this.$router.push({ name: "Home" });
          } else {
            this.$toast.fail(response.data.msg);
          }
        })
        .catch((error) => {
          //清除用户登录信息
          this.$dispatch("clearLogin");
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