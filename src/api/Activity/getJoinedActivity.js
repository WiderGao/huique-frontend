import axios from 'axios'
import store from '@/store'

export default function getJoinedActivity() {
    return axios.get("activitymsg/joinedactivity").then(response => {
        if (response.data.status == 200) {
            store.commit("saveJoinedActivity", response.data.msg);
            return response.data.msg;
        }
        else throw new Error(response.data.msg)
    })
}