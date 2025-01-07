import axios from 'axios'

const backendUrl = 'https://ticket-generator-backend-mu.vercel.app'

const api = axios.create({
    baseURL: backendUrl
})

export default api