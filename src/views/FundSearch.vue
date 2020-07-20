<template>
  <div id="fund-wrap">
    <van-tabs v-model="activeTab" sticky swipeable animated>
      <van-tab title="基金信息">
        <!-- 在 van-search 外层增加 form 标签，且 action 不为空，即可在输入法中显示搜索按钮。 -->
        <form action="/">
          <van-search
            v-model="searchValue"
            shape="round"
            placeholder="请输入病名"
            @input="onSearch"
            @clear="onClear"
          ></van-search>
        </form>
        <div
          v-if="searchValue===''"
          class="search-info-desc"
        >{{fundType.length}}大病种，{{sum(fundType.map(item => item.num))}}条常见信息整合</div>
        <div v-else class="search-info-desc">共{{showList.length}}条搜索结果</div>
        <van-cell-group>
          <van-cell
            v-for="item in showList"
            :key="item.fundtypeid"
            :title="item.name"
            :label="item.num+'条基金信息'"
            :to="$route.path+'/'+item.name"
            is-link
            center
          >
            <template #icon>
              <van-image
                round
                width="44px"
                height="44px"
                fit="cover"
                :src="item.img"
                style="margin-right:10px"
              ></van-image>
            </template>
          </van-cell>
        </van-cell-group>
      </van-tab>
      <van-tab title="申请帮助">
        <van-cell-group>
          <van-cell title="代写轻松筹/水滴筹" label="仅为部分人服务" is-link center to="/raise-help">
            <template #icon>
              <van-image
                round
                width="44px"
                height="44px"
                fit="cover"
                :src="require('../assets/img/chou.png')"
                style="margin-right:10px"
              ></van-image>
            </template>
          </van-cell>
          <van-cell title="帮助申请基金" label="仅为部分人服务" is-link center to="/apply-help">
            <template #icon>
              <van-image
                round
                width="44px"
                height="44px"
                fit="cover"
                :src="require('../assets/img/shen.png')"
                style="margin-right:10px"
              ></van-image>
            </template>
          </van-cell>
        </van-cell-group>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import { Cell, CellGroup, Image, Search, Tab, Tabs } from "vant";
export default {
  components: {
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [Image.name]: Image,
    [Search.name]: Search,
    [Tab.name]: Tab,
    [Tabs.name]: Tabs
  },
  data() {
    return {
      fundType: [],
      showList: [],
      searchValue: "",
      activeTab: 0
    };
  },
  methods: {
    onSearch(text) {
      if (text === "") {
        this.onClear();
        return;
      }
      this.$ajax
        .get("search/fundtype", {
          params: { keyword: text }
        })
        .then(response => {
          this.showList = this.fundType.filter(item =>
            response.data.includes(item.name)
          );
        })
        .catch(error => {
          console.log(error);
        });
    },
    onClear() {
      this.showList = this.fundType;
    },
    sum(arr) {
      let summary = 0;
      for (let i = 0; i < arr.length; i++) summary += arr[i];
      return summary;
    }
  },
  mounted() {
    this.$ajax.get("fundtypemsg").then(response => {
      this.fundType = response.data;
      this.showList = this.fundType;
    });
  }
};
</script>

<style scoped>
.search-info-desc {
  padding: 4px 16px;
  font-size: 12px;
  color: #969799;
  background-color: #fff;
  width: 100%;
}
</style>