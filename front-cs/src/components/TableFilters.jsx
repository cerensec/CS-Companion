import { Button, Modal } from '@mantine/core';
import React, { useState, useEffect } from 'react';
import { DatePicker, Select } from 'antd';
import { useSelector } from 'react-redux';
import { selectProjects } from '../slices/projectSlice';
import { getAllStaff } from '../api/staff';
import { getAllAlias } from '../api/alias';
import { getAllSuppliers } from '../api/supplier';
import { getAllSales } from '../api/sales';
import moment from 'moment';

const TableFilters = (props) => {
    // Option component for the select
    const {Option} = Select;
    // Filter data
    const projects = useSelector(selectProjects);
    const [staff, setStaff] = useState(null);
    const [alias, setAlias] = useState(null);
    const [suppliers, setSuppliers] = useState(null);
    const [sales, setSales] = useState(null);
    // Form Values
    const [start, setStart] = useState("");
    const [end, setEnd] = useState("");
    const [type, setType] = useState("");
    const [projectId, setProjectId] = useState("");
    const [staffId, setStaffId] = useState("");
    const [aliasId, setAliasId] = useState("");
    const [supplierId, setSupplierId] = useState("");
    const [payrollNumber, setPayrollNumber] = useState("");
    const [saleId, setSaleId] = useState("");

    useEffect(()=>{
        getAllStaff()
        .then((res)=>{
            setStaff(res.staff);
        })
        .catch((err)=>{
            console.log(err);
        })

        getAllAlias()
        .then((res)=>{
            setAlias(res.alias);
        })
        .catch((err)=>{
            console.log(err);
        })

        getAllSuppliers()
        .then((res)=>{
            setSuppliers(res.supplier);
        })
        .catch((err)=>{
            console.log(err);
        })

        getAllSales()
        .then((res)=>{
            setSales(res.sales);
        })
        .catch((err)=>{
            console.log(err)
        })
    },[])

    const onSubmit = () =>{
        let data = {}
        if(start !== ""){data.start = moment(start).format('YYYY-MM-DD')}
        if(end !== "") {data.end = moment(end).format('YYYY-MM-DD')}
        if(type !== ""){data.type = type}
        if(payrollNumber !== ""){data.payrollNumber = payrollNumber}
        if(projectId !== ""){data.project_id = projectId}
        if(staffId !== ""){data.staff_id = staffId}
        if(aliasId !== ""){data.alias_id = aliasId}
        if(supplierId !== ""){data.supplier_id = supplierId}
        if(saleId !== ""){data.sales_id = saleId}
        props.onSubmitFilter(data);
        // Reset the filters after sending it to the parent
        setStart("");
        setEnd("");
        setType("");
        setPayrollNumber("");
        setProjectId("");
        setStaffId("");
        setAliasId("");
        setSupplierId("");
    }

    return (  
        <Modal
            opened={props.opened}
            onClose={props.onClose}
            title={<h2>Filters</h2>}
        >
            <div className='filterForm'>
                <form onSubmit={(e)=>{
                    e.preventDefault();
                    onSubmit()
                }}>
                    <div className='filterFormItem'>
                        <label>Start: </label>
                        <DatePicker format={'YYYY-MM-DD'} onChange={(e)=>{setStart(e)}} className='filterSelect'/>
                    </div>

                    <div className='filterFormItem'> 
                        <label>End: </label>
                        <DatePicker format={'YYYY-MM-DD'} onChange={(e)=>{setEnd(e)}} className='filterSelect'/>
                    </div>

                    {props.invoice && <div>
                        {sales !== null && <div className='filterFormItem'>
                        <label>Project: </label>
                        <Select onChange={(e)=>{setSaleId(e)}} className='filterSelect'>
                            <Option value=""> </Option>
                            {sales.map((s)=>{
                                return (
                                    <Option key={s.id} value={s.id}>{s.pName}</Option>
                                )
                            })}
                        </Select>
                         </div>}
                    </div>}

                    {props.payroll && <div>

                        {projects !== null && <div className='filterFormItem'>
                        <label>Projects: </label>
                        <Select onChange={(e)=>{setProjectId(e)}} className='filterSelect'>
                            <Option value=""> </Option>
                            {projects.map((p)=>{
                                return (
                                    <Option key={p.id} value={p.id}>{p.name}</Option>
                                )
                            })}
                        </Select>
                         </div>}

                        <div className='filterFormItem'>
                            <label>Type: </label>
                            <Select onChange={(e)=>{setType(e)}} className='filterSelect'>
                                <Option value=""> </Option>
                                <Option value="OBRA">Obra</Option>
                                <Option value="AL DIA">Al Dia</Option>
                            </Select>
                        </div>

                        <div className='filterFormItem'>
                            <label>Payroll Number: </label>
                            <Select onChange={(e)=>{setPayrollNumber(e)}} className='filterSelect'>
                                <Option value=""> </Option>
                                {props.data.map((n)=>{
                                    return (
                                        <Option key={n} value={n}>{n}</Option>
                                    )
                                })}
                            </Select>
                        </div>
                        {staff !== null && <div className='filterFormItem'>
                            <label>Staff: </label>
                            <Select onChange={(e)=>{setStaffId(e)}} className='filterSelect'>
                                <Option value=""> </Option>

                                {staff.map((s)=>{
                                    return (
                                        <Option key={s.id} value={s.id}>{s.firstName} {s.lastName}</Option>
                                    )
                                })}
                            </Select>
                        </div>} 
    
                        {alias !== null && <div className='filterFormItem'>
                            <label>Alias: </label>
                            <Select onChange={(e)=>{setAliasId(e)}} className='filterSelect'>
                                <Option value=""> </Option>
                                {alias.map((a)=>{
                                    return (
                                        <Option key={a.id} value={a.id}>{a.alias}</Option>
                                    )
                                })}
                            </Select>
                        </div>}
                    </div>}

                    {props.purchase && <div>

                        {projects !== null && <div className='filterFormItem'>
                        <label>Projects: </label>
                        <Select onChange={(e)=>{setProjectId(e)}} className='filterSelect'>
                            <Option value=""> </Option>
                            {projects.map((p)=>{
                                return (
                                    <Option key={p.id} value={p.id}>{p.name}</Option>
                                )
                            })}
                        </Select>
                         </div>}

                        {suppliers !== null && <div className='filterFormItem'>
                            <label>Supplier: </label>
                            <Select onChange={(e)=>{setSupplierId(e)}} className='filterSelect'>
                                <Option value=""> </Option>
                                {suppliers.map((s)=>{
                                    return (
                                        <Option key={s.id} value={s.id}>{s.name}</Option>
                                    )
                                })}
                            </Select>
                        </div>}
                    </div>}

                    <div className='filterButton'>
                        <Button type='submit'>Filter</Button>
                    </div>
                </form>
            </div>
        </Modal>
    );
}
 
export default TableFilters;