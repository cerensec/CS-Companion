import axios from 'axios';
import { config } from '../config';

export const saveUser = (data) =>{
    return axios.post(config.api_url+'/cscorp/user/add',data)
    .then((res)=>{
        return res.data
    })
    .catch((err)=>{
        return err;
    })
}

export const getUserByEmail = (data) =>{
    return axios.post(config.api_url+'/cscorp/user/getUserByEmail',data)
    .then((res)=>{
        return res.data
    })
    .catch((err)=>{
        return err;
    })
}

export const loginUser = (data) =>{
    return axios.post(config.api_url+'/cscorp/user/login',data)
    .then((res)=>{
        return res.data
    })
    .catch((err)=>{
        return err;
    })
}

export const forgotPassword = (data) =>{
    return axios.post(config.api_url+'/cscorp/user/forgot',data)
    .then((res)=>{
        return res.data;
    })
    .catch((err)=>{
        return err;
    })
}

export const updateUser = (id,data) =>{
    return axios.put(config.api_url+'/cscorp/user/updateUser/'+id,data)
    .then((res)=>{
        return res.data;
    })
    .catch((err)=>{
        return err;
    })
}

export const checkToken = (token) =>{
    return axios.get(config.api_url+'/cscorp/checkToken',{headers: { "x-access-token": token }})
    .then((res)=>{
        return res.data;
    })
    .catch((err)=>{return err})
}