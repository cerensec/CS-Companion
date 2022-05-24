import React, { useState, useEffect } from 'react';
import { DatePicker, Divider, Select } from 'antd';
import { Button,NumberInput,Textarea } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { getAllSales } from '../../api/sales';
import Notiflix from 'notiflix';
import moment from 'moment';
import { saveInvoice } from '../../api/invoice';
import { AiFillSave } from 'react-icons/ai';

const AddInvoice = (props) => {
    // Option component for the select
    const {Option} = Select;
    // Navigation state
    const navigate = useNavigate();
    // Form Data
    const [sales, setSales] = useState(null);
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
            sales_id: saleId,
            invoiceNumber: invoiceNumber,
            type: type,
            date: moment(date).format('YYYY-MM-DD'),
            description: description,
            netPrice: netPrice,
            grossPrice: grossPrice,
            tax: tax,
            amountInLetters: amountInLetters,
            comment: comment
        }
        saveInvoice(data)
        .then((res)=>{
            if(res.status === 200){
                Notiflix.Notify.success(res.msg);
                navigate('/invoice');
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
            <h1>Add new Invoice</h1>
            <Divider/>
            <div className='secondaryContainer'>
                <form onSubmit={(e)=>{
                    e.preventDefault();
                    onSubmit();
                }}>
                <div className='gridWrapper'>
                        <div className='gridItem'>
                            <label className='formLabel'>Projects:</label>
                            {sales !== null && <Select className='formInput' onChange={(e)=>{setSaleId(e)}}>
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
                                className='formInput'
                                icon={'#'}
                                onChange={(e)=>{
                                    setInvoiceNumber(e)
                                }}
                            />
                        </div>
                        <div className='gridItem'>
                            <label className='formLabel'>Type:</label>
                            <Select className='formInput' onChange={(e)=>{setType(e)}}>
                                <Option value={"FACTURA"}>Factura</Option>
                                <Option value={"CREDITO FISCAL"}>Credito Fiscal</Option>
                            </Select>
                        </div>
                        <div className='gridItem'>
                            <label className='formLabel'>Date:</label>
                            <DatePicker className='formInput' format={'YYYY-MM-DD'} onChange={(e)=>{setDate(e)}}/>
                        </div>
                        <div className='gridItem'>
                            <label className='formLabel'>Description:</label>
                            <Textarea
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
                                defaultValue={0}
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
                                value={grossPrice}
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
                                value={tax}
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
                                onChange={(e)=>{setAmountInLetters(e.currentTarget.value)}}
                                className='formInput'
                                placeholder='One'
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
 
export default AddInvoice;