import axios from "axios"
const BASE_URL = "https://fitness-app-f6h7.onrender.com"

export const getHeaders = () => {
    let token = ""
    if (sessionStorage.getItem("token")) {
        token = sessionStorage.getItem("token")
    }
    return {
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*' // Ensure this matches the backend's CORS configuration
        }
    }
}

export const _get = (str) => {
    return axios.get(`${BASE_URL}/${str}`, getHeaders()).then(res => res.data)
}

export const _post = (str, data) => {
    return axios.post(`${BASE_URL}/${str}`, data, getHeaders()).then(res => res.data)
}

export const _put = (str, data) => {
    return axios.put(`${BASE_URL}/${str}`, data, getHeaders()).then(res => res.data)
}

export const _patch = (str, data) => {
    return axios.patch(`${BASE_URL}/${str}`, data, getHeaders()).then(res => res.data)
}

export const _delete = (str) => {
    return axios.delete(`${BASE_URL}/${str}`, getHeaders()).then(res => res.data)
}
