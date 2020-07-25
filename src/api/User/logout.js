import axios from 'axios'
import store from '@/store'
import Vue from 'vue'
export default function logout() {
    return axios.post("logout")
        .then((response) => {
            if (response.data.status == 200) {
                //清除用户登录信息
                store.dispatch("clearLogin");
                Vue.$cookies.remove("logged");
                return response.data.msg;
            }
            else throw new Error(response.data.msg)
        })
}