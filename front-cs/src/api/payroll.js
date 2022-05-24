import axios from "axios";
import { config } from "../config";
const token = localStorage.getItem('token');

export const savePayroll = (data) =>{
    return axios.post(config.api_url+'/cscorp/payroll/add',data,{headers: { "x-access-token": token }})
    .then((res)=>{return res.data})
    .catch((err)=>{return err})
}

export const getMaxPayrollNumber = () =>{
    return axios.get(config.api_url+'/cscorp/payroll/getMaxPayrollNumber',{headers: { "x-access-token": token }})
    .then((res)=>{return res.data})
    .catch((err)=>{return err})
}

export const getPayrollById = (id) =>{
    return axios.get(config.api_url+'/cscorp/payroll/getPayrollById/'+id,{headers: { "x-access-token": token }})
    .then((res)=>{return res.data})
    .catch((err)=>{return err})
}

export const getAllPayroll = () =>{
    return axios.get(config.api_url+'/cscorp/payroll/getAllPayroll',{headers: { "x-access-token": token }})
    .then((res)=>{return res.data})
    .catch((err)=>{return err})
}

export const getPayrollByFilter = (filters) =>{
    return axios.post(config.api_url+'/cscorp/payroll/getPayrollByFilter',filters,{headers: { "x-access-token": token }})
    .then((res)=>{return res.data})
    .catch((err)=>{return err})
}

export const getTotalAmountByFilter = (filters) =>{
    return axios.post(config.api_url+'/cscorp/payroll/getTotalAmountByFilter',filters,{headers: { "x-access-token": token }})
    .then((res)=>{return res.data})
    .catch((err)=>{return err})
}

export const getTotalTaxByFilter = (filters) =>{
    return axios.post(config.api_url+'/cscorp/payroll/getTotalTaxByFilter',filters,{headers: { "x-access-token": token }})
    .then((res)=>{return res.data})
    .catch((err)=>{return err})
}

export const getTotalSalaryByFilter = (filters) =>{
    return axios.post(config.api_url+'/cscorp/payroll/getTotalSalaryByFilter',filters,{headers: { "x-access-token": token }})
    .then((res)=>{return res.data})
    .catch((err)=>{return err})
}

export const getQuantityByFilter = (filters) =>{
    return axios.post(config.api_url+'/cscorp/payroll/getQuantityByFilter',filters,{headers: { "x-access-token": token }})
    .then((res)=>{return res.data})
    .catch((err)=>{return err})
}

export const updatePayroll = (id,data) =>{
    return axios.put(config.api_url+'/cscorp/payroll/updatePayroll/'+id,data,{headers: { "x-access-token": token }})
    .then((res)=>{return res.data})
    .catch((err)=>{return err})
}

export const deletePayroll = (id) =>{
    return axios.delete(config.api_url+'/cscorp/payroll/deletePayroll/'+id,{headers: { "x-access-token": token }})
    .then((res)=>{return res.data})
    .catch((err)=>{return err})
}