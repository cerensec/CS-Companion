import axios from "axios";
import { config } from "../config";
const token = localStorage.getItem('token');

export const savePurchase = (data) =>{
    return axios.post(config.api_url+'/cscorp/purchase/save',data,{headers: { "x-access-token": token }})
    .then((res)=>{return res.data})
    .catch((err)=>{return err})
}

export const getPurchaseById = (id) =>{
    return axios.get(config.api_url+'/cscorp/purchase/getPurchaseById/'+id,{headers: { "x-access-token": token }})
    .then((res)=>{return res.data})
    .catch((err)=>{return err})
}

export const getAllPurchase = () =>{
    return axios.get(config.api_url+'/cscorp/purchase/getAllPurchase',{headers: { "x-access-token": token }})
    .then((res)=>{return res.data})
    .catch((err)=>{return err})
}

export const getPurchaseByInvoiceNumber = (invoiceNumber) =>{
    return axios.post(config.api_url+'/cscorp/purchase/getPurchaseByInvoiceNumber',invoiceNumber,{headers: { "x-access-token": token }})
    .then((res)=>{return res.data})
    .catch((err)=>{return err})
}

export const getPurchaseByFilter = (filters) =>{
    return axios.post(config.api_url+'/cscorp/purchase/getPurchaseByFilter',filters,{headers: { "x-access-token": token }})
    .then((res)=>{return res.data})
    .catch((err)=>{return err})
}

export const getTotalAmountByFilter = (filters) =>{
    return axios.post(config.api_url+'/cscorp/purchase/getTotalAmountByFilter',filters,{headers: { "x-access-token": token }})
    .then((res)=>{return res.data})
    .catch((err)=>{return err})
}

export const getPurchaseStats = (filters) =>{
    return axios.post(config.api_url+'/cscorp/purchase/getQuantityByFilter',filters,{headers: { "x-access-token": token }})
    .then((res)=>{return res.data})
    .catch((err)=>{return err})
}

export const updatePurchase = (id,data) =>{
    return axios.put(config.api_url+'/cscorp/purchase/updatePurchase/'+id,data,{headers: { "x-access-token": token }})
    .then((res)=>{return res.data})
    .catch((err)=>{return err})
}

export const deletePurchase = (id) =>{
    return axios.delete(config.api_url+'/cscorp/purchase/deletePurchase/'+id,{headers: { "x-access-token": token }})
    .then((res)=>{return res.data})
    .catch((err)=>{return err})
}
