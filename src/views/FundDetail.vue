<template>
  <div class="fund-detail-wrap">
    <van-cell-group>
      <van-cell>
        <template #title>
          <h2>{{detail.name}}</h2>
        </template>
      </van-cell>
      <van-cell title="备案号" :label="detail.record_num" clickable center></van-cell>
      <van-cell title="资助对象" :label="detail.people" clickable center></van-cell>
      <van-cell title="资助方式" :label="detail.mode" clickable center></van-cell>
      <van-cell title="申请流程" clickable center>
        <template #label>
          <van-image :src="detail.process_img"></van-image>
        </template>
      </van-cell>
      <van-cell title="联系方式" :label="detail.contact" clickable center></van-cell>
      <van-cell title="申请表下载" :url="detail.form" is-link center></van-cell>
    </van-cell-group>
    <div style="margin: 16px;">
      <van-button v-if="stored" round block type="info" @click="handleCancel">取消收藏</van-button>
      <van-button v-else round block type="info" @click="handleStore">收藏</van-button>
    </div>
  </div>
</template>

<script>
import { Cell, CellGroup, Image, Button, Toast } from "vant";
import api from "../api";
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