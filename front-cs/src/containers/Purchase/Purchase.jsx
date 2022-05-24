import React, { useState, useEffect } from 'react';
import { Table, Divider  } from 'antd';
import { Button } from '@mantine/core';
import {BsFillFilterSquareFill} from 'react-icons/bs'
import TableFilters from '../../components/TableFilters';
import {AiFillEdit} from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import moment from 'moment';
import { getAllPurchase, getPurchaseByFilter, getTotalAmountByFilter } from '../../api/purchase';

const Purchase = (props) => {
    // Column for table
    const {Column} = Table;
    // Navigation
    const navigate = useNavigate();
    // Modal toggle state
    const [filterModal, setFilterModal] = useState(false);
    // Table state data
    const [purchaseData, setPurchaseData] = useState(null);
    const [purchaseTotal, setPurchaseTotal] = useState(null);

    useEffect(()=>{
        // Load the purchase data
        getAllPurchase()
        .then((res)=>{
            let data = [];
            // Creation of the data for the table
            res.purchase.forEach((p)=>{
                data.push({
                    purchaseId: p.id,
                    paymentType: p.ptName,
                    supplier: p.supplierName,
                    project: p.prName,
                    date: moment(p.date).format('DD/MM/YYYY'),
                    invoiceNumber: p.invoiceNumber,
                    amount: '$'+p.amount,
                    chequeNumber: p.chequeNumber,
                    label: p.name,
                    comments: p.comment
                })
            })
            setPurchaseData(data);
        })
        .catch((err)=>{
           console.log(err); 
        })

        getTotalAmountByFilter()
        .then((res)=>{
            console.log(res.totalAmount[0]);
            setPurchaseTotal(res.totalAmount[0].totalAmount)
        })
    },[])

    const onSubmitFilter = (data) =>{
        getPurchaseByFilter(data)
        .then((res)=>{
            let data = [];
            // Creation of the data for the table
            res.purchase.forEach((p)=>{
                data.push({
                    purchaseId: p.id,
                    paymentType: p.ptName,
                    supplier: p.supplierName,
                    project: p.prName,
                    date: moment(p.date).format('DD/MM/YYYY'),
                    invoiceNumber: p.invoiceNumber,
                    amount: '$'+p.amount,
                    chequeNumber: p.chequeNumber,
                    label: p.name,
                    comments: p.comment
                })
            })
            setPurchaseData(data);
            setFilterModal(!filterModal);
        })
        .catch((err)=>{
           console.log(err); 
        })

        getTotalAmountByFilter(data)
        .then((res)=>{
            setPurchaseTotal(res.totalAmount[0].totalAmount)
        })
    }

    return (  
        <div className='componentContainer'>
            <h1>Purchases</h1>
            <Divider/>
            <div className='secondaryContainer'>
                <TableFilters purchase onSubmitFilter={onSubmitFilter} opened={filterModal} onClose={()=>{setFilterModal(!filterModal)}}/>
                <div className='componentHeader'>
                    <div>
                        <Button leftIcon={<BsFillFilterSquareFill/>} size='sm' onClick={()=>{setFilterModal(!filterModal)}}>Filters</Button>
                    </div>
                    <div className='totalContainer'>
                        <h3>Total: <span>${purchaseTotal}</span></h3> 
                    </div>
                </div>
                <div style={{margin:'auto'}}>
                    <Table 
                        style={{width:'55rem'}} 
                        size='small' 
                        dataSource={purchaseData !== null ? purchaseData : []}
                    >
                        <Column title="Payment Type" dataIndex={'paymentType'} key={'paymentType'}/>
                        <Column title="Supplier" dataIndex={'supplier'} key={'supplier'}/>
                        <Column title="Project" dataIndex={'project'} key={'project'}/>
                        <Column title="Date" dataIndex={'date'} key={'date'}/>
                        <Column title="Invoice Number" dataIndex={'invoiceNumber'} key={'invoiceNumber'}/>
                        <Column title="Amount" dataIndex={'amount'} key={'amount'}/>
                        <Column title="ChequeNumber" dataIndex={'chequeNumber'} key={'chequeNumber'}/>
                        <Column title="Label" dataIndex={'label'} key={'label'}/>
                        <Column title="Comments" dataIndex={'comments'} key={'comments'}/>
                        <Column
                            title="Action"
                            key="action"
                            dataIndex={'payrollId'}
                            render={(text, record) => (
                                <div style={{display:'flex',flexDirection:'column'}}>
                                    <Button onClick={()=>{
                                        navigate('/editPurchase/'+record.purchaseId)
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
 
export default Purchase;