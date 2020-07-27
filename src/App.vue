<template>
  <div class="app">
    <Nav class="Nav"/>
    <router-view class="view"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Nav from './components/Nav'
export default {
  name: 'App',
  components: {
    HelloWorld,
    Nav,
  }
}
</script>

<style>
  *{
    margin: 0px;
    padding: 0px;
  }
  .view{
    margin: 5px;
  }
  .Nav{
    margin: 0px;
    margin-left: 5px;
    margin-right: 5px;
  }
</style>
