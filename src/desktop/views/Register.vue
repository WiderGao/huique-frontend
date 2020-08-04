<template>
  <div class="register-wrap">
    <div class="box">
      <h2>注册</h2>
      <form id="form">
        <div class="inputBox">
          <input v-model="phone" type="text" name="phone" id="phone" required />
          <label>手机号</label>
        </div>
        <div class="inputBox">
          <input v-model="password" type="password" name="password" id="password" required />
          <label>密码</label>
        </div>
        <div class="inputBox">
          <input
            v-model="checkpassword"
            type="password"
            name="checkpassword"
            id="checkpassword"
            required
          />
          <label>重复密码</label>
        </div>
        <div class="inputBox">
          <input v-model="username" type="text" name="username" id="name" required />
          <label>姓名</label>
        </div>
        <input type="submit" @click.prevent="Submit" value="注册账户" />
      </form>
      <span style="float: right">
        <a href="#" @click.prevent="toLogin">点这里登录</a>
      </span>
    </div>
  </div>
</template>

<script>
import api from "@/api";
import { Message } from "element-ui";
export default {
  name: "Register",
  components: {
    [Message.name]: Message,
  },
  data() {
    return {
      phone: "",
      password: "",
      checkpassword: "",
      username: "",
    };
  },
  methods: {
    Submit() {
      if (!this.checkForm()) {
        return;
      }
      api.User.register(this.phone, this.password, this.username)
        .then((data) => {
          console.log(data);
          this.$message.success(data);
          this.$router.push({ name: "Login" });
        })
        .catch((error) => {
          this.$message.error(error.message);
          console.log(error);
        });
    },
    toLogin: function () {
      this.$router.push("/login");
    },
    checkForm: function () {
      // 表单校验
      var flag1 = this.checkPhonenumber();
      var flag2 = this.checkPassword();
      var flag3 = this.checkPasswordS();
      var flag4 = this.checkPasswordC();
      var flag5 = this.checkConfirm();
      if (!flag1) {
        this.$message.error("请输入正确的手机号");
        return false;
      }
      if (!flag2) {
        this.$message.error("密码长度需在8~16位之间");
        return false;
      }
      if (!flag3 || !flag4) {
        this.$message.error("密码中不能包含空格或特殊字符");
        return false;
      }
      if (!flag5) {
        this.$message.error("两次密码输入不相同");
        return false;
      }
      return true;
    },
    checkPhonenumber() {
      var username = document.getElementById("phone").value;
      var reg_username = new RegExp("^1[3456789]\\d{9}$");
      var flag = reg_username.test(username);
      return flag;
    },
    checkPassword() {
      var password = document.getElementById("password").value;
      var reg_password = new RegExp("^\\w{8,16}$");
      var flag = reg_password.test(password);
      return flag;
    },
    checkPasswordS() {
      var password = document.getElementById("password").value;
      var reg_passwordS = new RegExp("\\s+");
      var flag = reg_passwordS.test(password);
      return !flag;
    },
    checkPasswordC() {
      var reg_passwordC = new RegExp(
        "[^\\s\\~\\!\\@\\#\\$\\%\\^\\&\\*\\(\\)\\_\\+\\-\\/\\.\\?\\[\\]\\{\\}\\<\\>\\=0-9a-zA-Z]+"
      );
      var password = document.getElementById("password").value;
      var flag = reg_passwordC.test(password);
      return !flag;
    },
    checkConfirm() {
      var password = document.getElementById("password").value;
      var con_password = document.getElementById("checkpassword").value;
      return password == con_password;
    },
  },
};
// window.onload = function () {
//   document.getElementById("form").onsubmit = function () {
//     // 表单校验
//     var flag1 = checkPhonenumber();
//     var flag2 = checkPassword();
//     var flag3 = checkPasswordS();
//     var flag4 = checkPasswordC()
//     var flag5 = checkConfirm();
//     if(!flag1)
//     {
//       this.$message.error('请输入正确的手机号');
//       return false;
//     }
//     if(!flag2)
//     {
//       this.$message.error('密码长度需在8~16位之间');
//       return false;
//     }
//     if((!flag3)||(!flag4))
//     {
//       this.$message.error('密码中不能包含空格或特殊字符')
//       return false;
//     }
//     if(!flag5)
//     {
//       this.$message.error('两次密码输入不相同');
//       return false;
//     }
//     this.$message.success('注册成功');
//     return true
//   }
//   function checkPhonenumber() {
//     var username = document.getElementById("phone").value;
//     var reg_username = new RegExp("^1[3456789]\\d{9}$");
//     var flag = reg_username.test(username);
//     return flag;
//   }
//
//   function checkPassword() {
//     var password = document.getElementById("password").value;
//     var reg_password = new RegExp("^\\w{8,16}$");
//     var flag = reg_password.test(password);
//     return flag;
//   }
//   function checkPasswordS () {
//     var password = document.getElementById("password").value;
//     var reg_passwordS = new RegExp("\\s+");
//     var flag = reg_passwordS.test(password);
//     return !flag;
//   }
//   function checkPasswordC () {
//     var reg_passwordC = new RegExp(
//       "[^\\s\\~\\!\\@\\#\\$\\%\\^\\&\\*\\(\\)\\_\\+\\-\\/\\.\\?\\[\\]\\{\\}\\<\\>\\=0-9a-zA-Z]+");
//     var password = document.getElementById("password").value;
//     var flag = reg_passwordC.test(password);
//     return !flag;
//   }
//   function checkConfirm () {
//     var password = document.getElementById("password").value;
//     var con_password = document.getElementById("confirm").value;
//     return (password==con_password)
//   }
// }
</script>

<style scoped>
.register-wrap {
  position: absolute;
  width: 100%;
  max-width: 100%;
  height: 100%;
  margin: 0px;
  padding: 0px;
  font-family: sans-serif;
  background: url("../../assets/img/bk1.png");
  background-size: cover;
}
.box {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  padding: 40px;
  background: rgba(0, 0, 0, 0.8);
  box-sizing: border-box;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
}
.box h2 {
  margin: 0 0 30px;
  padding: 0px;
  color: #fff;
  text-align: center;
}
.box .inputBox {
  position: relative;
}
.box .inputBox input {
  width: 100%;
  padding: 10px 0px;
  font-size: 16px;
  color: #fff;
  letter-spacing: 1px;
  margin-bottom: 30px;
  border: none;
  border-bottom: 1px solid #fff;
  outline: none;
  background: transparent;
}
.box .inputBox label {
  position: absolute;
  top: 0;
  left: 0;
  padding: 10px 0px;
  font-size: 16px;
  color: #fff;
  pointer-events: none;
  transition: 0.5s;
}
.box .inputBox input:focus ~ label,
.box .inputBox input:valid ~ label {
  top: -18px;
  left: 0px;
  color: #03a9f4;
  font-size: 12px;
}
.box input[type="submit"] {
  background: transparent;
  border: none;
  outline: none;
  color: #fff;
  background: #03a9f4;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;
}
</style>
