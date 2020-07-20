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
  </div>
</template>

<script>
import { Cell, CellGroup, Image } from "vant";

export default {
  components: {
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [Image.name]: Image
  },
  data() {
    return {
      detail: {}
    };
  },
  mounted() {
    this.$ajax
      .get("fundtypemsg/fundmsg", {
        params: {
          name: this.$route.params.disease
        }
      })
      .then(response => {
        for (let i = 0; i < response.data.length; i++) {
          if (response.data[i].name === this.$route.params.fund) {
            this.detail = response.data[i];
            break;
          }
        }
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>

<style scoped>
.van-cell__label {
  white-space: pre-wrap;
}
</style>