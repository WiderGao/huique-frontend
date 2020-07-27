import axios from 'axios'
import store from '@/store'

export default function changePass(oldPassword, newPassword) {
    return axios.get("/usermsg")
        .get("/usermsg/changepass", {
            params: {
                oldPassword: oldPassword,
                newPassword: newPassword,
            },
        }).then(response => {
            if (response.data.status == 200) {
                return response.data.msg;
            }
            else throw new Error(response.data.msg)
        })
}