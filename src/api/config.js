import axios from 'axios'
import qs from 'qs'

const requests = axios.create({
  baseURL: '',
  timeout: 5000,
  get: {
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  post: {
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  withcredentials: true
})

// requests.defaults.baseURL = 'http://127.0.0.1:3000'
// requests.defaults.timeout = 5000
// requests.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
// requests.defaults.withcredentials = true
// 错误处理函数
const err = (error) => {
  if (error.response) {
    const data = error.response.data
    if (error.response.status === 403) {
      console.log(data.message || data.msg)
    }
    if (error.response.status === 401) {
      console.log('你没有权限。')
    }
  }
  return Promise.reject(error)
}

// 请求拦截器
requests.interceptors.request.use(config => {
  const token = window.localStorage.getItem('token')
  if (token) {
    config.headers['token'] = token
  }
  if (config.method === 'POST') {
    // config.data = qs.stringify(config.data)
    config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
  }
  return config
}, err)

// 接收拦截器
requests.interceptors.response.use(response => {
  const res = response.data
  if (res.code !== 0 && res.code !== 200) {
    console.log(res.message || res.msg)
    if (res.code === 401 || res.code === 403 || res.code === 999) {
      console.log('请登录')
    }
    return Promise.reject(response)
  } else {
    return res
  }
}, err)

// 返回一个Promise（发送get请求）
export function get (url, params = {}) {
  return new Promise((resolve, reject) => {
    requests.get(url, {
      params: params
    }).then(res => {
      resolve(res.data)
    }).catch(err => {
      reject(err)
    })
  })
}

// 返回一个Promise（发送post请求）
export function post (url, params = {}) {
  return new Promise((resolve, reject) => {
    requests.post(url, qs.stringify(params))
      .then(res => {
        resolve(res.data)
      })
      .catch(err => {
        reject(err)
      })
  })
}
