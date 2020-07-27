import axios from 'axios'
import store from '@/store'

export default function getClassifiedFund(typename) {
    return axios.get("fundtypemsg/fundmsg", {
        params: {
            name: typename,
        },
    }).then(response => {
        if (response.data.status == 200) {
            return response.data.msg;
        }
        else throw new Error(response.data.msg)
    })
}