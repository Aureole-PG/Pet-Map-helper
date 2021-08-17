import axios from 'axios';
const api = axios.create(
    {
        baseURL: process.env.REACT_APP_URL//`http://localhost:3030/api`
    }
)

export default api