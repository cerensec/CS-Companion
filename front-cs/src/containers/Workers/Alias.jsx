import React, { useState, useEffect } from 'react';
import { Button, Modal, TextInput } from '@mantine/core';
import { getAllAlias,saveAlias,deleteAlias,updateAlias } from '../../api/alias';
import {BsFillTrashFill} from 'react-icons/bs';
import {AiFillEdit,AiFillSave} from 'react-icons/ai';
import {MdAddCircleOutline} from 'react-icons/md';
import Notiflix from 'notiflix';
import { Divider } from 'antd';

const Alias = (props) => {
    // Alias Data
    const [alias,setAlias] = useState(null);
    // Modal toggle state
    const [opened, setOpened] = useState(false);
    const [edit,setEdit] = useState(false);
    // Add form data
    const [name, setName] = useState("");
    // Edit form data
    const [editAlias, setEditAlias] = useState("");
    const [newAlias, setNewAlias] = useState("");

    useEffect(()=>{
        fetchAlias();
    },[])

    // Load the data for the alias
    const fetchAlias = () =>{
        getAllAlias()
        .then((res)=>{
            setAlias(res.alias);
        })
        .catch((err)=>{
            console.log(err);
        })
    }

    // Suppression d'un Alias
    const onDelete = (id) =>{
        deleteAlias(id)
        .then((res)=>{
            if(res.status == 200){
                Notiflix.Notify.success(res.msg);
                fetchAlias();
            }else{
                Notiflix.Notify.failure(res.err.sqlMessage);
            }
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    // Ajout d'un Alias
    const onSubmit = () =>{
        let data = {
            alias: name
        }
        saveAlias(data)
        .then((res)=>{
            if(res.status == 200){
                Notiflix.Notify.success(res.msg);
                fetchAlias();
                setOpened(false);
            }else{
                Notiflix.Notify.failure(res.err.sqlMessage);
            }
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    // Edition d'un Alias
    const onSubmitEdit = () =>{
        let data = {
            alias: newAlias === "" ? editAlias.alias : newAlias
        }
        updateAlias(editAlias.id,data)
        .then((res)=>{
            if(res.status == 200){
                Notiflix.Notify.success(res.msg);
                fetchAlias();
                setEdit(false);
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
            <h1>Alias</h1>
            <Divider/>
            <Button leftIcon={<MdAddCircleOutline size={18}/>} style={{marginBottom:'10px'}} onClick={()=>{setOpened(!opened)}}>
                Add new alias
            </Button>
            {/* Modal d'ajout d'un Alias */}
            <Modal
                transition={"fade"}
                centered
                opened={opened}
                onClose={()=>setOpened(!opened)}
                title="Add alias"
            >
                <form style={{display:'flex',flexDirection:'column',justifyContent:'center'}} onSubmit={(e)=>{
                    e.preventDefault();
                    onSubmit();
                }}>
                    <TextInput label="Name:" onChange={(e)=>{setName(e.currentTarget.value)}} />
                    <Button type='submit' leftIcon={<AiFillSave/>} style={{width:'10rem',margin:'auto',marginTop:'10px'}}>Save</Button>
                </form>
            </Modal>
            {/* Modal d'édition d'un Alias */}
            <Modal
                transition={"fade"}
                centered
                opened={edit}
                onClose={()=>setEdit(!edit)}
                title="Edit alias"
            >
                <form style={{display:'flex',flexDirection:'column',justifyContent:'center'}} onSubmit={(e)=>{
                    e.preventDefault();
                    onSubmitEdit();
                }}>
                    <TextInput defaultValue={editAlias.alias} label="Name:" onChange={(e)=>{setNewAlias(e.currentTarget.value)}} />
                    <Button type='submit' leftIcon={<AiFillSave/>} style={{width:'10rem',margin:'auto',marginTop:'10px'}}>Save</Button>
                </form>
            </Modal>
            <div className='secondaryContainer'>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    {alias !== null && <tbody>
                        {/* Itération et chargement des Alias dans le tableau */}
                        {alias.map((a)=>{
                            return (
                                <tr key={a.id}>
                                    <td>{a.alias}</td>
                                    <td>
                                        <Button leftIcon={<AiFillEdit/>} size='xs' onClick={()=>{
                                                setEdit(!edit);
                                                setEditAlias(a);
                                            }}>
                                            Edit
                                        </Button>
                                        <Button color={'red'} leftIcon={<BsFillTrashFill/>} size='xs' style={{marginLeft:'5px'}} onClick={()=>{onDelete(a.id)}} >
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
 
export default Alias;