import axios from 'axios'
import store from '@/store'

export default function getStoredFund() {
    return axios.get("/fundtypemsg/fundmsg/storedfund").then(response => {
        if (response.data.status == 200) {
            store.commit("saveStoredFund", response.data.msg);
            return response.data.msg;
        }
        else throw new Error(response.data.msg)
    })
}