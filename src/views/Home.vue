<template>
  <div class="home" >
    <el-container style="color: #5a78b8">
      <el-aside style="width: 80%;margin: 0px;padding: 0px;font-weight: bold">
        <hr style="margin-top: 10px;margin-left: 10px" noshade="true" size="1px"/>
      </el-aside>
        灰雀----迷途的家庭与世界的全部
    </el-container>
    <el-container>
      <el-main>
        <div class="box-card">
          <el-container>
            <el-main>
              <Carousel/>
            </el-main>
            <el-footer>
              <Speaker/>
            </el-footer>
            <Megtable class="table"/>
          </el-container>
        </div>
      </el-main>
      <el-aside width="34%">
        <el-container>
          <el-main>
            <ActivityPanel/>
          </el-main>
        </el-container>
      </el-aside>
    </el-container>
    <Buttom class="Buttom"></Buttom>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Carousel from '../components/Carousel'
import Megtable from '../components/Megtable'
import Speaker from '../components/Speaker'
import ActivityPanel from '../components/ActivityPanel'
import Buttom from '../components/Buttom'
export default {
  name: 'Home',
  components: {
    ActivityPanel,
    Carousel,
    HelloWorld,
    Megtable,
    Speaker,
    Buttom
  }
}
</script>
<style>
  .table{
    margin: 20px;
  }
  .home{
    background-color: #f6c196;
    padding: 0px;
    margin: 0px;
  }
  .box-card{
    margin: 0px;
    padding: 20px;
    background: rgb(231, 238, 246);
    box-sizing: border-box;
    box-shadow: 0 12px 20px rgba(0,0,0,0.5);
    border-radius: 10px;
  }
</style>
