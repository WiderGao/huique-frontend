<template>
    <div class="app">
      <div class="box">
        <h2>登录</h2>
        <form>
          <div class="inputBox">
            <input v-model="phone" type="text" name="phone" required=""></input>
            <label>手机号</label>
          </div>
          <div class="inputBox">
            <input v-model="password" type="password" name="password" required="" ></input>
            <label>密码</label>
          </div>
          <input type="submit" name="" value="登录" @click.prevent="Submit"></input>
        </form>
        <span style="float: right">
          <a href="#" @click.prevent="toRegister">点这里注册</a>
        </span>
      </div>
    </div>
</template>

<script>
  import api from '@/api'
  import {Message} from "element-ui";
  export default {
    name: 'Login',
    components: {
      [Message.name]: Message,
    },
    methods:{
      toRegister:function () {
        this.$router.push("/Register")
      },
      Submit:function () {
        api.User.login(this.phone, this.password)
          .then((data) => {
            this.$message({
              message: data,
              type: 'success'
            });
            this.$router.push({ name: "Home" });
          })
          .catch((error) => {
            this.$message.error(error.message);
            console.log(error);
          });
      }
    },
    data(){
      return {
        phone: "",
        password: "",
      };
    },
  }
</script>

<style scoped>
  .app{
    position: absolute;
    width: 100%;
    height: 100%;
    margin: 0px;
    padding: 0px;
    font-family: sans-serif;
    background: url("../../assets/img/bk1.png");
    background-size: cover;
  }
  .box{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 400px;
    padding: 40px;
    background: rgba(0,0,0,0.8);
    box-sizing: border-box;
    box-shadow: 0 15px 25px rgba(0,0,0,0.5);
    border-radius: 10px;
  }
  .box h2{
    margin: 0 0 30px;
    padding: 0px;
    color: #fff;
    text-align: center;
  }
  .box .inputBox{
    position: relative;
  }
  .box .inputBox input{
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
  .box .inputBox label{
    position: absolute;
    top:0;
    left: 0;
    padding: 10px 0px;
    font-size: 16px;
    color: #fff;
    pointer-events: none;
    transition: .5s;
  }
  .box .inputBox input:focus ~ label,
  .box .inputBox input:valid ~ label{
    top: -18px;
    left: 0px;
    color: #03a9f4;
    font-size: 12px;
  }
  .box input[type="submit"]
  {
    background: transparent;
    border: none;
    outline: none;
    color: #fff;
    background: #03a9f4;
    padding: 10px 20px;
    cursor:pointer;
    border-radius: 5px;
  }

</style>
