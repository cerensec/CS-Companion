import axios from "axios";
import { config } from "../config";
const token = localStorage.getItem('token');

export const saveClient = (data) =>{
    return axios.post(config.api_url+'/cscorp/client/save',data,{headers: { "x-access-token": token }})
    .then((res)=>{return res.data})
    .catch((err)=>{return err})
}

export const getClientById = (id) =>{
    return axios.get(config.api_url+'/cscorp/client/getClientById/'+id,{headers: { "x-access-token": token }})
    .then((res)=>{return res.data})
    .catch((err)=>{return err})
}

export const getAllClients = () =>{
    return axios.get(config.api_url+'/cscorp/client/getAllClients',{headers: { "x-access-token": token }})
    .then((res)=>{return res.data})
    .catch((err)=>{return err})
}

export const updateClient = (id,data) =>{
    return axios.put(config.api_url+'/cscorp/client/updateClient/'+id,data,{headers: { "x-access-token": token }})
    .then((res)=>{return res.data})
    .catch((err)=>{return err})
}

export const deleteClient = (id) =>{
    return axios.delete(config.api_url+'/cscorp/client/deleteClient/'+id,{headers: { "x-access-token": token }})
    .then((res)=>{return res.data})
    .catch((err)=>{return err})
}