<template>
  <div class="fund-detail-wrap">
    <van-cell-group>
      <van-cell>
        <template #title>
          <div class="title">{{detail.name}}</div>
        </template>
      </van-cell>
      <van-cell title="备案号" v-if="detail.record_num" :label="detail.record_num" clickable center></van-cell>
      <van-cell title="资助对象" v-if="detail.people" :label="detail.people" clickable center></van-cell>
      <van-cell title="资助方式" v-if="detail.mode" :label="detail.mode" clickable center></van-cell>
      <van-cell title="申请流程" v-if="detail.process_img||detail.process_text" clickable center>
        <template #label>
          <van-image v-if="detail.process_img" :src="detail.process_img"></van-image>
          <div v-if="detail.process_text">{{detail.process_text}}</div>
        </template>
      </van-cell>
      <van-cell title="联系方式" v-if="detail.contact" :label="detail.contact" clickable center></van-cell>
      <van-cell title="申请表下载" v-if="detail.form" :url="detail.form" is-link center></van-cell>
    </van-cell-group>
    <div style="margin: 16px;">
      <van-button v-if="stored" round block type="info" @click="handleCancel">取消收藏</van-button>
      <van-button v-else round block type="info" @click="handleStore">收藏</van-button>
    </div>
  </div>
</template>

<script>
import { Cell, CellGroup, Image, Button, Toast } from "vant";
import api from "@/api";
export default {
  components: {
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [Image.name]: Image,
    [Button.name]: Button,
    [Toast.name]: Toast,
  },
  data() {
    return {
      detail: {},
    };
  },
  computed: {
    stored() {
      return this.$store.state.storedFund
        .map((item) => item.fundid)
        .includes(this.detail.fundid);
    },
  },
  methods: {
    //收藏
    handleStore() {
      api.Fund.storeFund(this.detail.fundid)
        .then((data) => {
          this.$store.commit("addStoredFund", this.detail);
          this.$toast.success(data);
        })
        .catch((error) => {
          this.$toast.fail(error.message);
          console.log(error);
        });
    },
    //取消收藏
    handleCancel() {
      api.Fund.dropFund(this.detail.fundid)
        .then((data) => {
          this.$store.commit("removeStoredFund", this.detail.fundid);
          this.$toast.success(data);
        })
        .catch((error) => {
          this.$toast.fail(error.message);
          console.log(error);
        });
    },
  },
  created() {
    api.Fund.getOneFund(this.$route.params.fundid)
      .then((data) => {
        this.detail = data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style scoped>
.van-cell__label {
  white-space: pre-wrap;
}
</style>