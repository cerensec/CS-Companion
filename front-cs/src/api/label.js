import axios from "axios";
import { config } from "../config";
const token = localStorage.getItem('token');

export const saveLabel = (data) =>{
    return axios.post(config.api_url+'/cscorp/label/save',data,{headers: { "x-access-token": token }})
    .then((res)=>{return res.data})
    .catch((err)=>{return err})
}

export const getLabelById = (id) =>{
    return axios.get(config.api_url+'/cscorp/label/getLabelById/'+id,{headers: { "x-access-token": token }})
    .then((res)=>{return res.data})
    .catch((err)=>{return err})
}

export const getAllLabels = () =>{
    return axios.get(config.api_url+'/cscorp/label/getAllLabels',{headers: { "x-access-token": token }})
    .then((res)=>{return res.data})
    .catch((err)=>{return err})
}

export const updateLabel = (id,data) =>{
    return axios.put(config.api_url+'/cscorp/label/updateLabel/'+id,data,{headers: { "x-access-token": token }})
    .then((res)=>{return res.data})
    .catch((err)=>{return err})
}

export const deleteLabel = (id) =>{
    return axios.delete(config.api_url+'/cscorp/label/deleteLabel/'+id,{headers: { "x-access-token": token }})
    .then((res)=>{return res.data})
    .catch((err)=>{return err})
}