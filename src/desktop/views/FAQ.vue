<template>
  <div class="faq-wrap">
    <div
      v-for="item in faq"
      class="box-card"
      :key="item.helpid"
      @click="[changeActive(item.fundid),toDetail(item.name)]"
    >
      <p>{{item.question}}</p>
      <p>{{item.answer}}</p>
    </div>
    <div>
      <el-button type="primary" @click="handleFeedback" style="margin:0 auto;display: block;">我要反馈</el-button>
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
  background: #fff;
  box-sizing: border-box;
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.3);
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
