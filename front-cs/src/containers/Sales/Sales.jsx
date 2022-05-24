import React, { useState, useEffect } from 'react';
import { Button, Modal, TextInput } from '@mantine/core';
import {BsFillTrashFill} from 'react-icons/bs';
import {AiFillEdit,AiFillSave} from 'react-icons/ai';
import {MdAddCircleOutline} from 'react-icons/md';
import { Divider, Select } from 'antd';
import { deleteSale, getAllSales, saveSale, updateSale } from '../../api/sales';
import { useSelector } from 'react-redux';
import { selectProjects } from '../../slices/projectSlice';
import { selectClients } from '../../slices/clientSlice';
import Notiflix from 'notiflix';

const Sales = (props) => {
    const {Option} = Select;
    // Form and display data
    const [sales, setSales] = useState(null);
    const projects = useSelector(selectProjects);
    const clients = useSelector(selectClients);
    // Modal toggle state
    const [addSale, setAddSale] = useState(false);
    const [editSale, setEditSale] = useState(false);
    // Add form states
    const [projectId, setProjectId] = useState("");
    const [clientId, setClientId] = useState("");
    // Edit form States
    const [editedSale, setEditedSale] = useState(null);
    const [editProjectId, setEditProjectId] = useState("");
    const [editClientId, setEditClientId] = useState("");

    useEffect(()=>{
        fetchSales();
    },[])

    const fetchSales = () =>{
        getAllSales()
        .then((res)=>{
            setSales(res.sales);
        })
        .catch((err)=>{
            console.log(err);
        })
    }

    const onSubmit = () =>{
        let data = {
            project_id: projectId,
            client_id: clientId
        }
        saveSale(data)
        .then((res)=>{
            if(res.status == 200){
                Notiflix.Notify.success(res.msg);
                fetchSales();
                setAddSale(!addSale);
            }else{
                Notiflix.Notify.failure(res.err.sqlMessage);
            }
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    const onSubmitEdit = () =>{
        console.log(editedSale)
        let pId = null;
        projects.forEach((p)=>{
            if(p.name === editedSale.pName){
                pId = p.id;
            }
        });
        let cId = null;
        clients.forEach((c)=>{
            if(c.name === editedSale.cName){
                cId = c.id;
            }
        });
        let data = {
            project_id: editProjectId !== "" ? editProjectId : pId,
            client_id: editClientId !== "" ? editClientId : cId
        }
        console.log(data);
        updateSale(editedSale.id,data)
        .then((res)=>{
            if(res.status == 200){
                Notiflix.Notify.success(res.msg);
                fetchSales();
                setEditProjectId("");
                setEditClientId("");
                setEditSale(!editSale);
            }else{
                Notiflix.Notify.failure(res.err.sqlMessage);
            }
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    const onDelete = (id) =>{
        deleteSale(id)
        .then((res)=>{
            if(res.status == 200){
                Notiflix.Notify.success(res.msg);
                fetchSales();
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
            <h1>Sales</h1>
            <Divider/>
            <Button leftIcon={<MdAddCircleOutline size={18}/>} style={{marginBottom:'10px'}} onClick={()=>{setAddSale(!addSale)}}>
                Add new sale
            </Button>
            {/* Modal to add a sale */}
            <Modal
                transition={"fade"}
                centered
                opened={addSale}
                onClose={()=>setAddSale(!addSale)}
                title="Add Sale"
            >
                <form style={{display:'flex',flexDirection:'column',justifyContent:'center'}} onSubmit={(e)=>{
                    e.preventDefault();
                    onSubmit();
                }}>
                    <label className='formLabel'>Projects:</label>
                    {projects !== null && <Select onChange={(e)=>{setProjectId(e)}}>
                        {projects.map((p)=>{
                            return (
                                <Option key={p.id} value={p.id}>{p.name}</Option>
                            )
                        })}
                    </Select>}
                    <label className='formLabel'>Clients:</label>
                    {clients !== null && <Select onChange={(e)=>{setClientId(e)}} >
                        {clients.map((c)=>{
                            return (
                                <Option key={c.id} value={c.id}>{c.name}</Option>
                            )
                        })}
                    </Select>}
                    <Button type='submit' leftIcon={<AiFillSave/>} style={{width:'10rem',margin:'auto',marginTop:'10px'}}>Save</Button>
                </form>
            </Modal>
            {/* Modal to edit a sale */}
            <Modal
                transition={"fade"}
                centered
                opened={editSale}
                onClose={()=>setEditSale(!editSale)}
                title="Edit alias"
            >
                <form style={{display:'flex',flexDirection:'column',justifyContent:'center'}} onSubmit={(e)=>{
                    e.preventDefault();
                    onSubmitEdit();
                }}>
                    <label className='formLabel'>Projects:</label>
                    {projects !== null && <Select defaultValue={editedSale !== null ? editedSale.pName : ""} onChange={(e)=>{setEditProjectId(e)}}>
                        {projects.map((p)=>{
                            return (
                                <Option key={p.id} value={p.id}>{p.name}</Option>
                            )
                        })}
                    </Select>}
                    <label className='formLabel'>Clients:</label>
                    {clients !== null && <Select defaultValue={editedSale !== null ? editedSale.cName : ""} onChange={(e)=>{setEditClientId(e)}} >
                        {clients.map((c)=>{
                            return (
                                <Option key={c.id} value={c.id}>{c.name}</Option>
                            )
                        })}
                    </Select>}
                    <Button type='submit' leftIcon={<AiFillSave/>} style={{width:'10rem',margin:'auto',marginTop:'10px'}}>Save</Button>
                </form>
            </Modal>
            <div className='secondaryContainer'>
                <table>
                    <thead>
                        <tr>
                            <th>Project</th>
                            <th>Client</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    {sales !== null && <tbody>
                        {/* Load of sales into table */}
                        {sales.map((s)=>{
                            return (
                                <tr key={s.id}>
                                    <td>{s.pName}</td>
                                    <td>{s.cName}</td>
                                    <td>
                                        <Button style={{width:'7rem'}} leftIcon={<AiFillEdit/>} onClick={()=>{
                                                setEditSale(!editSale);
                                                setEditedSale(s);
                                            }}>
                                            Edit
                                        </Button>
                                        <Button color={'red'} leftIcon={<BsFillTrashFill/>} style={{marginTop:'5px',width:'7rem'}} onClick={()=>{onDelete(s.id)}} >
                                            Delete
                                        </Button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>}
                </table>
            </div>
        </div>
    );
}
 
export default Sales;