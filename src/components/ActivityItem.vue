<template>
  <div class="activity-detail-wrap" @click="onClick">
    <!-- 这里card原本用于商品展示，currency是货币符号
    currency=""用来隐藏货币符号-->
    <van-card
      currency
      :desc="detail.place"
      :title="detail.name"
      :thumb="detail.img"
      :tag="detail.status"
    >
      <template #price>
        <v-icon name="regular/clock" style="margin-right:6px"></v-icon>
        <span>{{detail.deadline+'报名截止'}}</span>
      </template>
      <template #desc>
        <v-icon name="map-marker-alt" style="margin-right:6px"></v-icon>
        <span>{{detail.place}}</span>
      </template>
    </van-card>
    <van-divider :style="{ margin: '0' }"></van-divider>
  </div>
</template>

<script>
import { Card, Divider } from "vant";
import Vicon from "vue-awesome/components/Icon";
import "vue-awesome/icons/regular/clock";
import "vue-awesome/icons/map-marker-alt";

export default {
  /* details 需要包括：
   * starttime 开始时间
   * endtime 结束时间
   * deadline 报名截止时间
   * activityid 活动ID
   * name 活动名称
   * place 地址
   * remark 备注
   * status 状态
   * essay_url 相关文章
   * img 封面图片
   */
  props: ["detail", "to", "href"],
  components: {
    [Card.name]: Card,
    [Divider.name]: Divider,
    "v-icon": Vicon,
  },
  data() {
    return {};
  },
  methods: {
    onClick() {
      if (this.to) this.$router.push(this.to);
      if (this.href) window.open(this.href, "_blank");
    },
  },
};
</script>

<style scoped>
.van-card__content {
  text-align: right;
}
.van-card__price-integer {
  font-size: 14px;
  font-weight: bold;
}
.van-card__thumb {
  width: 140px;
  height: 96px;
}
.van-card__title {
  font-size: 16px;
  line-height: 1.6;
}
.van-card__desc {
  font-size: 14px;
  line-height: 1.6;
}
</style>