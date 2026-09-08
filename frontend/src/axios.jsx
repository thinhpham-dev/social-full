import axios from 'axios'

export const makeRequest = axios.create({
    baseURL: "http://143.198.217.126:8800/api/",
    withCredentials: true,
})