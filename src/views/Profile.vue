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
      <div class="userpanel">
        <div class="name">{{$store.state.username==null?'':$store.state.username}}</div>
        <van-button
          v-if="$store.state.username==null"
          type="primary"
          size="large"
          round
          to="/login"
        >登录</van-button>
      </div>
    </div>
    <van-cell-group>
      <van-cell icon="like" title="个人信息" is-link to="/profile/myinfo"></van-cell>
      <van-cell icon="manager" title="我的活动" is-link to="/profile/myactivity"></van-cell>
      <van-cell icon="manager" title="我的基金" is-link to="/profile/myfund"></van-cell>
      <van-cell icon="manager" title="帮助反馈" is-link to="/FAQ"></van-cell>
      <van-cell icon="manager" title="关于灰雀" is-link to="/about"></van-cell>
    </van-cell-group>
    <div style="margin: 16px;">
      <van-button round block type="info" to="/logout" v-if="$store.state.phone!=null">退出登录</van-button>
    </div>
  </div>
</template>

<script>
import { Image, Cell, CellGroup, Button } from "vant";

export default {
  components: {
    [Image.name]: Image,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [Button.name]: Button,
  },
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
.userpanel {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
}
.avatar {
  border: 4px solid #fff;
  margin-right: 24px;
  flex-shrink: 0;
  flex-grow: 0;
}
.name {
  font-size: 20px;
  color: #fff;
  line-height: 24px;
  height: 24px;
}
</style>