import axios from 'axios'
import store from '@/store'
import Vue from 'vue'
import getUserInfo from './getUserInfo.js'
import getJoinedActivity from '@/api/Activity/getJoinedActivity.js'
import getStoredFund from '@/api/Fund/getStoredFund.js'

export default function login(phone, password) {
    return axios.post("login", {
        phone: phone,
        password: password,
    }).then(response => {
        if (response.data.status == 200) {
            Promise.all([getUserInfo(), getJoinedActivity(), getStoredFund()]).then(() => {
                Vue.$cookies.set("logged", "true", "14d");
                return response.data.msg;
            }).catch(error => {
                //错误后清除本地登录信息
                store.dispatch("clearLogin");
                Vue.$cookies.remove("logged");
                throw error;
            })
        }
        else {
            //错误后清除本地登录信息
            store.dispatch("clearLogin");
            Vue.$cookies.remove("logged");
            throw new Error(response.data.msg)
        }
    })
}