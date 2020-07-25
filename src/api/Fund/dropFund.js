import axios from 'axios'
import store from '@/store'

export default function dropFund(fundid) {
    return axios.get("/fundtypemsg/fundmsg/cancelfund", {
        params: {
            fundid: fundid,
        },
    }).then(response => {
        if (response.data.status == 200) {
            return response.data.msg;
        }
        else throw new Error(response.data.msg)
    })
}