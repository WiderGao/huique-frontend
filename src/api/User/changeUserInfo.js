import axios from 'axios'
import store from '@/store'

export default function changeUserInfo(phone, username, address, fund_applicant_detail, activity_volunteer_detail) {
    return axios.get("/usermsg/updatemsg", {
        params: {
            phone: phone,
            username: username,
            address: address,
            fund_applicant_detail: fund_applicant_detail,
            activity_volunteer_detail: activity_volunteer_detail,
        }
    }).then(response => {
        if (response.data.status == 200) {
            store.commit('savePhone', phone);
            store.commit('saveUserName', username);
            store.commit('saveAddress', address);
            store.commit('saveFundApplicantDetail', fund_applicant_detail);
            store.commit('saveActivityVolunteerDetail', activity_volunteer_detail);
            return response.data.msg;
        }
        else throw new Error(response.data.msg);
    })
}