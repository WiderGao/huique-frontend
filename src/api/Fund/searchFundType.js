import axios from 'axios'
import store from '@/store'

export default function searchFundType(keyword) {
    return axios.get("search/fundtype", {
        params: { keyword: keyword },
    }).then(response => {
        if (response.data.status == 200) {
            return response.data.msg;
        }
        else throw new Error(response.data.msg)
    })
}