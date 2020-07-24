<template></template>

<script>
import { Toast } from "vant";

export default {
  components: {
    [Toast.name]: Toast,
  },
  created() {
    this.$ajax
      .post("logout")
      .then((response) => {
        if (response.data.status == 200) {
          //清除用户登录信息
          this.$store.dispatch("clearLogin");
          //提示
          this.$toast.success(response.data.msg);
          this.$router.push({ name: "Home" });
        } else {
          this.$toast.fail(response.data.msg);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style>
</style>