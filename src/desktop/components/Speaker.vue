<template>
  <div class="speaker">
    <hr noshade="true" size="3px" color="#3986e5" style="margin-bottom: 5px"/>
    <div style="float: left">
      <img src="@/assets/img/speaker.png"/>
    </div>
    <div style="float: left;font-size: 20px">
      <h6>{{ msg }}</h6>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Speaker',
    data: function () {
      return{
        msg: "欢迎浏览灰雀官方网站.这里有最齐全的医疗移民服务信息!",
      }
    }
  }
</script>

<style scoped>

</style>
