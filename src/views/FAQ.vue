<template>
  <div class="faq-wrap">
    <van-cell-group>
      <van-cell v-for="item in faq" :key="item.helpid" :title="item.question" :label="item.answer"></van-cell>
    </van-cell-group>
    <div style="margin: 16px;">
      <van-button round block type="info" @click="handleFeedback">我要反馈</van-button>
    </div>
  </div>
</template>

<script>
import { Cell, CellGroup, Button } from "vant";

export default {
  components: {
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
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

<style>
</style>