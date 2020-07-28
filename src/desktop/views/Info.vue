<template>
  <div class="app">
    <FundSearch/>
    <br/>
    <DoctorSearch/>
  </div>
</template>

<script>
  import FundSearch from '../components/FundSearch'
  import DoctorSearch from '../components/DoctorSearch'
  export default {
    name: 'Info',
    components:{
      FundSearch,
      DoctorSearch
    }
  }
</script>

<style scoped>
  .app{
    background-color: #f9ccab;
    margin: 0px;
    padding: 0px;
  }
</style>
