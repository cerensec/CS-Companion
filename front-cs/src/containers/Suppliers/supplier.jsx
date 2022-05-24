import React, { useState, useEffect } from 'react';
import { Button, Modal, TextInput } from '@mantine/core';
import { deleteSupplier, getAllSuppliers, saveSupplier, updateSupplier } from '../../api/supplier';
import {BsFillTrashFill} from 'react-icons/bs';
import {AiFillEdit,AiFillSave} from 'react-icons/ai';
import {MdAddCircleOutline} from 'react-icons/md';
import Notiflix from 'notiflix';
import { Divider } from 'antd';

const Suppliers = (props) => {
    // Suppliers data
    const [suppliers, setSuppliers] = useState(null);
    // Modal toggle state
    const [opened, setOpened] = useState(false);
    const [editSupplier, setEditSupplier] = useState(null);
    // Add form states
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    // Edit form states 
    const [edit,setEdit] = useState(false);
    const [editName, setEditName] = useState("");
    const [editAddress, setEditAddress] = useState("");
    

    useEffect(()=>{
        fetchSuppliers();
    },[])

    const fetchSuppliers = () =>{
        getAllSuppliers()
        .then((res)=>{
            setSuppliers(res.supplier)
        })
        .catch((err)=>{
            console.log(err);
        })
    }

    const onSubmit = () =>{
        let data = {
            name: name,
            address: address
        }

        saveSupplier(data)
        .then((res)=>{
            if(res.status == 200){
                Notiflix.Notify.success(res.msg);
                fetchSuppliers();
                setOpened(false);
            }else{
                Notiflix.Notify.failure(res.err.sqlMessage);
            }
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    const onSubmitEdit = () =>{
        let data = {
            name: editName === "" ? editSupplier.name : editName,
            address: editAddress === "" ? editSupplier.address : editAddress
        }
        console.log(data);
    }

    const onDelete = (id) =>{
        deleteSupplier(id)
        .then((res)=>{
            if(res.status == 200){
                Notiflix.Notify.success(res.msg);
                fetchSuppliers();
            }else{
                Notiflix.Notify.failure(res.err.sqlMessage);
            }
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    return (  
        <div className='componentContainer'>
            <h1>Suppliers</h1>
            <Divider/>
            <Button leftIcon={<MdAddCircleOutline size={18}/>} style={{marginBottom:'10px'}} onClick={()=>{setOpened(!opened)}}>
                Add new Supplier
            </Button>
            {/* Add form modal */}
            <Modal
                transition={"fade"}
                centered
                opened={opened}
                onClose={()=>setOpened(!opened)}
                title="Add a new supplier"
            >
                <form style={{display:'flex',flexDirection:'column',justifyContent:'center'}} onSubmit={(e)=>{
                    e.preventDefault();
                    onSubmit();
                }}>
                    <TextInput label="Name:" onChange={(e)=>{setName(e.currentTarget.value)}} />
                    <TextInput label="Address:" onChange={(e)=>{setAddress(e.currentTarget.value)}} />
                    <Button type='submit' leftIcon={<AiFillSave/>} style={{width:'10rem',margin:'auto',marginTop:'10px'}}>Save</Button>
                </form>
            </Modal>
            {/* Edit form modal */}
            <Modal
                transition={"fade"}
                centered
                opened={edit}
                onClose={()=>setEdit(!edit)}
                title="Edit alias"
            >
                <form style={{display:'flex',flexDirection:'column',justifyContent:'center'}} onSubmit={(e)=>{
                    e.preventDefault();
                    onSubmitEdit();
                }}>
                    {editSupplier !== null && <div>
                        <TextInput label="Name:" defaultValue={editSupplier.name} onChange={(e)=>{
                            setEditName(e.currentTarget.value);
                        }} />
                        <TextInput label="Address:" defaultValue={editSupplier.address} onChange={(e)=>{
                            setEditAddress(e.currentTarget.value);
                        }}/>
                    </div>}
                    <Button type='submit' leftIcon={<AiFillSave/>} style={{width:'10rem',margin:'auto',marginTop:'10px'}}>Save</Button>
                </form>
            </Modal>
            <div className='secondaryContainer'>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Address</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    {suppliers !== null && <tbody>
                        {/* Itération et chargement des Alias dans le tableau */}
                        {suppliers.map((supplier)=>{
                            return (
                                <tr key={supplier.id}>
                                    <td>{supplier.name}</td>
                                    <td>{supplier.address}</td>
                                    <td>
                                        <div style={{display:'flex'}}>
                                            <Button leftIcon={<AiFillEdit/>} size='xs' onClick={()=>{
                                                    setEdit(!edit);
                                                    setEditSupplier(supplier);
                                                }}>
                                                Edit
                                            </Button>
                                            <Button color={'red'} leftIcon={<BsFillTrashFill/>} size='xs' style={{marginLeft:'5px'}} onClick={()=>{onDelete(supplier.id)}}>
                                                Delete
                                            </Button>
                                        </div>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>}
                </table>
            </div>
        </div>
    );
}
 
export default Suppliers;