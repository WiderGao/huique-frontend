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
      <van-button
        v-if="$store.state.storedFund.map(item => item.fundid).includes(detail.fundid)"
        round
        block
        type="info"
        @click="handleCancel"
      >取消收藏</van-button>
      <van-button v-else round block type="info" @click="handleStore">收藏</van-button>
    </div>
  </div>
</template>

<script>
import { Cell, CellGroup, Image, Button, Toast } from "vant";

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
  methods: {
    //收藏
    handleStore() {
      this.$ajax
        .get("/fundtypemsg/fundmsg/storefund", {
          params: {
            fundid: this.detail.fundid,
          },
        })
        .then((response) => {
          if (response.data.status == 200) {
            this.$store.commit("addStoredFund", this.detail);
            this.$toast.success(response.data.msg);
          } else this.$toast.fail(response.data.msg);
        });
    },
    //取消收藏
    handleCancel() {
      this.$ajax
        .get("/fundtypemsg/fundmsg/cancelfund", {
          params: {
            fundid: this.detail.fundid,
          },
        })
        .then((response) => {
          if (response.data.status == 200) {
            this.$store.commit("removeStoredFund", this.detail.fundid);
            this.$toast.success(response.data.msg);
          } else this.$toast.fail(response.data.msg);
        });
    },
  },
  created() {
    this.$ajax
      .get("fundtypemsg/fundmsg", {
        params: {
          fundid: this.$route.params.fundid,
        },
      })
      .then((response) => {
        if (response.data.status == 200) {
          this.detail = response.data.msg;
        }
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