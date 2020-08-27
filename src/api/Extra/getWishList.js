import axios from 'axios'

export default function getWishList() {
    return axios.get("wishlist").then(response => {
        if (response.data.status == 200) {
            return response.data.msg;
        }
        else throw new Error(response.data.msg)
    })
}