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
    return $http({
        url:'/info?mid=2989080&token=&platform=web&w_rid=a4466d9a6ab322e8a8dad4a11cc39b09&wts=1673575218',
        method:'get',
    })
}
export function getFns(){
   return axios.get('https://api.bilibili.com/x/relation/stat?vmid=2989080')
}