<template>
  <div id="profile-wrap">
    <div class="user-info">
      <van-image
        class="avatar"
        round
        width="6.5rem"
        height="6.5rem"
        src="https://img.yzcdn.cn/vant/cat.jpeg"
      />
      <div class="name">银河渡舟</div>
    </div>
    <van-cell-group>
      <van-cell icon="like" title="个人信息" is-link></van-cell>
      <van-cell icon="manager" title="我的活动" is-link></van-cell>
      <van-cell icon="manager" title="我的基金" is-link></van-cell>
      <van-cell icon="manager" title="帮助反馈" is-link></van-cell>
      <van-cell icon="manager" title="关于灰雀" is-link></van-cell>
    </van-cell-group>
  </div>
</template>

<script>
import { Image, Cell, CellGroup } from "vant";

export default {
  components: {
    [Image.name]: Image,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup
  }
};
</script>

<style>
.user-info {
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  padding: 18px;
  width: 100%;
  background-color: #1989fa;
}
.avatar {
  border: 4px solid #fff;
}
.name {
  font-size: 24px;
  color: #fff;
  line-height: 24px;
  height: 24px;
  margin-left: 24px;
}
</style>