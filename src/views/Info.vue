<template>
  <div class="info-wrap">
    <van-cell-group>
      <van-cell title="基金信息查询" is-link to="fund" center>
        <template #icon>
          <v-icon name="coins"></v-icon>
        </template>
      </van-cell>
      <van-cell title="医生信息查询" is-link to="doctor" center>
        <template #icon>
          <v-icon name="briefcase-medical"></v-icon>
        </template>
      </van-cell>
    </van-cell-group>
  </div>
</template>

<script>
import { Cell, CellGroup } from "vant";
import Vicon from "vue-awesome/components/Icon";

export default {
  components: {
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    "v-icon": Vicon,
  },
};
</script>

<style scoped>
.fa-icon {
  font-size: 36px;
  margin-right: 0.25em;
  width: 1.6em;
}
</style>