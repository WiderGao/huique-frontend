<template>
  <div class="fund-wrap">
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
          />
        </form>
        <div
          v-if="searchValue===''"
          class="search-info-desc"
        >{{ fundType.length }}大病种，{{ sum(fundType.map(item => item.num)) }}条常见信息整合</div>
        <div v-else class="search-info-desc">共{{ showList.length }}条搜索结果</div>
        <van-empty v-if="showList.length==0" image="search" description="未找到相关信息" />
        <van-cell-group>
          <van-cell
            v-for="item in showList"
            :key="item.fundtypeid"
            :title="item.name"
            :label="item.num+'条基金信息'"
            :to="'/fund/'+item.name"
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
              />
            </template>
          </van-cell>
        </van-cell-group>
      </van-tab>
      <van-tab title="申请帮助">
        <div class="search-info-desc">灰雀志愿者专人帮助/迅速回复/帮助申请</div>
        <van-cell-group>
          <van-cell title="代写轻松筹/水滴筹" label="仅为部分人服务" is-link center to="/raise-help">
            <template #icon>
              <van-image
                round
                width="44px"
                height="44px"
                fit="cover"
                :src="require('@/assets/img/chou.png')"
                style="margin-right:10px"
              />
            </template>
          </van-cell>
          <van-cell title="帮助申请基金" label="仅为部分人服务" is-link center to="/apply-help">
            <template #icon>
              <van-image
                round
                width="44px"
                height="44px"
                fit="cover"
                :src="require('@/assets/img/shen.png')"
                style="margin-right:10px"
              />
            </template>
          </van-cell>
        </van-cell-group>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import { Cell, CellGroup, Image, Search, Tab, Tabs, Empty } from "vant";
import api from "@/api";
export default {
  components: {
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [Image.name]: Image,
    [Search.name]: Search,
    [Tab.name]: Tab,
    [Tabs.name]: Tabs,
    [Empty.name]: Empty,
  },
  data() {
    return {
      fundType: [],
      showList: [],
      searchValue: "",
      activeTab: 0,
    };
  },
  created() {
    api.Fund.getFundType()
      .then((data) => {
        this.fundType = data;
        this.showList = this.fundType;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {
    onSearch(text) {
      if (text === "") {
        this.onClear();
        return;
      }
      api.Fund.searchFundType(text)
        .then((data) => {
          this.showList = this.fundType.filter((item) =>
            data.includes(item.name)
          );
        })
        .catch((error) => {
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
    },
  },
};
</script>

<style scoped>
.fund-wrap {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}
.van-tabs {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}
.fund-wrap >>> .van-tabs__content {
  flex-grow: 1;
}
.search-info-desc {
  padding: 4px 16px;
  font-size: 12px;
  color: #969799;
  background-color: #fff;
  width: 100%;
}
.fund-wrap >>> .van-tabs__wrap {
  height: 46px;
}
</style>
