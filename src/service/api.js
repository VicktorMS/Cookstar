import axios from "axios"

export function getAllProducts() {
    return axios.get('http://localhost:3000/products').then(res => res.data)
}
export function getTopBurguers() {
    return axios.get('http://localhost:3000/products?productType=burger&_limit=4').then(res => res.data)
}
