<template>
  <div class="app">
    <div
      v-for="item in faq"
      class="box-card"
      :key="item.helpid"
      @click="[changeActive(item.fundid),toDetail(item.name)]"
    >
      <p>{{item.question}}</p>
      <p>{{item.answer}}</p>
    </div>
    <div style="margin: 16px;">
      <el-button type="info" @click="handleFeedback">我要反馈</el-button>
    </div>
  </div>
</template>

<script>
import { Button } from "element-ui";
export default {
  name: "FAQ",
  components: {
    [Button.name]: Button,
  },
  data() {
    return {
      faq: [],
    };
  },
  methods: {
    handleFeedback() {},
  },
  created() {
    this.$ajax.get("/helpmsg").then((response) => {
      if (response.data.status == 200) {
        this.faq = response.data.msg;
      }
    });
  },
};
</script>

<style scoped>
.box-card {
  width: 70%;
  margin: 15px auto;
  height: 100px;
  border-collapse: collapse;
  text-align: center;
  font-size: 15px;
  background: rgb(231, 238, 246);
  box-sizing: border-box;
  box-shadow: 0 12px 20px rgba(0, 0, 0, 0.5);
  border-radius: 15px;
  color: #39456b;
  font-weight: bold;
}
.app{
  background-color: #f6c196;
  padding: 0px;
  margin: 0px;
  position: absolute;
  height: 100%;
  width: 100%;
}
</style>
