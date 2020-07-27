import axios from 'axios'
import store from '@/store'

export default function joinActivity(activityid) {
    return axios.get("activitymsg/joinactivity", {
        params: {
            activityid: activityid,
        },
    }).then(response => {
        if (response.data.status == 200) {
            return response.data.msg;
        }
        else throw new Error(response.data.msg)
    })
}