<template>
  <div class="doctor-list-wrap">
    <van-cell-group>
      <van-cell v-for="item in doctorList" :key="item.id" :title="item.name" center clickable>
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
import { Cell, CellGroup } from "vant";
export default {
  components: {
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
  },
  data() {
    return {
      doctorList: [],
    };
  },
  mounted() {
    this.$ajax
      .get("sectionmsg/expert", {
        params: {
          section: this.$route.params.section,
        },
      })
      .then((response) => {
        if (response.data.status == 200) this.doctorList = response.data.msg;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style>
</style>