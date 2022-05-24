import axios from 'axios';
import { config } from '../config';
const token = localStorage.getItem('token');

export const savePaymentType = (data) =>{
    return axios.post(config.api_url+'/cscorp/paymentType/save',data,{headers: { "x-access-token": token }})
    .then((res)=>{return res.data})
    .catch((err)=>{return err})
}

export const getPaymentTypeById = (id) =>{
    return axios.get(config.api_url+'/cscorp/paymentType/getPaymentTypeById/'+id,{headers: { "x-access-token": token }})
    .then((res)=>{return res.data})
    .catch((err)=>{return err})
}

export const getAllPaymentType = () =>{
    return axios.get(config.api_url+'/cscorp/paymentType/getAllPaymentType',{headers: { "x-access-token": token }})
    .then((res)=>{return res.data})
    .catch((err)=>{return err})
}

export const updatePaymentType = (id,data) =>{
    return axios.put(config.api_url+'/cscorp/paymentType/updatePaymentType/'+id,data,{headers: { "x-access-token": token }})
    .then((res)=>{return res.data})
    .catch((err)=>{return err})
}

export const deletePaymentType = (id) =>{
    return axios.delete(config.api_url+'/cscorp/paymentType/deletePaymentType/'+id,{headers: { "x-access-token": token }})
    .then((res)=>{return res.data})
    .catch((err)=>{return err})
} 