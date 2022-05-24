import axios from 'axios';
import { config } from '../config';
const token = localStorage.getItem('token');

export const saveContact = (data) =>{
    return axios.post(config.api_url+'/cscorp/contact/save',data,{headers: { "x-access-token": token }})
    .then((res)=>{return res.data})
    .catch((err)=>{return err})
}

export const getContactById = (id) =>{
    return axios.get(config.api_url+'/cscorp/contact/getContactById/'+id,{headers: { "x-access-token": token }})
    .then((res)=>{return res.data})
    .catch((err)=>{return err})
}

export const getAllContacts = () =>{
    return axios.get(config.api_url+'/cscorp/contact/getAllContacts',{headers: { "x-access-token": token }})
    .then((res)=>{return res.data})
    .catch((err)=>{return err})
}

export const getContactsBySupplier = (supplier_id) =>{
    return axios.get(config.api_url+'/cscorp/contact/getContactsBySupplier/'+supplier_id,{headers: { "x-access-token": token }})
    .then((res)=>{return res.data})
    .catch((err)=>{return err})
}

export const getContactsByClient = (client_id) =>{
    return axios.get(config.api_url+'/cscorp/contact/getContactsByClient/'+client_id,{headers: { "x-access-token": token }})
    .then((res)=>{return res.data})
    .catch((err)=>{return err})
}

export const updateContact = (id,data) =>{
    return axios.put(config.api_url+'/cscorp/contact/updateContact/'+id,data,{headers: { "x-access-token": token }})
    .then((res)=>{return res.data})
    .catch((err)=>{return err})
}

export const deleteContact = (id) =>{
    return axios.delete(config.api_url+'/cscorp/contact/deleteContact/'+id,{headers: { "x-access-token": token }})
    .then((res)=>{return res.data})
    .catch((err)=>{return err})
}