import axios from 'axios'
import type { AxiosInstance, AxiosRequestConfig } from 'axios'
import {message} from 'ant-design-vue'

export  const service = axios.create({
    baseURL: "https://www.fastmock.site/mock/859bc2c0fa0567650c0dbb7dc7c67dd6/myProject",
    timeout: 5000,
    headers: {
        "Content-Type": "application/json;chartset=utf-8"
    },
})
export  const $http = axios.create({
    baseURL: '/api',
    timeout: 5000,
})
service.interceptors.request.use( (config)=>{
    console.log(config,'---request-------');
    if(localStorage.getItem('token')){
        config.headers!.token   = localStorage.getItem('token')
    }
    return config
})
service.interceptors.response.use((res)=>{
    if(res.data.data.code !=200){
        return Promise.resolve(res.data)  
    }
    return res.data
},(err)=>{
    message.error(err )
})

