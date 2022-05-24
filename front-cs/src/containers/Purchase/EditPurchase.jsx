import React, { useState, useEffect } from 'react';
import { DatePicker, Divider, Select } from 'antd';
import { Button,NumberInput,Textarea } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectProjects } from '../../slices/projectSlice';
import {selectSuppliers} from '../../slices/supplierSlice';
import { getAllPaymentType } from '../../api/paymentType';
import { getAllLabels } from '../../api/label';
import { deletePurchase, getPurchaseById, updatePurchase } from '../../api/purchase';
import {BsFillTrashFill} from 'react-icons/bs'
import Notiflix from 'notiflix';
import moment from 'moment';
import { AiFillSave } from 'react-icons/ai';

const EditPurchase = (props) => {
    // Option component for the select
    const {Option} = Select;
    // Navigation state
    const navigate = useNavigate();
    // Form states
    const [purchase, setPurchase] = useState(null);
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
        getPurchaseById(props.params.id)
        .then((res)=>{
            setPurchase(res.purchase[0]);
            setDate(moment(res.purchase[0].date).format('YYYY-MM-DD'));
            setProjectId(res.purchase[0].prName);
            setInvoiceNumber(res.purchase[0].invoiceNumber);
            setChequeNumber(res.purchase[0].chequeNumber);
            setSupplierId(res.purchase[0].sName);
            setLabelId(res.purchase[0].name);
            setPaymentType(res.purchase[0].ptName);
            setAmount(res.purchase[0].amount);
            setComment(res.purchase[0].comment);
        })
        .catch((err)=>{
            console.log(err);
        })

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
        let pId = projectId;
        projects.forEach((p)=>{
            if(projectId === p.name){
                pId = p.id;
            }
        })
        let sId = supplierId;
        suppliers.forEach((s)=>{
            if(supplierId === s.name){
                sId = s.id;
            }
        })
        let lId = labelId;
        labelData.forEach((l)=>{
            if(labelId === l.name){
                lId = l.id;
            }
        })
        let ptId = paymentType;
        paymentTypeData.forEach((pt)=>{
            if(paymentType === pt.name){
                ptId = pt.id;
            }
        })
        let data = {
            date: moment(date).format('YYYY-MM-DD'),
            project_id: pId,
            invoiceNumber: invoiceNumber,
            chequeNumber: chequeNumber,
            supplier_id: sId,
            label_id: lId,
            paymentType_id: ptId,
            amount: amount,
            comment: comment
        }
        updatePurchase(props.params.id,data)
        .then((res)=>{
            console.log(res);
            if(res.status === 200){
                Notiflix.Notify.success(res.msg);
                navigate('/purchase');
            }else{
                Notiflix.Notify.failure(res.err.sqlMessage);
            }
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    const onDelete = () =>{
        deletePurchase(props.params.id)
        .then((res)=>{
            console.log(res);
            if(res.status === 200){
                Notiflix.Notify.success(res.msg);
                navigate('/purchase');
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
            <h1>Edit Purchase</h1>
            <Divider/>
            <div className='secondaryContainer'>
                <form onSubmit={(e)=>{
                    e.preventDefault();
                    onSubmit();
                }}>
                    {purchase !== null && <div className='gridWrapper'>
                        <div className='gridItem'>
                            <label className='formLabel'>Date:</label>
                            <DatePicker 
                            defaultValue={moment(purchase.date, 'YYYY-MM-DD')}
                            className='formInput' format={'YYYY-MM-DD'} onChange={(e)=>{setDate(e)}}/>
                        </div>
                        <div className='gridItem'>
                            <label className='formLabel'>Projects:</label>
                            {projects !== undefined && <Select defaultValue={purchase.prName} className='formInput' onChange={(e)=>{setProjectId(e)}}>
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
                                value={purchase.invoiceNumber}
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
                                value={purchase.chequeNumber}
                                className='formInput'
                                icon={'#'}
                                onChange={(e)=>{
                                    setChequeNumber(e)
                                }}
                            />
                        </div>
                        <div className='gridItem'>
                            <label className='formLabel'>Supplier:</label>
                            {suppliers !== null && <Select defaultValue={purchase.sName} className='formInput' onChange={(e)=>{setSupplierId(e)}}>
                                {suppliers.map((s)=>{
                                    return (
                                        <Option key={s.id} value={s.id}>{s.name}</Option>
                                    )
                                })}
                            </Select>}
                        </div>
                        <div className='gridItem'>
                            <label className='formLabel'>Label:</label>
                            {labelData !== null && <Select defaultValue={purchase.name} className='formInput' onChange={(e)=>{setLabelId(e)}}>
                                {labelData.map((l)=>{
                                    return (
                                        <Option key={l.id} value={l.id}>{l.name}</Option>
                                    )
                                })}
                            </Select>}
                        </div>
                        <div className='gridItem'>
                            <label className='formLabel'>Payment Type:</label>
                            {paymentTypeData !== null && <Select defaultValue={purchase.ptName} className='formInput' onChange={(e)=>{setPaymentType(e)}}>
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
                                value={purchase.amount}
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
                                defaultValue={purchase.comment}
                                onChange={(e)=>{setComment(e.currentTarget.value)}}
                                className='formInput'
                                placeholder='Your comment'
                            />
                        </div>
                    </div>}
                    <Button leftIcon={<AiFillSave/>} type='submit'>Save</Button>
                    <Button onClick={onDelete} leftIcon={<BsFillTrashFill/>} style={{backgroundColor:'red',marginLeft:'10px'}} >Delete</Button>
                </form>
            </div>
        </div>
    );
}
 
export default EditPurchase;