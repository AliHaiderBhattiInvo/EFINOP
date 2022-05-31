import axios from 'axios'

const baseURL = 'https://api.dev.efinop.com/api';

const api = axios.create({
  baseURL,
  timeout: 40000,
  headers: { Accept: 'application/json' }
})

export function setAuthToken (authToken) {
  api.defaults.headers.common['Authorization'] = authToken
}

export default api

export function uploadFile (data, type) {
  return axios.post(`${baseURL}/upload`, data, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'multipart/form-data;',
      'Upload-action': type,
      'Authorization': `Bearer ${localStorage.getItem('access_token')}`
    }
  }).then((response) => response.data)
}
