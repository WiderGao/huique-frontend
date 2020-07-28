<template>

</template>

<script>
  import api from "@/api";
  export default {
    created() {
      api.User.logout()
        .then((data) => {
          this.$message({
            message: data,
            type: 'success'
          });
          this.$router.push({ name: "Home" });
        })
        .catch((error) => {
          this.$message.error(error.message);
          console.log(error);
        });
    },
  };
</script>

<style scoped>

</style>
