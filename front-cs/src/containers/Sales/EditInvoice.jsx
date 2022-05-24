import React, { useState, useEffect } from 'react';
import { DatePicker, Divider, Select } from 'antd';
import { Button,NumberInput,Textarea } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { getAllSales } from '../../api/sales';
import {BsFillTrashFill} from 'react-icons/bs';
import {AiFillSave} from 'react-icons/ai';
import { deleteInvoice, getInvoiceById, saveInvoice, updateInvoice } from '../../api/invoice';
import Notiflix from 'notiflix';
import moment from 'moment';

const EditInvoice = (props) => {
    // Option component for the select
    const {Option} = Select;
    // Navigation state
    const navigate = useNavigate();
    // Form Data
    const [sales, setSales] = useState(null);
    const [invoice, setInvoice] = useState(null);
    const [saleId, setSaleId] = useState("");
    const [invoiceNumber, setInvoiceNumber] = useState("");
    const [type, setType] = useState("");
    const [date, setDate] = useState("");
    const [description, setDescription] = useState("");
    const [netPrice, setNetPrice] = useState("");
    const [grossPrice, setGrossPrice] = useState("");
    const [tax, setTax] = useState("");
    const [amountInLetters, setAmountInLetters] = useState("");
    const [comment, setComment] = useState("");

    useEffect(()=>{
        getInvoiceById(props.params.id)
        .then((res)=>{
            setInvoice(res.invoice[0]);
        })
        .catch((err)=>{
            console.log(err);
        })

        getAllSales()
        .then((res)=>{
            setSales(res.sales)
        })
        .catch((err)=>{
            console.log(err);
        })
    },[])

    const onSubmit = () =>{
        let data = {
            sales_id: saleId === "" ? invoice.sales_id : saleId,
            invoiceNumber: invoiceNumber === "" ? invoice.invoiceNumber : invoiceNumber,
            type: type === "" ? invoice.type : type,
            date: date === "" ? moment(invoice.date).format('YYYY-MM-DD') : moment(date).format('YYYY-MM-DD'),
            description: description === "" ? invoice.description : description,
            netPrice: netPrice === "" ? invoice.netPrice : netPrice,
            grossPrice: grossPrice === "" ? invoice.grossPrice : grossPrice,
            tax: tax === "" ? invoice.tax : tax,
            amountInLetters: amountInLetters === "" ? invoice.amountInLetters : amountInLetters,
            comment: comment === "" ? invoice.comment : comment
        }
        updateInvoice(props.params.id,data)
        .then((res)=>{
            console.log(res);
            if(res.status === 200){
                Notiflix.Notify.success(res.msg);
                navigate('/invoice');
            }else{
                Notiflix.Notify.failure(res.err.sqlMessage);
            }
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    const onDelete = () =>{
        deleteInvoice(props.params.id)
        .then((res)=>{
            console.log(res);
            if(res.status === 200){
                Notiflix.Notify.success(res.msg);
                navigate('/invoice');
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
            <h1>Edit Invoice</h1>
            <Divider/>
            <div className='secondaryContainer'>
                <form onSubmit={(e)=>{
                    e.preventDefault();
                    onSubmit();
                }}>
                {invoice !== null && <div className='gridWrapper'>
                        <div className='gridItem'>
                            <label className='formLabel'>Projects:</label>
                            {sales !== null && <Select defaultValue={invoice.sales_id} className='formInput' onChange={(e)=>{setSaleId(e)}}>
                                {sales.map((s)=>{
                                    return (
                                        <Option key={s.id} value={s.id}>{s.pName}</Option>
                                    )
                                })}
                            </Select>}
                        </div>
                        <div className='gridItem'>
                            <label className='formLabel'>Invoice Number:</label>
                            <NumberInput 
                                defaultValue={invoice.invoiceNumber}
                                className='formInput'
                                icon={'#'}
                                onChange={(e)=>{
                                    setInvoiceNumber(e)
                                }}
                            />
                        </div>
                        <div className='gridItem'>
                            <label className='formLabel'>Type:</label>
                            <Select defaultValue={invoice.type} className='formInput' onChange={(e)=>{setType(e)}}>
                                <Option value={"FACTURA"}>Factura</Option>
                                <Option value={"CREDITO FISCAL"}>Credito Fiscal</Option>
                            </Select>
                        </div>
                        <div className='gridItem'>
                            <label className='formLabel'>Date:</label>
                            <DatePicker defaultValue={moment(invoice.date, 'YYYY-MM-DD')} className='formInput' format={'YYYY-MM-DD'} onChange={(e)=>{setDate(e)}}/>
                        </div>
                        <div className='gridItem'>
                            <label className='formLabel'>Description:</label>
                            <Textarea
                                defaultValue={invoice.description}
                                onChange={(e)=>{setDescription(e.currentTarget.value)}}
                                className='formInput'
                                placeholder='Your description'
                            />
                        </div>
                        <div className='gridItem'>
                            <label className='formLabel'>Net Price:</label>
                            <NumberInput 
                                className='formInput'
                                icon={'#'}
                                defaultValue={invoice.netPrice}
                                precision={4}
                                hideControls
                                onChange={(e)=>{
                                    setNetPrice(e)
                                    setGrossPrice(e/1.13);
                                    setTax(e-(e/1.13));
                                }}
                            />
                        </div>
                        <div className='gridItem'>
                            <label className='formLabel'>Gross Price:</label>
                            <NumberInput 
                                className='formInput'
                                icon={'#'}
                                defaultValue={invoice.grossPrice}
                                precision={4}
                                hideControls
                                onChange={(e)=>{
                                    setGrossPrice(e);
                                }}
                            />
                        </div>
                        <div className='gridItem'>
                            <label className='formLabel'>VAT:</label>
                            <NumberInput 
                                className='formInput'
                                icon={'#'}
                                defaultValue={invoice.tax}
                                precision={4}
                                hideControls
                                onChange={(e)=>{
                                    setTax(e);
                                }}
                            />
                        </div>
                        <div className='gridItem'>
                            <label className='formLabel'>Amount in letters:</label>
                            <Textarea
                                defaultValue={invoice.amountInLetters}
                                onChange={(e)=>{setAmountInLetters(e.currentTarget.value)}}
                                className='formInput'
                                placeholder='One'
                            />
                        </div>
                        <div className='gridItem'>
                            <label className='formLabel'>Comments:</label>
                            <Textarea
                                defaultValue={invoice.comment}
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
 
export default EditInvoice;