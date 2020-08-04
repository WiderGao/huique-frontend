<template>
  <div class="speaker-wrap">
    <hr noshade="true" size="3px" color="#3986e5" style="margin-bottom: 5px" />
    <div class="main">
      <v-icon name="volume-up"></v-icon>
      <div class="content">{{ msg }}</div>
    </div>
  </div>
</template>

<script>
import Vicon from "vue-awesome/components/Icon";
import "vue-awesome/icons/volume-up";

export default {
  name: "Speaker",
  components: {
    "v-icon": Vicon,
  },
  data: function () {
    return {
      msg: "欢迎浏览灰雀官方网站.这里有最齐全的医疗移民服务信息!",
    };
  },
};
</script>

<style lang="scss" scoped>
.main {
  display: flex;
  align-items: center;
  .content {
    height: 28px;
    line-height: 28px;
    font-size: 14px;
    font-weight: bold;
    margin-left: 8px;
  }
}
.speaker-wrap {
  margin: 5px 10px;
}
</style>
