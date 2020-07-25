import axios from 'axios'
import store from '@/store'

export default function register(phone, password, username) {
    return axios.post("register", {
        phone: phone,
        password: password,
        username: username,
    }).then(response => {
        if (response.data.status == 200) {
            return response.data.msg;
        }
        else throw new Error(response.data.msg)
    })
}