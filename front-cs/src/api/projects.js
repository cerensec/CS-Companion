import axios from 'axios';
import { config } from '../config';
const token = localStorage.getItem("token");

export const getAllProjects = () =>{
    return axios.get(config.api_url+'/cscorp/project/getAllProjects',{headers: { "x-access-token": token }})
    .then((res)=>{return res.data})
    .catch((err)=>{return err})
}

export const getProjectById = (id) =>{
    return axios.get(config.api_url+'/cscorp/project/getProjectById/'+id,{headers: { "x-access-token": token }})
    .then((res)=>{return res.data})
    .catch((err)=>{return err})
}

export const saveProject = (data) =>{
    return axios.post(config.api_url+'/cscorp/project/save',data,{headers: { "x-access-token": token }})
    .then((res)=>{return res.data})
    .catch((err)=>{return err})
}

export const updateProject = (id,data) =>{
    return axios.put(config.api_url+'/cscorp/project/updateProject/'+id,data,{headers: { "x-access-token": token }})
    .then((res)=>{return res.data})
    .catch((err)=>{return err})
}

export const deleteProject = (id) =>{
    return axios.delete(config.api_url+'/cscorp/project/deleteProject/'+id,{headers: { "x-access-token": token }})
    .then((res)=>{return res.data})
    .catch((err)=>{return err})
}