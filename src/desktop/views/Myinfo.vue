<template>
  <div class="app">
    <el-container>
      <el-main>
        <el-form :model="ruleForm"  status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <el-form-item  label="姓名" prop="name">
            <el-input v-model="ruleForm.name" type="text"  autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item  label="手机号" prop="phone">
            <el-input v-model="ruleForm.phone" type="password" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="住址" prop="address">
            <el-input v-model="ruleForm.address" type="text" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="handleSubmit">更新</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
          </el-form-item>
        </el-form >
      </el-main>
      <el-footer></el-footer>
      <el-main>
        <el-form :model="ruleForm1" status-icon :rules="rules1" ref="ruleForm1" label-width="100px" class="demo-ruleForm">
          <el-form-item label="旧密码" prop="oldPassword">
            <el-input v-model="ruleForm1.oldPassword" type="password" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="新密码" prop="newPassword">
            <el-input v-model="ruleForm1.newPassword" type="password" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="确认密码" prop="checkPassword">
            <el-input v-model="ruleForm1.checkPassword" type="password"  autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="handleChangePass">提交</el-button>
            <el-button @click="resetForm('ruleForm1')">重置</el-button>
          </el-form-item>
        </el-form>
      </el-main>
      <el-footer></el-footer>
      <el-main>
        <h2>收藏的基金</h2>
        <hr/>
        <MyFund></MyFund>
        <br/>
        <h2>收藏的活动</h2>
        <hr/>
        <MyActivities></MyActivities>
      </el-main>
    </el-container>
  </div>
</template>

  <script>
    import api from '@/api'
    import MyFund from '../components/MyFund'
  import MyActivities from '../components/MyActivities'
  export default {
    name: 'Myinfo',
    data() {
      let validatePass = (rule, value, callback) => {
        // 长度为8-16字符
        let isRightLength = /^.{8,16}$/.test(value)
        // 字母
        let hasLetter = /[a-zA-Z]+/.test(value)
        // 匹配数字
        let hasNum = /[0-9]+/.test(value)
        // 特殊字符
        let hasSpecial = /[\~\!\@\#\$\%\^\&\*\(\)\_\+\-\/\.\?\[\]\{\}\<\>\=]+/.test(
          value
        )
        // 空格
        let hasSpace = /\s+/.test(value)
        // 非法字符
        let hasOtherChar = /[^\s\~\!\@\#\$\%\^\&\*\(\)\_\+\-\/\.\?\[\]\{\}\<\>\=0-9a-zA-Z]+/.test(
          value
        )
        hasSpecial = hasSpecial && !hasOtherChar
        if (value === '') {
          callback(new Error('请输入密码'))
        } else if (!isRightLength) {
          callback(new Error('密码长度为8-16位字符'))
        } else if (hasSpace) {
          callback(new Error('密码不能包含空格'))
        } else if (hasOtherChar) {
          callback(new Error('密码包含非法字符！'))
        } else {
          if (this.ruleForm1.checkPass !== '') {
            this.$refs.ruleForm1.validateField('checkPass')
          }
          callback()
        }
      }
      let validateCheckPass = (rule, value, callback) => {
          if (value === "") {
            callback(new Error("请再次输入密码"));
          } else if (value !== this.ruleForm1.pass) {
            callback(new Error("两次输入密码不一致！"));
          } else {
            callback();
          }
        };
      let validatePhone = (rule, value, callback) => {
        let isNumber = /^[0-9]*$/.test(value);
        if (value === "") {
          callback(new Error("请输入手机号"));
        } else if (!isNumber) {
          callback(new Error("请输入正确手机号"));
        } else {
          callback();
        }
      };
      return {
        ruleForm:{
          name:"",
          phone:"",
          address:""
        },
        ruleForm1: {
          oldPassword: "",
          newPassword: "",
          checkPassword: "",
        },
        rules:{
          phone: {
            validator: validatePhone,
            required: true,
            trigger: "blur"
          },
        },
        rules1: {
          newPassword: [{
            validator: validatePass,
            required: true,
            trigger: "blur"
          }],
          checkPassword: {
            validator: validateCheckPass,
            required: true,
            trigger: "blur"
          },
        },
    };
    },

    methods:{
      handleSubmit: function () {
        api.User.changeUserInfo(
          this.ruleForm.phone,
          this.ruleForm.name,
          this.ruleForm.address,
          this.$store.state.fund_applicant_detail,
          this.$store.state.activity_volunteer_detail
        )
          .then((data) => {
            this.$message({
              message: data,
              type: 'success'
            });
          })
          .catch((error) => {
            this.$message.error(error.message);
            console.log(error);
          });
      },
      handleChangePass(){
        api.User.changePass(this.ruleForm1.oldPassword, this.ruleForm1.newPassword)
          .then((data) => {
            this.$message({
              message: data,
              type: 'success'
            });
          })
          .catch((error) => {
            tthis.$message.error(error.message);
            console.log(error);
          });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
    },
    mounted () {
      this.ruleForm.name = this.$store.state.username;
      this.ruleForm.phone = this.$store.state.phone
      this.ruleForm.address =  this.$store.state.address;
    },
    components:{
      MyActivities,
      MyFund
    },
  }
</script>

<style scoped>

</style>
