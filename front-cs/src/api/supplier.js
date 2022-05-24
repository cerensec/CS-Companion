import axios from "axios";
import { config } from "../config";
const token = localStorage.getItem('token');

export const saveSupplier = (data) =>{
    return axios.post(config.api_url+'/cscorp/supplier/save',data,{headers: { "x-access-token": token }})
    .then((res)=>{return res.data})
    .catch((err)=>{return err})
}

export const getSupplierById = (id) =>{
    return axios.get(config.api_url+'/cscorp/supplier/getSupplierById/'+id,{headers: { "x-access-token": token }})
    .then((res)=>{return res.data})
    .catch((err)=>{return err})
}

export const getAllSuppliers = () =>{
    return axios.get(config.api_url+'/cscorp/supplier/getAllSuppliers',{headers: { "x-access-token": token }})
    .then((res)=>{return res.data})
    .catch((err)=>{return err})
}

export const updateSupplier = (id,data) =>{
    return axios.put(config.api_url+'/cscorp/supplier/updateSupplier/'+id,data,{headers: { "x-access-token": token }})
    .then((res)=>{return res.data})
    .catch((err)=>{return err})
}

export const deleteSupplier = (id) =>{
    return axios.delete(config.api_url+'/cscorp/supplier/deleteSupplier/'+id,{headers: { "x-access-token": token }})
    .then((res)=>{return res.data})
    .catch((err)=>{return err})
}