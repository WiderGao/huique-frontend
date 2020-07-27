<template>
  <div id="doctor-wrap">
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
    <div v-if="searchValue!=''" class="search-info-desc">共{{showList.length}}条搜索结果</div>
    <van-empty v-if="showList.length==0" image="search" description="未找到相关信息"></van-empty>
    <van-cell-group v-if="searchValue===''">
      <van-cell
        v-for="item in showList"
        :key="item"
        :title="item"
        :to="$route.path+'/'+item"
        is-link
        center
      ></van-cell>
    </van-cell-group>
    <van-cell-group v-else>
      <van-cell v-for="item in showList" :key="item.id" :title="item.name" center clickable>
        <template #label>
          <div class="major">所在医院：{{item.corporation}}</div>
          <div class="major">工作科室：{{item.section}}</div>
          <div class="major">专业擅长：{{item.major}}</div>
        </template>
      </van-cell>
    </van-cell-group>
  </div>
</template>

<script>
import { Cell, CellGroup, Search, Empty } from "vant";
import api from "../api";
export default {
  components: {
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [Search.name]: Search,
    [Empty.name]: Empty,
  },
  data() {
    return {
      searchValue: "",
      sectionList: [],
      showList: [],
    };
  },
  created() {
    api.Doctor.getSection()
      .then((data) => {
        this.sectionList = data;
        this.showList = this.sectionList;
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
      api.Doctor.searchDoctorBySection(text)
        .then((data) => {
          this.showList = data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    onClear() {
      this.showList = this.sectionList;
    },
  },
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