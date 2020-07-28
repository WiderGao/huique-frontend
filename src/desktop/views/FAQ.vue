<template>
  <div class="app">
    <div
      v-for="item in faq"
      :class="box-card"
      :key="item.helpid"
      @click="[changeActive(item.fundid),toDetail(item.name)]"
    >
      <p>{{item.question}}</p>
      <p>{{item.answer}}</p>
    </div>
    <div style="margin: 16px;">
      <vel-button type="info" @click="handleFeedback">我要反馈</vel-button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'FAQ',
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
  }
</script>

<style scoped>
  .box-card{
    width: 40%;
    float: left;
    height: 50px;
    border-collapse:collapse;
    text-align: center;
    margin: 15px 60px;
    font-size: 15px;
    background: rgb(231, 238, 246);
    box-sizing: border-box;
    box-shadow: 0 12px 20px rgba(0,0,0,0.5);
    border-radius: 15px;
    color: #39456b;
    font-weight: bold;
  }
</style>
