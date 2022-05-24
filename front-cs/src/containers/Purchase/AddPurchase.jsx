import React, { useState, useEffect } from 'react';
import { DatePicker, Divider, Select } from 'antd';
import { Button,NumberInput,Textarea } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectProjects } from '../../slices/projectSlice';
import {selectSuppliers} from '../../slices/supplierSlice';
import { getAllPaymentType } from '../../api/paymentType';
import { getAllLabels } from '../../api/label';
import { savePurchase } from '../../api/purchase';
import Notiflix from 'notiflix';
import moment from 'moment';
import { AiFillSave } from 'react-icons/ai';

const AddPurchase = (props) => {
    // Option component for the select
    const {Option} = Select;
    // Navigation state
    const navigate = useNavigate();
    // Form states
    const projects = useSelector(selectProjects);
    const suppliers = useSelector(selectSuppliers);
    const [paymentTypeData, setPaymentTypeData] = useState(null);
    const [labelData, setLabelData] = useState(null);
    const [date, setDate] = useState(null);
    const [projectId, setProjectId] = useState("");
    const [supplierId, setSupplierId] = useState("");
    const [paymentType, setPaymentType] = useState("");
    const [invoiceNumber, setInvoiceNumber] = useState("");
    const [amount, setAmount] = useState(0);
    const [chequeNumber, setChequeNumber] = useState("");
    const [labelId, setLabelId] = useState("");
    const [comment, setComment] = useState("");

    useEffect(()=>{
        getAllPaymentType()
        .then((res)=>{
            setPaymentTypeData(res.paymentType);
        })
        .catch((err)=>{
            console.log(err);
        })

        getAllLabels()
        .then((res)=>{
            setLabelData(res.labels);
        })
        .catch((err)=>{
            console.log(err);
        })
    },[])

    const onSubmit = () =>{
        let data = {
            date: moment(date).format('YYYY-MM-DD'),
            project_id: projectId,
            invoiceNumber: invoiceNumber,
            chequeNumber: chequeNumber,
            supplier_id: supplierId,
            label_id: labelId,
            paymentType_id: paymentType,
            amount: amount,
            comment: comment
        }
        savePurchase(data)
        .then((res)=>{
            if(res.status === 200){
                Notiflix.Notify.success(res.msg);
                navigate('/purchase');
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
            <h1>Add new Purchase</h1>
            <Divider/>
            <div className='secondaryContainer'>
                <form onSubmit={(e)=>{
                    e.preventDefault();
                    onSubmit();
                }}>
                <div className='gridWrapper'>
                        <div className='gridItem'>
                            <label className='formLabel'>Date:</label>
                            <DatePicker className='formInput' format={'YYYY-MM-DD'} onChange={(e)=>{setDate(e)}}/>
                        </div>
                        <div className='gridItem'>
                            <label className='formLabel'>Projects:</label>
                            {projects !== undefined && <Select className='formInput' onChange={(e)=>{setProjectId(e)}}>
                                {projects.map((p)=>{
                                    return (
                                        <Option key={p.id} value={p.id}>{p.name}</Option>
                                    )
                                })}
                            </Select>}
                        </div>
                        <div className='gridItem'>
                            <label className='formLabel'>Invoice Number:</label>
                            <NumberInput 
                                className='formInput'
                                icon={'#'}
                                onChange={(e)=>{
                                    setInvoiceNumber(e)
                                }}
                            />
                        </div>
                        <div className='gridItem'>
                            <label className='formLabel'>Cheque Number:</label>
                            <NumberInput 
                                className='formInput'
                                icon={'#'}
                                onChange={(e)=>{
                                    setChequeNumber(e)
                                }}
                            />
                        </div>
                        <div className='gridItem'>
                            <label className='formLabel'>Supplier:</label>
                            {suppliers !== null && <Select className='formInput' onChange={(e)=>{setSupplierId(e)}}>
                                {suppliers.map((s)=>{
                                    return (
                                        <Option key={s.id} value={s.id}>{s.name}</Option>
                                    )
                                })}
                            </Select>}
                        </div>
                        <div className='gridItem'>
                            <label className='formLabel'>Label:</label>
                            {labelData !== null && <Select className='formInput' onChange={(e)=>{setLabelId(e)}}>
                                {labelData.map((l)=>{
                                    return (
                                        <Option key={l.id} value={l.id}>{l.name}</Option>
                                    )
                                })}
                            </Select>}
                        </div>
                        <div className='gridItem'>
                            <label className='formLabel'>Payment Type:</label>
                            {paymentTypeData !== null && <Select className='formInput' onChange={(e)=>{setPaymentType(e)}}>
                                {paymentTypeData.map((p)=>{
                                    return (
                                        <Option key={p.id} value={p.id}>{p.name}</Option>
                                    )
                                })}
                            </Select>}
                        </div>
                        <div className='gridItem'>
                            <label className='formLabel'>Amount:</label>
                            <NumberInput 
                                className='formInput'
                                icon={'$'}
                                defaultValue={0}
                                precision={4}
                                hideControls
                                onChange={(e)=>{
                                    setAmount(e);
                                }}
                            />
                        </div>
                        <div className='gridItem'>
                            <label className='formLabel'>Comments:</label>
                            <Textarea
                                onChange={(e)=>{setComment(e.currentTarget.value)}}
                                className='formInput'
                                placeholder='Your comment'
                            />
                        </div>
                    </div>
                    <Button leftIcon={<AiFillSave/>} type='submit'>Save</Button>
                </form>
            </div>
        </div>
    );
}
 
export default AddPurchase;