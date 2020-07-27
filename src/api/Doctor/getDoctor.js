import axios from 'axios'
import store from '@/store'

export default function getDoctor(section) {
    return axios.get("sectionmsg/expert", {
        params: {
            section: section,
        },
    }).then(response => {
        if (response.data.status == 200) {
            return response.data.msg;
        }
        else throw new Error(response.data.msg)
    })
}