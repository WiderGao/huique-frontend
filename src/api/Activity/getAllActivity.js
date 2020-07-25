import axios from 'axios'
import store from '@/store'

export default function getAllActivity() {
    return axios.get("activitymsg").then(response => {
        if (response.data.status == 200) {
            return response.data.msg;
        }
        else throw new Error(response.data.msg)
    })
}