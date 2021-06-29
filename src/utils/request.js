import axios from 'axios'

// 创建axios实例
const service = axios.create({
  baseURL: process.env.VUE_APP_URL, // api 的 base_url
  // baseURL:'http://file.cdn.cqttech.com/',
  timeout: 150000,
  // withCredentials: false,
  headers: {
    'Content-Type': 'application/json; charset=utf-8'
  }
})

// request拦截器
service.interceptors.request.use(
  config => {
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// response 拦截器
service.interceptors.response.use(
  res => {
    // if (res.data && res.data.Result=='0') {
    return Promise.resolve(res.data)
    // }else{
    //     return Promise.resolve(res.data);
    // }
  },
  error => {
    return Promise.reject(error)
  }
)

export default service
