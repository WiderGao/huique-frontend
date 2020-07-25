import axios from 'axios'
import store from '@/store'

export default function getCarousel() {
    return axios.get("utils/generate_carousel_figure_url").then(response => {
        return response.data;
    })
}