import React, { useState, useEffect } from 'react';
import { deletePaymentType, getAllPaymentType, savePaymentType, updatePaymentType } from '../../api/paymentType';
import { Button, Modal, TextInput } from '@mantine/core';
import {BsFillTrashFill} from 'react-icons/bs';
import {AiFillEdit,AiFillSave} from 'react-icons/ai';
import {MdAddCircleOutline} from 'react-icons/md';
import Notiflix from 'notiflix';
import { Divider } from 'antd';

const PaymentType = (props) => {
    // Payment Type data
    const [paymentType, setPaymentType] = useState(null);
    // Modal toggle states
    const [addPaymentType, setAddPaymentType] = useState(false);
    const [editPaymentType, setEditPaymentType] = useState(false);
    // Add form states
    const [name, setName] = useState("");
    // Edit form states
    const [editedPaymentType, setEditedPaymentType] = useState(null);
    const [editName, setEditName] = useState("");

    useEffect(()=>{
        fetchPaymentType();
    },[])

    // Load payment type from db
    const fetchPaymentType = () =>{
        getAllPaymentType()
        .then((res)=>{
            setPaymentType(res.paymentType);
        })
        .catch((err)=>{
            console.log(err);
        })
    }

    const onSubmit = () =>{
        let data = {
            name: name
        }
        savePaymentType(data)
        .then((res)=>{
            if(res.status == 200){
                Notiflix.Notify.success(res.msg);
                fetchPaymentType();
                setAddPaymentType(!addPaymentType);
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
            name: editName !== "" ? editName : editedPaymentType.name 
        }
        updatePaymentType(editedPaymentType.id,data)
        .then((res)=>{
            if(res.status == 200){
                Notiflix.Notify.success(res.msg);
                fetchPaymentType();
                setEditPaymentType(!editPaymentType);
            }else{
                Notiflix.Notify.failure(res.err.sqlMessage);
            }
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    const onDelete = (id) =>{
        deletePaymentType(id)
        .then((res)=>{
            if(res.status == 200){
                Notiflix.Notify.success(res.msg);
                fetchPaymentType();
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
            <h1>Payment Type</h1>
            <Divider/>
            <Button leftIcon={<MdAddCircleOutline size={18}/>} style={{marginBottom:'10px'}} onClick={()=>{setAddPaymentType(!addPaymentType)}}>
                Add new Payment Type
            </Button>
            {/* Modal d'ajout d'un Payment Type */}
            <Modal
                transition={"fade"}
                centered
                opened={addPaymentType}
                onClose={()=>setAddPaymentType(!addPaymentType)}
                title="Add Payment Type"
            >
                <form style={{display:'flex',flexDirection:'column',justifyContent:'center'}} onSubmit={(e)=>{
                    e.preventDefault();
                    onSubmit();
                }}>
                    <TextInput label="Name:" onChange={(e)=>{setName(e.currentTarget.value)}} />
                    <Button type='submit' leftIcon={<AiFillSave/>} style={{width:'10rem',margin:'auto',marginTop:'10px'}}>Save</Button>
                </form>
            </Modal>
            {/* Modal d'édition d'un Alias */}
            <Modal
                transition={"fade"}
                centered
                opened={editPaymentType}
                onClose={()=>setEditPaymentType(!editPaymentType)}
                title="Edit alias"
            >
                <form style={{display:'flex',flexDirection:'column',justifyContent:'center'}} onSubmit={(e)=>{
                    e.preventDefault();
                    onSubmitEdit();
                }}>
                    <TextInput defaultValue={editedPaymentType !== null ? editedPaymentType.name :  ""} label="Name:" onChange={(e)=>{setEditName(e.currentTarget.value)}} />
                    <Button type='submit' leftIcon={<AiFillSave/>} style={{width:'10rem',margin:'auto',marginTop:'10px'}}>Save</Button>
                </form>
            </Modal>
            <div className='secondaryContainer'>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    {paymentType !== null && <tbody>
                        {/* Itération et chargement des paymentType dans le tableau */}
                        {paymentType.map((pt)=>{
                            return (
                                <tr key={pt.id}>
                                    <td>{pt.name}</td>
                                    <td>
                                        <Button leftIcon={<AiFillEdit/>} size='xs' onClick={()=>{
                                                setEditPaymentType(!editPaymentType);
                                                setEditedPaymentType(pt);
                                            }}>
                                            Edit
                                        </Button>
                                        <Button color={'red'} leftIcon={<BsFillTrashFill/>} size='xs' style={{marginLeft:'5px'}} onClick={()=>{onDelete(pt.id)}} >
                                            Delete
                                        </Button>
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
 
export default PaymentType;