import React, { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextInput,Button,Select } from '@mantine/core';
import { getAllClients } from '../api/client';
import { getAllSuppliers } from '../api/supplier';
import { getAllContacts, saveContact } from '../api/contact';
import { useDispatch } from 'react-redux';
import { setContacts } from '../slices/contactSlice';
import Notiflix from 'notiflix';
import { Divider } from 'antd';
import { AiFillSave } from 'react-icons/ai';

const AddContact = (props) => {
    // Dispatch
    const dispatch = useDispatch()
    // Navigate
    const navigate = useNavigate();
    // Add form states
    const [clientSelect, setClientSelect] = useState(null);
    const [supplierSelect, setSupplierSelect] = useState(null);
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [supplierId, setSupplierId] = useState(null);
    const [clientId, setClientId] = useState(null);

    useEffect(() => {
        getAllClients()
        .then((res)=>{
            let initalValue = [];
            res.client.forEach((client)=>{
                initalValue.push({value:client.id,label:client.name})
            })
            setClientSelect(initalValue);
        })
        .catch((err)=>{
            console.log(err);
        })
        getAllSuppliers()
        .then((res)=>{
            let initalValue = [];
            res.supplier.forEach((sup)=>{
                initalValue.push({value:sup.id,label:sup.name})
            })
            setSupplierSelect(initalValue);
        })
    },[])
    
    const onSubmit = () =>{
        let data = {
            name: name,
            phone: phone,
            email: email,
            client_id: clientId,
            supplier_id: supplierId
        }

        saveContact(data)
        .then((res)=>{
            if(res.status === 200){
                Notiflix.Notify.success(res.msg);
                getAllContacts()
                .then((res)=>{
                    dispatch(setContacts(res.contact));
                })
                navigate('/dashboard');
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
            <h1>Add new Contact</h1>
            <Divider/>
            <div className='secondaryContainer'>
                <form onSubmit={(e)=>{
                    e.preventDefault();
                    onSubmit();
                }}>
                    <div className='gridWrapper'>
                        <div className='gridItem'>
                            <label className='formLabel'>Name:</label>
                            <TextInput className='formInput' onChange={(e)=>{setName(e.currentTarget.value)}}/>
                        </div>
                        <div className='gridItem'>
                            <label className='formLabel'>Phone:</label>
                            <TextInput className='formInput' onChange={(e)=>{setPhone(e.currentTarget.value)}}/>
                        </div>
                        <div className='gridItem'>
                            <label className='formLabel'>Email:</label>
                            <TextInput className='formInput' onChange={(e)=>{setEmail(e.currentTarget.value)}}/>
                        </div>
                        {clientSelect !== null && <div className='gridItem'>
                            <label className='formLabel'>Client:</label>
                            <Select
                                onChange={(e)=>{setClientId(e)}}
                                searchable
                                className='formInput'
                                data={clientSelect}
                            />
                        </div>}
                        {supplierSelect !== null && <div className='gridItem'>
                            <label className='formLabel'>Supplier:</label>
                            <Select
                                onChange={(e)=>{setSupplierId(e)}}
                                searchable
                                className='formInput'
                                data={supplierSelect}
                            />
                        </div>}
                    </div>
                    <Button leftIcon={<AiFillSave/>} type='submit'>Save</Button>
                </form>
            </div>
        </div>
    );
}
 
export default AddContact;