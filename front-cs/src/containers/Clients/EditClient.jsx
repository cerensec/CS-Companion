import React, { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextInput,Button } from '@mantine/core';
import { useSelector, useDispatch } from 'react-redux';
import { selectClients,setClients } from '../../slices/clientSlice';
import { updateClient, getAllClients } from '../../api/client';
import { Divider } from 'antd';
import {AiFillSave} from 'react-icons/ai'
import Notiflix from 'notiflix';

const EditClient = (props) => {
    // Dispatch
    const dispatch = useDispatch();
    // Naviagte
    const navigate = useNavigate();
    // Edit form states
    const clients = useSelector(selectClients);
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [country, setCountry] = useState("");
    const [type, setType] = useState("");
    const [nit, setNit] = useState("");
    const [nrc, setNrc] = useState("");

    useEffect(()=>{
        // We set the edited client to the states
        clients.forEach((client)=>{
            if(client.id == props.params.id){
                setName(client.name);
                setAddress(client.address);
                setCity(client.city);
                setCountry(client.country);
                setType(client.type);
                setNit(client.nit);
                setNrc(client.nrc);
            } 
        })
    },[])

    const onSubmit = () =>{
        let data = {
            name: name,
            address: address,
            city: city,
            country: country,
            type: type,
            nit: nit,
            nrc: nrc
        }
        updateClient(props.params.id,data)
        .then((res)=>{
            if(res.status === 200){
                Notiflix.Notify.success(res.msg);
                getAllClients()
                .then((res)=>{
                    dispatch(setClients(res.client));
                })
                navigate('/clientInfo/'+props.params.id);

            }else{
                Notiflix.Notify.failure(res.err.sqlMessage);
            }
        })
    }

    return (  
        <div className='componentContainer'>
            <h1>Edit Client</h1>
            <Divider/>
            <div className='secondaryContainer'>
                <form onSubmit={(e)=>{
                    e.preventDefault();
                    onSubmit();
                }}>
                    {clients.map((client)=>{
                        if(client.id == props.params.id){
                            return (
                                <div key={client.id} className='gridWrapper'>
                                    <div className='gridItem'>
                                        <label className='formLabel'>Name:</label>
                                        <TextInput defaultValue={client.name} className='formInput' onChange={(e)=>{setName(e.currentTarget.value)}}/>
                                    </div>
                                    <div className='gridItem'>
                                        <label className='formLabel'>Address:</label>
                                        <TextInput defaultValue={client.address} className='formInput' onChange={(e)=>{setAddress(e.currentTarget.value)}}/>
                                    </div>
                                    <div className='gridItem'>
                                        <label className='formLabel'>City:</label>
                                        <TextInput defaultValue={client.city} className='formInput' onChange={(e)=>{setCity(e.currentTarget.value)}}/>
                                    </div>
                                    <div className='gridItem'>
                                        <label className='formLabel'>Country:</label>
                                        <TextInput defaultValue={client.country} className='formInput' onChange={(e)=>{setCountry(e.currentTarget.value)}}/>
                                    </div>
                                    <div className='gridItem'>
                                        <label className='formLabel'>Type:</label>
                                        <TextInput defaultValue={client.type} className='formInput' onChange={(e)=>{setType(e.currentTarget.value)}}/>
                                    </div>
                                    <div className='gridItem'>
                                        <label className='formLabel'>NIT:</label>
                                        <TextInput defaultValue={client.nit} className='formInput' onChange={(e)=>{setNit(e.currentTarget.value)}}/>
                                    </div>
                                    <div className='gridItem'>
                                        <label className='formLabel'>NRC:</label>
                                        <TextInput defaultValue={client.nrc} className='formInput' onChange={(e)=>{setNrc(e.currentTarget.value)}}/>
                                    </div>
                                </div>
                            )
                        }
                    })}
                    <Button leftIcon={<AiFillSave/>} type='submit'>Save</Button>
                </form>
            </div>
        </div>
    );
}
 
export default EditClient;