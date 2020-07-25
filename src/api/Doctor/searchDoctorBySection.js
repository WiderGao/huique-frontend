import axios from 'axios'
import store from '@/store'

export default function searchDoctorBySection(keyword) {
    return axios.get("search/expert", {
        params: { keyword: keyword },
    }).then(response => {
        if (response.data.status == 200) {
            return response.data.msg;
        }
        else throw new Error(response.data.msg)
    })
}