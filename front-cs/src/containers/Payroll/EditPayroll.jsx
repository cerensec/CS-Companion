import React, { useState, useEffect } from 'react';
import { DatePicker, Divider, Select } from 'antd';
import { Button,NumberInput,Textarea } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectProjects } from '../../slices/projectSlice';
import { getAllAlias } from '../../api/alias';
import { getAllStaff } from '../../api/staff';
import { deletePayroll, getPayrollById, updatePayroll } from '../../api/payroll';
import {BsFillTrashFill} from 'react-icons/bs';
import {AiFillSave} from 'react-icons/ai';
import moment from 'moment';
import Notiflix from 'notiflix';

const EditPayroll = (props) => {
        // Option component for the select
        const { Option } = Select;
        // Form data states
        const navigate = useNavigate();
        const projects = useSelector(selectProjects);
        const [alias, setAlias] = useState(null);
        const [staff, setStaff] = useState(null);
        const [payroll, setPayroll] = useState(null);
        // Form states
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

            getPayrollById(props.params.id)
            .then((res)=>{
                // We set the values of the state to use them as default values
                setPayroll(res.payroll[0]);
                setDate(moment(res.payroll[0].date).format('YYYY-MM-DD'));
                setProjectId(res.payroll[0].name);
                setType(res.payroll[0].type);
                setPayrollNumber(res.payroll[0].payrollNumber);
                setAmount(res.payroll[0].amount);
                setTax(res.payroll[0].tax);
                setSalary(res.payroll[0].salary);
                setComments(res.payroll[0].comments);
                // We retrieve all the alias
                getAllAlias()
                .then((aliasRes)=>{
                    setAlias(aliasRes.alias)
                    aliasRes.alias.forEach((a)=>{
                        if(a.alias === res.payroll[0].alias){
                            setAliasId(a.id)
                        }
                    })
                })
                .catch((err)=>{
                    console.log(err);
                })
                // We retrieve the staff
                getAllStaff()
                .then((staffRes)=>{
                    setStaff(staffRes.staff)
                    staffRes.staff.forEach((s)=>{
                        if(s.firstName === res.payroll[0].firstName){
                            setStaffId(s.id);
                        }
                    })
                })
                .catch((err)=>{
                        console.log(err);
                })
            })
        },[])
        
        const onSubmit = () =>{
            // We look for the project_id because the payroll returns the name
            let pId = projectId;
            projects.forEach((p)=>{
                if(projectId === p.name){
                    pId = p.id;
                }
            })
            let data = {
                date: moment(date).format('YYYY-MM-DD'),
                project_id: pId,
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
            console.log(data)
            // We update the payroll
            updatePayroll(props.params.id,data)
            .then((res)=>{
                console.log(res);
                if(res.status === 200){
                    Notiflix.Notify.success(res.msg);
                    navigate('/payroll');
                }else{
                    Notiflix.Notify.failure(res.err.sqlMessage);
                }
            })
            .catch((err)=>{
                console.log(err)
            })
        }

        const onDelete = () =>{
            deletePayroll(props.params.id)
            .then((res)=>{
                console.log(res);
                if(res.status === 200){
                    Notiflix.Notify.success(res.msg);
                    navigate('/payroll');
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
                <h1>Add new Payroll</h1>
                <Divider/>
                <div className='secondaryContainer'>
                    <form onSubmit={(e)=>{
                        e.preventDefault();
                        onSubmit();
                    }}>
                        {payroll !== null && <div className='gridWrapper'>

                            <div className='gridItem'>
                                <label className='formLabel'>Date</label>
                                <DatePicker defaultValue={moment(payroll.date, 'YYYY-MM-DD')} className='formInput' format={'YYYY-MM-DD'} onChange={(e)=>{setDate(e)}}/>
                            </div>

                            <div className='gridItem'>
                                <label className='formLabel'>Projects</label>
                                {projects !== undefined && <Select defaultValue={payroll.name} className='formInput' onChange={(e)=>{setProjectId(e)}}>
                                    {projects.map((p)=>{
                                        return (
                                            <Option key={p.id} value={p.id}>{p.name}</Option>
                                        )
                                    })}
                                </Select>}
                            </div>

                            <div className='gridItem'>
                                <label className='formLabel'>Type</label>
                                <Select defaultValue={payroll.type} className='formInput' onChange={(e)=>{setType(e)}}>
                                    <Option value="OBRA">Obra</Option>
                                    <Option value="AL DIA">Al Dia</Option>
                                </Select>
                            </div>

                            <div className='gridItem'>
                                <label className='formLabel'>Payroll Number</label>
                                <NumberInput
                                    defaultValue={payroll.payrollNumber}
                                    className='formInput'
                                    icon={'#'}
                                    value={""}
                                    onChange={(e)=>{
                                        setPayrollNumber(e)
                                    }}
                                />
                            </div>

                            <div className='gridItem'>
                                <label className='formLabel'>Staff</label>
                                {staff !== null && <Select defaultValue={payroll.firstName} className='formInput' onChange={(e)=>{setStaffId(e)}}>
                                    {staff.map((s)=>{
                                        return (
                                            <Option key={s.id} value={s.id}>{s.firstName}</Option>
                                        )
                                    })}
                                </Select>}
                            </div>

                            <div className='gridItem'>
                                <label className='formLabel'>Alias</label>
                                {alias !== null && <Select defaultValue={payroll.alias} className='formInput' onChange={(e)=>{setAliasId(e)}}>
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
                                    precision={4}
                                    defaultValue={payroll.amount}
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
                                    defaultValue={payroll.tax}
                                    value={payroll.tax}
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
                                    value={payroll.salary}
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
                                    defaultValue={payroll.comments}
                                    onChange={(e)=>{setComments(e.currentTarget.value)}}
                                    className='formInput'
                                    placeholder='Your comment'
                                />
                            </div>
                        </div>}
                        <div style={{margin:'10px'}}>
                            <Button leftIcon={<AiFillSave/>} type='submit'>Save</Button>
                            <Button onClick={onDelete} leftIcon={<BsFillTrashFill/>} style={{backgroundColor:'red',marginLeft:'10px'}} >Delete</Button>
                        </div>
                    </form>
                </div>
            </div>
        );
}
 
export default EditPayroll;