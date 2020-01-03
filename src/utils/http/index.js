import axios from 'axios'
import qs from 'qs'
import interceptors from './interceptors'

const http = axios.create({
  baseURL: 'https://en-soogua.guaniu.net',
  timeout: 30000,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/x-www-form-urlencoded',
    'Accept-Language': 'en'
  },
  transformRequest: [function (data) {
    data = data || {}
    return qs.stringify(data)
  }]
})

interceptors(http)
window.http = http
export function setToken (token) {
  http.defaults.headers.common.Authorization = `Bearer ${token}`
}
export default http
