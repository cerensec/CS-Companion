import React, { useState, useEffect } from 'react';
import { Table, Divider  } from 'antd';
import { Button } from '@mantine/core';
import {BsFillFilterSquareFill} from 'react-icons/bs'
import TableFilters from '../../components/TableFilters';
import {AiFillEdit} from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import moment from 'moment';
import { getAllInvoice, getInvoiceByFilter, getTotalGrossPriceByFilter, getTotalNetPriceByFilter, getTotalTaxByFilter } from '../../api/invoice';

const Invoice = (props) => {
    // Option component for the select
    const {Column} = Table;
    // Navigation state
    const navigate = useNavigate();
    // Modal toggle state
    const [filterModal, setFilterModal] = useState(false);
    // Table state data
    const [invoiceData, setInvoiceData] = useState(null);
    const [totalNetPrice, setTotalNetPrice] = useState(null);
    const [totalGrossPrice, setTotalGrossPrice] = useState(null);
    const [totalTax, setTotalTax] = useState(null);

    useEffect(()=>{
        getAllInvoice()
        .then((res)=>{
            let data = []
            res.invoice.forEach((i)=>{
                data.push({
                    invoiceId: i.id,
                    saleId: i.pName,
                    invoiceNumber: i.invoiceNumber,
                    type: i.type,
                    date: moment(i.date).format('DD/MM/YYYY'),
                    description: i.description,
                    netPrice: '$'+i.netPrice,
                    grossPrice: '$'+i.grossPrice,
                    tax: '$'+i.tax,
                    amountInLetters: i.amountInLetters,
                    comment: i.comment
                })
            })
            setInvoiceData(data);
        })
        .catch((err)=>{
            console.log(err);
        })

        getTotalNetPriceByFilter()
        .then((res)=>{
            setTotalNetPrice(res.totalNetPrice[0].totalNetPrice);
        })
        .catch((err)=>{
            console.log(err);
        })

        getTotalGrossPriceByFilter()
        .then((res)=>{
            setTotalGrossPrice(res.totalGrossPrice[0].totalGrossPrice);
        })
        .catch((err)=>{
            console.log(err);
        })

        getTotalTaxByFilter()
        .then((res)=>{
            setTotalTax(res.totalTax[0].totalTax)
        })
        .catch((err)=>{
            console.log(err);
        })
    },[])

    const onSubmitFilter = (data) =>{
        getInvoiceByFilter(data)
        .then((res)=>{
            let data = []
            res.invoice.forEach((i)=>{
                data.push({
                    invoiceId: i.id,
                    saleId: i.pName,
                    invoiceNumber: i.invoiceNumber,
                    type: i.type,
                    date: moment(i.date).format('DD/MM/YYYY'),
                    description: i.description,
                    netPrice: '$'+i.netPrice,
                    grossPrice: '$'+i.grossPrice,
                    tax: '$'+i.tax,
                    amountInLetters: i.amountInLetters,
                    comment: i.comment
                })
            })
            setInvoiceData(data);
            setFilterModal(!filterModal);
        })
        .catch((err)=>{
            console.log(err);
        })

        getTotalNetPriceByFilter(data)
        .then((res)=>{
            setTotalNetPrice(res.totalNetPrice[0].totalNetPrice);
        })
        .catch((err)=>{
            console.log(err);
        })

        getTotalGrossPriceByFilter(data)
        .then((res)=>{
            setTotalGrossPrice(res.totalGrossPrice[0].totalGrossPrice);
        })
        .catch((err)=>{
            console.log(err);
        })

        getTotalTaxByFilter(data)
        .then((res)=>{
            setTotalTax(res.totalTax[0].totalTax)
        })
        .catch((err)=>{
            console.log(err);
        })
    }

    return (  
        <div className='componentContainer'>
            <h1>Invoice</h1>
            <Divider/>
            <div className='secondaryContainer'>
                <TableFilters invoice onSubmitFilter={onSubmitFilter} opened={filterModal} onClose={()=>{setFilterModal(!filterModal)}}/>
                <div className='componentHeader'>
                    <div>
                        <Button leftIcon={<BsFillFilterSquareFill/>} size='sm' onClick={()=>{setFilterModal(!filterModal)}}>Filters</Button>
                    </div>
                    <div className='totalContainer'>
                        <h3>Net Total: <span>${totalNetPrice}</span></h3> 
                        <h3>Gross Total: <span>${totalGrossPrice}</span></h3> 
                        <h3>Tax Total: <span>${totalTax}</span></h3> 
                    </div>
                </div>
                <div style={{margin:'auto'}}>
                    <Table 
                        style={{width:'55rem'}} 
                        size='small' 
                        dataSource={invoiceData !== null ? invoiceData : []}
                    >
                        <Column title="Project" dataIndex={'saleId'} key={'saleId'}/>
                        <Column title="Invoice Number" dataIndex={'invoiceNumber'} key={'invoiceNumber'}/>
                        <Column title="Date" dataIndex={'date'} key={'date'}/>
                        <Column title="Description" dataIndex={'description'} key={'description'}/>
                        <Column title="Net Price" dataIndex={'netPrice'} key={'netPrice'}/>
                        <Column title="Gross Price" dataIndex={'grossPrice'} key={'grossPrice'}/>
                        <Column title="VAT" dataIndex={'tax'} key={'tax'}/>
                        <Column title="Amount in letters" dataIndex={'amountInLetters'} key={'amountInLetters'}/>
                        <Column title="Comment" dataIndex={'comment'} key={'comment'}/>
                        <Column
                            title="Action"
                            key="action"
                            dataIndex={'payrollId'}
                            render={(text, record) => (
                                <div style={{display:'flex',flexDirection:'column'}}>
                                    <Button onClick={()=>{
                                        navigate('/editInvoice/'+record.invoiceId)
                                    }} leftIcon={<AiFillEdit/>} >Edit</Button>
                                </div>
                            )}
                        />
                    </Table>
                </div>
            </div>
        
        </div>
    );
}
 
export default Invoice;