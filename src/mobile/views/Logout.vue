<template></template>

<script>
import { Toast } from "vant";
import api from "@/api";
export default {
  components: {
    [Toast.name]: Toast,
  },
  created() {
    api.User.logout()
      .then((data) => {
        this.$toast.success(data);
        this.$router.push({ name: "Activity" });
      })
      .catch((error) => {
        this.$toast.fail(error.message);
        console.log(error);
      });
  },
};
</script>

<style>
</style>