import axios from "axios";
import { config } from "../config";
const token = localStorage.getItem('token');

export const saveAlias = (data) =>{
    return axios.post(config.api_url+'/cscorp/alias/save',data,{headers: { "x-access-token": token }})
    .then((res)=>{return res.data})
    .catch((err)=>{return err})
}

export const getAllAlias = () =>{
    return axios.get(config.api_url+'/cscorp/alias/getAll',{headers: { "x-access-token": token }})
    .then((res)=>{return res.data})
    .catch((err)=>{return err})
}

export const getAliasById = (id) =>{
    return axios.get(config.api_url+'/cscorp/alias/getById/'+id,{headers: { "x-access-token": token }})
    .then((res)=>{return res.data})
    .catch((err)=>{return err})
}

export const updateAlias = (id,data) =>{
    return axios.put(config.api_url+'/cscorp/alias/updateAlias/'+id,data,{headers: { "x-access-token": token }})
    .then((res)=>{return res.data})
    .catch((err)=>{return err})
}

export const deleteAlias = (id) =>{
    return axios.delete(config.api_url+'/cscorp/alias/deleteAlias/'+id,{headers: { "x-access-token": token }})
    .then((res)=>{return res.data})
    .catch((err)=>{return err})
}