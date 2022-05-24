import axios from "axios";
import { config } from "../config";
const token = localStorage.getItem('token');

export const saveSatff = (data) =>{
    return axios.post(config.api_url+'/cscorp/staff/add',data,{headers: { "x-access-token": token }})
    .then((res)=>{return res.data})
    .catch((err)=>{return err})
}

export const getStaffById = (id) =>{
    return axios.get(config.api_url+'/cscorp/staff/getById/'+id,{headers: { "x-access-token": token }})
    .then((res)=>{return res.data})
    .catch((err)=>{return err})
}

export const getStaffByAlias = (alias_id) =>{
    return axios.get(config.api_url+'/cscorp/staff/getStaffByAlias/'+alias_id,{headers: { "x-access-token": token }})
    .then((res)=>{return res.data})
    .catch((err)=>{return err})
}

export const getStaffByPost = (post) =>{
    return axios.get(config.api_url+'/cscorp/staff/getStaffByPost/'+post,{headers: { "x-access-token": token }})
    .then((res)=>{return res.data})
    .catch((err)=>{return err})
}

export const getAllStaff = () =>{
    return axios.get(config.api_url+'/cscorp/staff/getAll',{headers: { "x-access-token": token }})
    .then((res)=>{return res.data})
    .catch((err)=>{return err})
}

export const updateStaff = (id,data) =>{
    return axios.put(config.api_url+'/cscorp/staff/updateStaff/'+id,data,{headers: { "x-access-token": token }})
    .then((res)=>{return res.data})
    .catch((err)=>{return err})
}

export const deleteStaff = (id) =>{
    return axios.delete(config.api_url+'/cscorp/staff/deleteStaff/'+id,{headers: { "x-access-token": token }})
    .then((res)=>{return res.data})
    .catch((err)=>{return err})
}
