import axios from "axios";
import { config } from "../config";
const token = localStorage.getItem('token');

export const saveInvoice = (data) =>{
    return axios.post(config.api_url+'/cscorp/invoice/save',data,{headers: { "x-access-token": token }})
    .then((res)=>{return res.data})
    .catch((err)=>{return err})
}

export const getAllInvoice = () =>{
    return axios.get(config.api_url+'/cscorp/invoice/getAllInvoice',{headers: { "x-access-token": token }})
    .then((res)=>{return res.data})
    .catch((err)=>{return err})
}

export const getInvoiceById = (id) =>{
    return axios.get(config.api_url+'/cscorp/invoice/getInvoiceById/'+id,{headers: { "x-access-token": token }})
    .then((res)=>{return res.data})
    .catch((err)=>{return err})
}

export const getInvoiceByInvoiceNumber = (invoiceNumber) =>{
    return axios.post(config.api_url+'/cscorp/invoice/getInvoiceByInvoiceNumber',invoiceNumber,{headers: { "x-access-token": token }})
    .then((res)=>{return res.data})
    .catch((err)=>{return err})
}

export const getInvoiceByFilter = (filters) =>{
    return axios.post(config.api_url+'/cscorp/invoice/getInvoiceByFilter',filters,{headers: { "x-access-token": token }})
    .then((res)=>{return res.data})
    .catch((err)=>{return err})
}

export const getTotalNetPriceByFilter = (filters) =>{
    return axios.post(config.api_url+'/cscorp/invoice/getTotalNetPriceByFilter',filters,{headers: { "x-access-token": token }})
    .then((res)=>{return res.data})
    .catch((err)=>{return err})
}

export const getTotalGrossPriceByFilter = (filters) =>{
    return axios.post(config.api_url+'/cscorp/invoice/getTotalGrossPriceByFilter',filters,{headers: { "x-access-token": token }})
    .then((res)=>{return res.data})
    .catch((err)=>{return err})
}

export const getTotalTaxByFilter = (filters) =>{
    return axios.post(config.api_url+'/cscorp/invoice/getTotalTaxByFilter',filters,{headers: { "x-access-token": token }})
    .then((res)=>{return res.data})
    .catch((err)=>{return err})
}

export const updateInvoice = (id,data) =>{
    return axios.put(config.api_url+'/cscorp/invoice/updateInvoice/'+id,data,{headers: { "x-access-token": token }})
    .then((res)=>{return res.data})
    .catch((err)=>{return err})
}

export const deleteInvoice = (id) =>{
    return axios.delete(config.api_url+'/cscorp/invoice/deleteInvoice/'+id,{headers: { "x-access-token": token }})
    .then((res)=>{return res.data})
    .catch((err)=>{return err})
}