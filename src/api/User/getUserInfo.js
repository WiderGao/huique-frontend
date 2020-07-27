import axios from 'axios'
import store from '@/store'

export default function getUserInfo() {
    return axios.get("/usermsg")
        .then((response) => {
            // console.log(response.data);
            if (response.data.status == 200) {
                store.commit("saveUserName", response.data.msg.username);
                store.commit("savePhone", response.data.msg.phone);
                store.commit("saveAddress", response.data.msg.address);
                store.commit(
                    "saveFundApplicantDetail",
                    response.data.msg.fund_applicant_detail
                );
                store.commit(
                    "saveActivityVolunteerDetail",
                    response.data.msg.activity_volunteer_detail
                );
                return response.data.msg;
            }
            else throw new Error(response.data.msg);
        })
}