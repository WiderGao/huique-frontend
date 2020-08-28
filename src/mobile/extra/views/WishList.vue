<template>
  <div class="wishlist-wrap">
    <van-tabs v-model="radio" sticky swipeable animated>
      <van-tab title="心愿单">
        <div class="wishlist">
          <wish
            class="wish"
            v-for="wish in wishlist"
            :key="wish.id"
            :author="wish.author"
            :wish="wish.wish"
          ></wish>
        </div>
      </van-tab>
      <van-tab title="绘画墙">
        <div class="paintlist">
          <paint
            class="painting"
            v-for="paint in paintlist"
            :key="paint.id"
            :author="paint.alias"
            :paint="paint.painting"
          ></paint>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import api from "@/api";
import { Tab, Tabs } from "vant";
import Wish from "../components/Wish.vue";
import Paint from "../components/Paint.vue";
export default {
  data() {
    return {
      radio: "心愿单",
      wishlist: [],
      paintlist: [],
    };
  },
  components: {
    wish: Wish,
    paint: Paint,
    [Tab.name]: Tab,
    [Tabs.name]: Tabs,
  },
  created() {
    api.Extra.getWishList()
      .then((data) => {
        this.wishlist = data.map((item) => {
          return {
            id: item.id,
            author: item.author,
            wish: item.wish,
          };
        });
        this.paintlist = data.map((item) => {
          return {
            id: item.id,
            alias: item.alias,
            painting: item.painting,
          };
        });
      })
      .catch((error) => {
        console.log(error);
      });
  },
  mounted() {},
};
</script>

<style lang="scss" scoped>
.radio {
  text-align: center;
  display: block;
  ::v-deep .el-radio-button__inner {
    height: 48px;
    width: 100% !important;
    line-height: 48px;
    border-radius: 24px;
    padding: 0 20px;
    margin: 10px;
    font-weight: bold;
    box-shadow: 0 3px 3px rgba(0, 0, 0, 0.3) !important;
  }
}
.wishlist {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  .wish {
    width: 100%;
    height: 200px;
    margin: 12px;
    &:last-child {
      flex-grow: 0;
      margin-right: auto;
    }
  }
}
.paintlist {
  display: flex;
  flex-direction: column;
  .painting {
    flex-grow: 1;
    margin-bottom: 10px;
  }
}
</style>