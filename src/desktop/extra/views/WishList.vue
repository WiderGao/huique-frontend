<template>
  <div class="wishlist-wrap">
    <el-radio-group class="radio" v-model="radio">
      <el-radio-button label="心愿单"></el-radio-button>
      <el-radio-button label="绘画墙"></el-radio-button>
    </el-radio-group>
    <div class="wishlist" v-if="radio=='心愿单'">
      <wish
        class="wish"
        v-for="wish in wishlist"
        :key="wish.id"
        :author="wish.author"
        :wish="wish.wish"
      ></wish>
      <i></i>
      <i></i>
      <i></i>
      <i></i>
      <i></i>
    </div>
    <div class="paintlist" v-if="radio=='绘画墙'">
      <paint
        class="painting"
        v-for="paint in paintlist"
        :key="paint.id"
        :author="paint.author"
        :paint="paint.painting"
      ></paint>
    </div>
  </div>
</template>

<script>
import api from "@/api";
import { Radio, RadioButton, RadioGroup } from "element-ui";
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
    [Radio.name]: Radio,
    [RadioButton.name]: RadioButton,
    [RadioGroup.name]: RadioGroup,
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
            author: item.author,
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
    width: 160px;
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
    width: 260px;
    height: 240px;
    margin: 20px;
    &:last-child {
      flex-grow: 0;
      margin-right: auto;
    }
  }
  > i {
    width: 260px;
    margin: 20px;
  }
}
.paintlist {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin: 20px 20px 0 0;
  .painting {
    flex-grow: 1;
    margin: 0 0 20px 20px;
    &:last-child {
      flex-grow: 0;
      margin-right: auto;
    }
  }
}
</style>