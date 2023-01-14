import axios from 'axios'
import {service,$http} from './request'
export function homeApi (){
    return service({
        url:'/home',
        method:'get',
    })
}
export function loginApi (data:{username:string,password:string}){
    return service({
        url:'/login',
        method:'post',
        data
    })
}

export function getUserInfo(){
    return $http('/info?mid=2989080')
  
}
export function getFns(){
   return axios.get('https://api.bilibili.com/x/relation/stat?vmid=2989080')
}