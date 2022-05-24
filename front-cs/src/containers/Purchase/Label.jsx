import React, { useState, useEffect } from 'react';
import { Button, Modal, TextInput } from '@mantine/core';
import {BsFillTrashFill} from 'react-icons/bs';
import {AiFillEdit,AiFillSave} from 'react-icons/ai';
import {MdAddCircleOutline} from 'react-icons/md';
import Notiflix from 'notiflix';
import { Divider } from 'antd';
import { deleteLabel, getAllLabels, saveLabel, updateLabel } from '../../api/label';

const Label = (props) => {
    // Label data
    const [label, setLabel] = useState(null);
    // Modal toggle states
    const [addLabel, setAddLabel] = useState(false);
    const [editLabel, setEditLabel] = useState(false);
    // Add form states
    const [name, setName] = useState("");
    // Edit form states
    const [editedLabel, setEditedLabel] = useState(null);
    const [editName, setEditName] = useState("");

    useEffect(()=>{
        fetchLabel();
    },[])

    const fetchLabel = () =>{
        getAllLabels()
        .then((res)=>{
            setLabel(res.labels);
        })
        .catch((err)=>{
            console.log(err);
        })
    }

    const onSubmit = () =>{
        let data = {
            name: name
        }
        saveLabel(data)
        .then((res)=>{
            if(res.status == 200){
                Notiflix.Notify.success(res.msg);
                fetchLabel();
                setAddLabel(!addLabel);
            }else{
                Notiflix.Notify.failure(res.err.sqlMessage);
            }
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    const onSubmitEdit = () =>{
        let data = {
            name: editName !== "" ? editName : editedLabel.name
        }
        updateLabel(editedLabel.id,data)
        .then((res)=>{
            if(res.status == 200){
                Notiflix.Notify.success(res.msg);
                fetchLabel();
                setEditLabel(!editLabel);
            }else{
                Notiflix.Notify.failure(res.err.sqlMessage);
            }
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    const onDelete = (id) =>{
        deleteLabel(id)
        .then((res)=>{
            if(res.status == 200){
                Notiflix.Notify.success(res.msg);
                fetchLabel();
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
            <h1>Label</h1>
            <Divider/>
            <Button leftIcon={<MdAddCircleOutline size={18}/>} style={{marginBottom:'10px'}} onClick={()=>{setAddLabel(!addLabel)}}>
                Add new label
            </Button>
            {/* Modal to add a Label */}
            <Modal
                transition={"fade"}
                centered
                opened={addLabel}
                onClose={()=>setAddLabel(!addLabel)}
                title="Add Label"
            >
                <form style={{display:'flex',flexDirection:'column',justifyContent:'center'}} onSubmit={(e)=>{
                    e.preventDefault();
                    onSubmit();
                }}>
                    <TextInput label="Name:" onChange={(e)=>{setName(e.currentTarget.value)}} />
                    <Button type='submit' leftIcon={<AiFillSave/>} style={{width:'10rem',margin:'auto',marginTop:'10px'}}>Save</Button>
                </form>
            </Modal>
            {/* Modal to eddit a Label */}
            <Modal
                transition={"fade"}
                centered
                opened={editLabel}
                onClose={()=>setEditLabel(!editLabel)}
                title="Edit Label"
            >
                <form style={{display:'flex',flexDirection:'column',justifyContent:'center'}} onSubmit={(e)=>{
                    e.preventDefault();
                    onSubmitEdit();
                }}>
                    <TextInput defaultValue={editedLabel !== null ? editedLabel.name :  ""} label="Name:" onChange={(e)=>{setEditName(e.currentTarget.value)}} />
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
                    {label !== null && <tbody>
                        {/* Load of labels on table */}
                        {label.map((l)=>{
                            return (
                                <tr key={l.id}>
                                    <td>{l.name}</td>
                                    <td>
                                        <Button leftIcon={<AiFillEdit/>} size='xs' onClick={()=>{
                                                setEditLabel(!editLabel);
                                                setEditedLabel(l);
                                            }}>
                                            Edit
                                        </Button>
                                        <Button color={'red'} leftIcon={<BsFillTrashFill/>} size='xs' style={{marginLeft:'5px'}} onClick={()=>{onDelete(l.id)}} >
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
 
export default Label;