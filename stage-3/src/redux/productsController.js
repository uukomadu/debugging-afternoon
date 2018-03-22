import axios from 'axios';

export default function getAllProducts() {
    return axios.get("https://practiceapi.devmountain.com/products/")
    .then(response => response.data);
}