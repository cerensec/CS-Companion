import React, { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextInput,Button,Select } from '@mantine/core';
import { getAllClients } from '../api/client';
import { getAllSuppliers } from '../api/supplier';
import Notiflix from 'notiflix';
import { getAllContacts, updateContact } from '../api/contact';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, setContacts } from '../slices/contactSlice';
import { Divider } from 'antd';
import { AiFillSave } from 'react-icons/ai';

const EditContact = (props) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const contacts = useSelector(selectContacts);
    const [clientSelect, setClientSelect] = useState(null);
    const [supplierSelect, setSupplierSelect] = useState(null);
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [supplierId, setSupplierId] = useState(null);
    const [clientId, setClientId] = useState(null);

    useEffect(() => {
        contacts.forEach((contact) =>{
            if(contact.id == props.params.id){
                setName(contact.name);
                setPhone(contact.phone);
                setEmail(contact.email);
                setClientId(contact.client_id);
                setSupplierId(contact.supplier_id);
            }
        })
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
        console.log(data)
        updateContact(props.params.id,data)
        .then((res)=>{
            console.log(res);
            if(res.status === 200){
                Notiflix.Notify.success(res.msg);
                getAllContacts()
                .then((res)=>{
                    dispatch(setContacts(res.contact));
                })
                navigate('/contactInfo/'+props.params.id);

            }else{
                Notiflix.Notify.failure(res.err.sqlMessage);
            }
        })
        
    }

    return (  
        <div className='componentContainer'>
            <h1>Edit Contact</h1>
            <Divider/>
            <div className='secondaryContainer'>
                <form onSubmit={(e)=>{
                    e.preventDefault();
                    onSubmit();
                }}>
                    {contacts.map((contact)=>{
                        if(contact.id == props.params.id){
                            return (
                                <div key={contact.id} className='gridWrapper'>
                                    <div className='gridItem'>
                                        <label className='formLabel'>Name:</label>
                                        <TextInput className='formInput' defaultValue={contact.name} onChange={(e)=>{setName(e.currentTarget.value)}}/>
                                    </div>
                                    <div className='gridItem'>
                                        <label className='formLabel'>Phone:</label>
                                        <TextInput className='formInput' defaultValue={contact.phone} onChange={(e)=>{setPhone(e.currentTarget.value)}}/>
                                    </div>
                                    <div className='gridItem'>
                                        <label className='formLabel'>Email:</label>
                                        <TextInput className='formInput' defaultValue={contact.email} onChange={(e)=>{setEmail(e.currentTarget.value)}}/>
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
                            )
                        }
                    })}
                    <Button leftIcon={<AiFillSave/>} type='submit'>Save</Button>
                </form>
            </div>
        </div>
    );
}
 
export default EditContact;