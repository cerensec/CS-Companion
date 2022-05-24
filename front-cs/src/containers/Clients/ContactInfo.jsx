import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mantine/core';
import {BsFillTrashFill} from 'react-icons/bs';
import {AiFillEdit} from 'react-icons/ai';
import { useSelector } from 'react-redux';
import { selectContacts, setContacts } from '../../slices/contactSlice';
import { selectClients } from '../../slices/clientSlice';
import { useDispatch } from 'react-redux';
import { deleteContact, getAllContacts } from '../../api/contact';
import { selectSuppliers } from '../../slices/supplierSlice';
import { Divider } from 'antd';
import Notiflix from 'notiflix';

const ContactInfo = (props) => {
    // Dispatch
    const dispatch = useDispatch();
    // Navigate
    const navigate = useNavigate();
    // Data Selectors
    const contacts = useSelector(selectContacts);
    const clients = useSelector(selectClients);
    const supplier = useSelector(selectSuppliers);


    const onDelete = () =>{
        deleteContact(props.params.id)
        .then((res)=>{
            if(res.status === 200){
                Notiflix.Notify.success(res.msg);
                getAllContacts()
                .then((res)=>{
                    dispatch(setContacts(res.contact));
                })
                navigate('/clientContacts');
            }else{
                Notiflix.Notify.failure(res.err.sqlMessage);
            }
        })
    }

    return (  
        <div className='componentContainer'>
            {contacts !== null && <div className='secondaryContainer'>
                {contacts.map((contact)=>{
                    if(contact.id == props.params.id){
                        return (
                            <div key={contact.id}>
                                <h1>{contact.name}</h1>
                                <Divider/>
                                <table>
                                    <tbody>
                                    <tr>
                                        <td>Phone:</td>
                                        <td>{contact.phone}</td>
                                    </tr>
                                    <tr>
                                        <td>Email:</td>
                                        <td>{contact.email}</td>
                                    </tr>
                                    <tr>
                                        <td>Client:</td>
                                        {clients.map((client)=>{
                                            if(client.id == contact.client_id){
                                                return (
                                                    <td>{client.name}</td>
                                                )
                                            }
                                        })}
                                    </tr>
                                    <tr>
                                        <td>Supplier:</td>
                                        {supplier.map((sup)=>{
                                            if(sup.id === contact.supplier_id){
                                                return (
                                                    <td>{sup.name}</td>
                                                )
                                            }
                                        })}
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        )
                    }
                })}
            </div>}
            <div>
                <Button leftIcon={<AiFillEdit/>} style={{margin:'10px'}} onClick={()=>{navigate('/editContact/'+props.params.id)}}>
                    Edit
                </Button>
                <Button color='red' leftIcon={<BsFillTrashFill/>} onClick={onDelete}>
                    Delete
                </Button>
            </div>
        </div>
    );
}
 
export default ContactInfo;