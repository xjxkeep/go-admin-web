import axios from 'axios'

const service = axios.create({
  baseURL: '/api', // api base_url
  timeout: 5000, // request timeout
})

export default service
