import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextInput,Button } from '@mantine/core';
import { getAllClients, saveClient } from '../../api/client';
import { useDispatch } from 'react-redux';
import { setClients } from '../../slices/clientSlice';
import { Divider } from 'antd';
import {AiFillSave} from 'react-icons/ai';
import Notiflix from 'notiflix';

const AddClient = (props) => {
    // Dispatch
    const dispatch = useDispatch();
    // Navigation
    const navigate = useNavigate();
    // Add form states
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [country, setCountry] = useState("");
    const [type, setType] = useState("");
    const [nit, setNit] = useState("");
    const [nrc, setNrc] = useState("");

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
        saveClient(data)
        .then((res)=>{
            if(res.status === 200){
                Notiflix.Notify.success(res.msg);
                getAllClients()
                .then((res)=>{
                    dispatch(setClients(res.client));
                })
                navigate('/clients');
            }else{
                Notiflix.Notify.failure(res.err.sqlMessage)
            }
        })
        .catch((err)=>{
            console.log(err.err);
        })
    }

    return (  
        <div className='componentContainer'>
            <h1>Add new Client</h1>
            <Divider/>
            <div className='secondaryContainer'>
                <form onSubmit={(e)=>{
                    e.preventDefault();
                    onSubmit();
                }}>
                    <div className='gridWrapper'>
                        <div className='gridItem'>
                            <label className='formLabel'>Name:</label>
                            <TextInput className='formInput'  onChange={(e)=>{setName(e.currentTarget.value)}}/>
                        </div>
                        <div className='gridItem'>
                            <label className='formLabel'>Address:</label>
                            <TextInput className='formInput' onChange={(e)=>{setAddress(e.currentTarget.value)}}/>
                        </div>
                        <div className='gridItem'>
                            <label className='formLabel'>City:</label>
                            <TextInput className='formInput' onChange={(e)=>{setCity(e.currentTarget.value)}}/>
                        </div>
                        <div className='gridItem'>
                            <label className='formLabel'>Country:</label>
                            <TextInput className='formInput' onChange={(e)=>{setCountry(e.currentTarget.value)}}/>
                        </div>
                        <div className='gridItem'>
                            <label className='formLabel'>Type:</label>
                            <TextInput className='formInput' onChange={(e)=>{setType(e.currentTarget.value)}}/>
                        </div>
                        <div className='gridItem'>
                            <label className='formLabel'>NIT:</label>
                            <TextInput className='formInput' onChange={(e)=>{setNit(e.currentTarget.value)}}/>
                        </div>
                        <div className='gridItem'>
                            <label className='formLabel'>NRC:</label>
                            <TextInput className='formInput' onChange={(e)=>{setNrc(e.currentTarget.value)}}/>
                        </div>
                    </div>
                    <Button leftIcon={<AiFillSave/>} type='submit'>Save</Button>
                </form>
            </div>
        </div>
    );
}
 
export default AddClient;