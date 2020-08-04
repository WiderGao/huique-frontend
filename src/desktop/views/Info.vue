<template>
  <div class="info-wrap">
    <FundSearch />
    <br />
    <DoctorSearch />
  </div>
</template>

<script>
import FundSearch from "../components/FundSearch";
import DoctorSearch from "../components/DoctorSearch";
export default {
  name: "Info",
  components: {
    FundSearch,
    DoctorSearch,
  },
};
</script>

<style scoped>
.info-wrap {
  padding: 0px;
}
</style>
