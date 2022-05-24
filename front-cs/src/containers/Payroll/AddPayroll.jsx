import React, { useState, useEffect } from 'react';
import { DatePicker, Divider, Select } from 'antd';
import { Button,NumberInput,Textarea } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectProjects } from '../../slices/projectSlice';
import { getAllAlias } from '../../api/alias';
import { getAllStaff } from '../../api/staff';
import { getMaxPayrollNumber, savePayroll } from '../../api/payroll';
import moment from 'moment';
import Notiflix from 'notiflix';

const AddPayroll = (props) => {

    const { Option } = Select;

    const navigate = useNavigate();
    const projects = useSelector(selectProjects);
    const [maxPayrollNumber, setMaxPayrollNumber] = useState(0);
    const [alias, setAlias] = useState(null);
    const [staff, setStaff] = useState(null);
    const [date, setDate] = useState(null);
    const [projectId, setProjectId] = useState("");
    const [type, setType] = useState("");
    const [payrollNumber, setPayrollNumber] = useState("");
    const [staffId, setStaffId] = useState("");
    const [aliasId, setAliasId] = useState("");
    const [amount, setAmount] = useState(0);
    const [tax, setTax] = useState(0);
    const [salary, setSalary] = useState(0);
    const [comments, setComments] = useState("");

    useEffect(()=>{
        getAllAlias()
        .then((res)=>{
            setAlias(res.alias)
        })
        .catch((err)=>{
            console.log(err);
        })

        getAllStaff()
        .then((res)=>{
            setStaff(res.staff)
        })
        .catch((err)=>{
            console.log(err);
        })

        getMaxPayrollNumber()
        .then((res)=>{
            setMaxPayrollNumber(res.payroll[0].maxPayrollNumber)
        })
    },[])

    const onSubmit = () =>{
        let data = {
            date: moment(date).format('YYYY-MM-DD'),
            project_id: projectId,
            type: type,
            payrollNumber: payrollNumber,
            staff_id: staffId,
            alias_id: aliasId,
            amount: amount,
            tax: tax,
            salary: salary,
            comments: comments,
            finished: 1
        }
        savePayroll(data)
        .then((res)=>{
            if(res.status === 200){
                Notiflix.Notify.success(res.msg);
                navigate('/payroll');
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
            <h1>Add new Payroll</h1>
            <Divider/>
            <div className='secondaryContainer'>
                <form onSubmit={(e)=>{
                    e.preventDefault();
                    onSubmit();
                }}>
                <div className='gridWrapper'>
                        <div className='gridItem'>
                            <label className='formLabel'>Date</label>
                            <DatePicker className='formInput' format={'YYYY-MM-DD'} onChange={(e)=>{setDate(e)}}/>
                        </div>
                        <div className='gridItem'>
                            <label className='formLabel'>Projects</label>
                            {projects !== undefined && <Select className='formInput' onChange={(e)=>{setProjectId(e)}}>
                                {projects.map((p)=>{
                                    return (
                                        <Option key={p.id} value={p.id}>{p.name}</Option>
                                    )
                                })}
                            </Select>}
                        </div>
                        <div className='gridItem'>
                            <label className='formLabel'>Type</label>
                            <Select className='formInput' onChange={(e)=>{setType(e)}}>
                                <Option value="OBRA">Obra</Option>
                                <Option value="AL DIA">Al Dia</Option>
                            </Select>
                        </div>
                        <div className='gridItem'>
                            <label className='formLabel'>Payroll Number</label>
                            <NumberInput 
                                className='formInput'
                                icon={'#'}
                                value={maxPayrollNumber}
                                onChange={(e)=>{
                                    setPayrollNumber(e)
                                }}
                            />
                        </div>
                        <div className='gridItem'>
                            <label className='formLabel'>Staff</label>
                            {staff !== null && <Select className='formInput' onChange={(e)=>{setStaffId(e)}}>
                                {staff.map((s)=>{
                                    return (
                                        <Option key={s.id} value={s.id}>{s.firstName}</Option>
                                    )
                                })}
                            </Select>}
                        </div>
                        <div className='gridItem'>
                            <label className='formLabel'>Alias</label>
                            {alias !== null && <Select className='formInput' onChange={(e)=>{setAliasId(e)}}>
                                {alias.map((a)=>{
                                    return (
                                        <Option key={a.id} value={a.id}>{a.alias}</Option>
                                    )
                                })}
                            </Select>}
                        </div>
                        <div className='gridItem'>
                            <label className='formLabel'>Amount</label>
                            <NumberInput 
                                className='formInput'
                                icon={'$'}
                                defaultValue={0}
                                precision={4}
                                hideControls
                                onChange={(e)=>{
                                    console.log(e);
                                    setAmount(e);
                                    setTax(e/10);
                                    setSalary(e-(e/10));
                                }}
                            />
                        </div>
                        <div className='gridItem'>
                            <label className='formLabel'>Tax</label>
                            <NumberInput 
                                className='formInput'
                                icon={'$'}
                                value={tax}
                                precision={4}
                                hideControls
                                onChange={(e)=>{
                                    setTax(e);
                                }}
                            />
                        </div>
                        <div className='gridItem'>
                            <label className='formLabel'>Salary</label>
                            <NumberInput 
                                className='formInput'
                                icon={'$'}
                                value={salary}
                                precision={4}
                                hideControls
                                onChange={(e)=>{
                                    setSalary(e);
                                }}
                            />
                        </div>
                        <div className='gridItem'>
                            <label className='formLabel'>Comments</label>
                            <Textarea
                                onChange={(e)=>{setComments(e.currentTarget.value)}}
                                className='formInput'
                                placeholder='Your comment'
                            />
                        </div>
                    </div>
                    <Button type='submit'>Save</Button>
                </form>
            </div>
        </div>
    );
}
 
export default AddPayroll;