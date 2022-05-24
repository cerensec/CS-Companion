import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mantine/core';
import {BsFillTrashFill} from 'react-icons/bs';
import {AiFillEdit} from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from '../../slices/contactSlice';
import { getClientById,deleteClient, getAllClients } from '../../api/client';
import Notiflix from 'notiflix';
import { setClients } from '../../slices/clientSlice';

const ClientInfo = (props) => {
    // Dispatch
    const dispatch = useDispatch();
    // Navigate
    const navigate = useNavigate();
    // Client Info states
    const contacts = useSelector(selectContacts);
    const [client, setClient] = useState(null);

    useEffect(()=>{
        getClientById(props.params.id)
        .then((res)=>{
            setClient(res.client[0]);
        })
        .catch((err)=>{
            console.log(err);
        })
    },[])

    const onDelete = () =>{
        deleteClient(props.params.id)
        .then((res)=>{
            if(res.status === 200){
                Notiflix.Notify.success(res.msg);
                getAllClients()
                .then((res)=>{
                    dispatch(setClients(res.client));
                })
                navigate('/clients');
            }else{
                Notiflix.Notify.failure(res.err.sqlMessage);
            }
        })
    }


    return (  
        <div className='componentContainer'>
            {client !== null && <div className='secondaryContainer'>
                <h1>{client.name}</h1>
                <table>
                    <tbody>
                    <tr>
                        <td>Address:</td>
                        <td>{client.address}</td>
                    </tr>
                    <tr>
                        <td>City:</td>
                        <td>{client.city}</td>
                    </tr>
                    <tr>
                        <td>Country:</td>
                        <td>{client.country}</td>
                    </tr>
                    <tr>
                        <td>Type:</td>
                        <td>{client.type}</td>
                    </tr>
                    <tr>
                        <td>NIT:</td>
                        <td>{client.nit}</td>
                    </tr>
                    <tr>
                        <td>NRC:</td>
                        <td>{client.nrc}</td>
                    </tr>
                    </tbody>
                </table>
                <h1>Contacts:</h1>
                {contacts !== null && <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Phone</th>
                        </tr>    
                    </thead>
                    <tbody>
                    {/* Loop to load the contacts */}
                    {contacts.map((contact)=>{
                        if(contact.client_id === client.id){
                            return (
                                <tr>
                                    <td>{contact.name}</td>
                                    <td>{contact.phone}</td>
                                </tr>
                            )
                        }
                    })}    
                    </tbody>
                </table>}
            </div>}
            <div>
                <Button leftIcon={<AiFillEdit/>} style={{margin:'10px'}} onClick={()=>{navigate('/editClient/'+props.params.id)}}>
                    Edit
                </Button>
                <Button color='red' leftIcon={<BsFillTrashFill/>} onClick={onDelete}>
                    Delete
                </Button>
            </div>
        </div>
    );
}
 
export default ClientInfo;