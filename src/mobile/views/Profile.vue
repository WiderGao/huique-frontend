<template>
  <div class="profile-wrap">
    <div class="user-info">
      <van-image
        class="avatar"
        round
        width="6.5rem"
        height="6.5rem"
        :src="require('@/assets/img/avatar.png')"
      />
      <div class="name">{{$store.state.username==null?'你还没有登录哦~':$store.state.username}}</div>
    </div>
    <div class="userpanel">
      <div class="action" v-if="$store.state.username==null">
        <van-button type="primary" size="large" round to="/login">登录</van-button>
        <van-button type="primary" size="large" round to="/register">注册</van-button>
      </div>
      <van-cell-group>
        <van-cell title="个人信息" is-link center to="/profile/myinfo">
          <template #icon>
            <v-icon name="user-circle"></v-icon>
          </template>
        </van-cell>
        <van-cell icon="manager" title="我的活动" is-link center to="/profile/myactivity">
          <template #icon>
            <v-icon name="shoe-prints"></v-icon>
          </template>
        </van-cell>
        <van-cell icon="manager" title="我的基金" is-link center to="/profile/myfund">
          <template #icon>
            <v-icon name="coins"></v-icon>
          </template>
        </van-cell>
        <van-cell icon="manager" title="帮助反馈" is-link center to="/FAQ">
          <template #icon>
            <v-icon name="question"></v-icon>
          </template>
        </van-cell>
        <van-cell icon="manager" title="关于灰雀" is-link center to="/about">
          <template #icon>
            <v-icon name="info"></v-icon>
          </template>
        </van-cell>
      </van-cell-group>
    </div>

    <div class="exit" style="padding: 16px;" v-if="$store.state.username!=null">
      <van-button round block type="info" to="/logout" v-if="$store.state.phone!=null">退出登录</van-button>
    </div>
  </div>
</template>

<script>
import { Image, Cell, CellGroup, Button } from "vant";
import Vicon from "vue-awesome/components/Icon";
import "vue-awesome/icons/user-circle";
import "vue-awesome/icons/shoe-prints";
import "vue-awesome/icons/coins";
import "vue-awesome/icons/question";
import "vue-awesome/icons/info";

export default {
  components: {
    [Image.name]: Image,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [Button.name]: Button,
    "v-icon": Vicon,
  },
};
</script>

<style scoped>
.profile-wrap {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}
.user-info {
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  padding: 18px;
  width: 100%;
  height: 170px;
}
.userpanel .action >>> .van-button:first-child {
  margin: 14px;
}
.userpanel .action >>> .van-button {
  margin: 14px 14px 14px 0;
}
.action {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
}
.avatar {
  border: 5px solid #fff;
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
.userpanel {
  flex-grow: 1;
}
.fa-icon {
  margin-right: 1em;
  width: 1.6em;
}
</style>