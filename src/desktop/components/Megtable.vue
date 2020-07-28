<template>
  <el-table
    :data="tableData"
    stripe
    class="table">
    <el-table-column
      prop="date"
      label="日期"
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="180">
    </el-table-column>
    <el-table-column
      prop="comment"
      label="评论">
    </el-table-column>
  </el-table>
</template>

<<script>
  export default {
    name:"Megtable",
    data() {
      return {
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          comment: '加油!!!'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          comment: '加油!!!'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          comment: '加油!!!'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          comment: '加油!!!'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          comment: '加油!!!'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          comment: '加油!!!'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          comment: '加油!!!'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          comment: '加油!!!'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          comment: '加油!!!'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          comment: '加油!!!'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          comment: '加油!!!'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          comment: '加油!!!'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          comment: '加油!!!'
        }]
      }
    }
  }
</script>

<style scoped>

  .table{
    width: 95%;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
  }
</style>
