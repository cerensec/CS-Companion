import axios from 'axios';
import { config } from '../config';
const token = localStorage.getItem('token');

export const saveSale = (data) =>{
    return axios.post(config.api_url+'/cscorp/sales/save',data,{headers: { "x-access-token": token }})
    .then((res)=>{return res.data})
    .catch((err)=>{return err})
}

export const getSaleById = (id) =>{
    return axios.get(config.api_url+'/cscorp/sales/getSaleById/'+id,{headers: { "x-access-token": token }})
    .then((res)=>{return res.data})
    .catch((err)=>{return err})
}

export const getAllSales = () =>{
    return axios.get(config.api_url+'/cscorp/sales/getAllSales',{headers: { "x-access-token": token }})
    .then((res)=>{return res.data})
    .catch((err)=>{return err})
}

export const getSaleByClient = (client_id) =>{
    return axios.get(config.api_url+'/cscorp/sales/getSalesByClient/'+client_id,{headers: { "x-access-token": token }})
    .then((res)=>{return res.data})
    .catch((err)=>{return err})
}

export const getSalesByProjectId = (project_id) =>{
    return axios.get(config.api_url+'/cscorp/sales/getSaleByProject/'+project_id,{headers: { "x-access-token": token }})
    .then((res)=>{return res.data})
    .catch((err)=>{return err})
}


export const updateSale = (id,data) =>{
    return axios.put(config.api_url+'/cscorp/sales/updateSale/'+id,data,{headers: { "x-access-token": token }})
    .then((res)=>{return res.data})
    .catch((err)=>{return err})
}

export const deleteSale = (id) =>{
    return axios.delete(config.api_url+'/cscorp/sales/deleteSale/'+id,{headers: { "x-access-token": token }})
    .then((res)=>{return res.data})
    .catch((err)=>{return err})
}