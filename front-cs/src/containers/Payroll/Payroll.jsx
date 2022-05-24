import React, { useState, useEffect } from 'react';
import {getAllPayroll, getPayrollByFilter, getTotalAmountByFilter, getTotalSalaryByFilter, getTotalTaxByFilter} from '../../api/payroll';
import { Table, Divider  } from 'antd';
import { Button } from '@mantine/core';
import {BsFillFilterSquareFill} from 'react-icons/bs'
import TableFilters from '../../components/TableFilters';
import {AiFillEdit} from 'react-icons/ai';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';

const Payroll = (props) => {
    // Option component for the select
    const {Column} = Table;
    // Navigation state
    const navigate = useNavigate();
    // Modal toggle state
    const [filterModal, setFilterModal] = useState(false);
    // Table state data
    const [payroll, setPayroll] = useState(null);
    const [payrollData, setPayrollData] = useState(null);
    const [numbers, setNumbers] = useState(null);
    const [payrollTotal, setPayrollTotal] = useState(null);
    const [payrollTotalTax, setPayrollTotalTax] = useState(null);
    const [payrollTotalSalary, setPayrollTotalSalary] = useState(null);

    useEffect(()=>{
        // Load all the used data from db
        getAllPayroll()
        .then((res)=>{
            setPayroll(res.payroll);
            let data = [];
            // Creation of the data for the table
            res.payroll.forEach((elem)=>{
                data.push({
                    date: moment(elem.date).format('DD/MM/YYYY'),
                    project: elem.name,
                    type: elem.type,
                    payrollNumber: elem.payrollNumber,
                    staff_id: elem.firstName,
                    alias_id: elem.alias,
                    amount: '$'+elem.amount,
                    tax: '$'+elem.tax,
                    salary: '$'+elem.salary,
                    comments: elem.comments,
                    payrollId: elem.id
                })
            })
            setPayrollData(data);
            // Numbers to pass to filter component
            let numbers = []
            res.payroll.forEach((p)=>{
                numbers.push(p.payrollNumber);
            })
            setNumbers([...new Set(numbers)]);
        })
        .catch((err)=>{
            console.log(err);
        })

        getTotalAmountByFilter()
        .then((res)=>{
            console.log(res)
            setPayrollTotal(res.payroll[0].amountTotal);
        })
        .catch((err)=>{
            console.log(err);
        })

        getTotalTaxByFilter()
        .then((res)=>{
            setPayrollTotalTax(res.payroll[0].taxTotal);
        })
        .catch((err)=>{
            console.log(err);
        })

        getTotalSalaryByFilter()
        .then((res)=>{
            setPayrollTotalSalary(res.payroll[0].salaryTotal);
        })
        .catch((err)=>{
            console.log(err);
        })
    },[props])

    // Function for when filters are submited
    const onSubmitFilter = (data) =>{
        getPayrollByFilter(data)
        .then((res)=>{
            setPayroll(res.payroll);
            let data = [];
            // Creation of the data for the table
            res.payroll.forEach((elem)=>{
                data.push({
                    date: moment(elem.date).format('DD/MM/YYYY'),
                    project: elem.name,
                    type: elem.type,
                    payrollNumber: elem.payrollNumber,
                    staff_id: elem.firstName,
                    alias_id: elem.alias,
                    amount: '$'+elem.amount,
                    tax: '$'+elem.tax,
                    salary: '$'+elem.salary,
                    comments: elem.comments,
                    payrollId: elem.id
                })
            })
            setPayrollData(data);
            setFilterModal(!filterModal);
        })
        .catch((err)=>{
            console.log(err);
        })
        getTotalAmountByFilter(data)
        .then((res)=>{
            console.log(res);
            setPayrollTotal(res.payroll[0].amountTotal)
        })
        .catch((err)=>{
            console.log(err);
        })

        getTotalTaxByFilter(data)
        .then((res)=>{
            setPayrollTotalTax(res.payroll[0].taxTotal);
        })
        .catch((err)=>{
            console.log(err);
        })

        getTotalSalaryByFilter(data)
        .then((res)=>{
            setPayrollTotalSalary(res.payroll[0].salaryTotal);
        })
        .catch((err)=>{
            console.log(err);
        })
    }
    return (  
        <div className='componentContainer'>
            <h1>Payroll</h1>
            <Divider/>
            <div className='secondaryContainer'>
                <TableFilters payroll onSubmitFilter={onSubmitFilter} data={numbers !== null ? numbers : []} opened={filterModal} onClose={()=>{setFilterModal(!filterModal)}}/>
                <div className='componentHeader'>
                    <div>
                        <Button leftIcon={<BsFillFilterSquareFill/>} size='sm' onClick={()=>{setFilterModal(!filterModal)}}>Filters</Button>
                    </div>
                    <div className='totalContainer'>
                        <h3>Total: <span>${payrollTotal}</span></h3> 
                        <h3>Total Tax: <span>${payrollTotalTax}</span></h3> 
                        <h3>Total Salary: <span>${payrollTotalSalary}</span></h3> 
                    </div>
                </div>
                <div style={{margin:'auto'}}>
                    <Table 
                        style={{width:'55rem'}} 
                        size='small' 
                        dataSource={payrollData !== null ? payrollData : []}
                    >
                        <Column title="Date" dataIndex={'date'} key={'date'}/>
                        <Column title="Project" dataIndex={'project'} key={'project'}/>
                        <Column title="Type" dataIndex={'type'} key={'type'}/>
                        <Column title="Number" dataIndex={'payrollNumber'} key={'payrollNumber'}/>
                        <Column title="Staff" dataIndex={'staff_id'} key={'staff_id'}/>
                        <Column title="Alias" dataIndex={'alias_id'} key={'alias_id'}/>
                        <Column title="Amount" dataIndex={'amount'} key={'amount'}/>
                        <Column title="Tax" dataIndex={'tax'} key={'tax'}/>
                        <Column title="Salary" dataIndex={'salary'} key={'salary'}/>
                        <Column title="Comments" dataIndex={'comments'} key={'comments'}/>
                        <Column
                            title="Action"
                            key="action"
                            dataIndex={'payrollId'}
                            render={(text, record) => (
                                <div style={{display:'flex',flexDirection:'column'}}>
                                    <Button onClick={()=>{
                                        navigate('/editPayroll/'+record.payrollId)
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
 
export default Payroll;