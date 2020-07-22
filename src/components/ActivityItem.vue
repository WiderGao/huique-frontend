<template>
  <div class="activity-detail-wrap">
    <!-- 这里card原本用于商品展示，currency是货币符号
    currency=""用来隐藏货币符号-->
    <van-card
      currency
      :price="detail.deadline+'报名截止'"
      :desc="detail.place"
      :title="detail.name"
      :thumb="detail.img"
    />
    <van-divider :style="{ borderColor: '#323233', margin: '0' }"></van-divider>
  </div>
</template>

<script>
import { Card, Divider } from "vant";

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
  props: ["detail"],
  components: {
    [Card.name]: Card,
    [Divider.name]: Divider
  },
  data() {
    return {};
  }
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
</style>