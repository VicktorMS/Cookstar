import axios from "axios"

export function getAllBurguers() {
    return axios.get('http://localhost:3000/products?category=burguer&_limit=2').then(res => res.data)
}