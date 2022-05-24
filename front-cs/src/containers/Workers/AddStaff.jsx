import React, { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextInput,Button,Select } from '@mantine/core';
import { getAllAlias } from '../../api/alias';
import { saveSatff } from '../../api/staff';
import Notiflix from 'notiflix';
import { Divider } from 'antd';
import { AiFillSave } from 'react-icons/ai';

const AddStaff = (props) => {
    // Navigation
    const navigate = useNavigate();
    // Add form states
    const [alias, setAlias] = useState(null);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [aliasId, setAliasId] = useState(null);
    const [post, setPost] = useState("");
    const [nit, setNit] = useState("");
    const [dui, setDui] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");

    useEffect(()=>{
        getAllAlias()
        .then((res)=>{
            let al = aliasToObjs(res.alias);
            setAlias(al);
        })
        .catch((err)=>{
            console.log(err);
        })
    },[])

    // Transform alias to type of Select of Mantine
    const aliasToObjs = (array) =>{
        const iniitalValue = [];
        for (let i = 0; i < array.length; i++) {
            iniitalValue[i] = {value:array[i].id,label:array[i].alias}
        }
        return iniitalValue
    }

    const onSubmit = () =>{
        let data = {
            firstName: firstName,
            lastName: lastName,
            alias_id: aliasId,
            post: post,
            nit: nit,
            dui: dui,
            phone: phone,
            email: email
        }
        saveSatff(data)
        .then((res)=>{
            if(res.status === 200){
                Notiflix.Notify.success(res.msg);
                navigate('/staff');
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
            <h1>Add new Staff</h1>
            <Divider/>
            <div className='secondaryContainer'>
                <form onSubmit={(e)=>{
                    e.preventDefault();
                    onSubmit();
                }}>
                    <div className='gridWrapper'>
                        <div className='gridItem'>
                            <label className='formLabel'>First Name:</label>
                            <TextInput className='formInput' onChange={(e)=>{setFirstName(e.currentTarget.value)}}/>
                        </div>
                        <div className='gridItem'>
                            <label className='formLabel'>Last Name:</label>
                            <TextInput className='formInput' onChange={(e)=>{setLastName(e.currentTarget.value)}}/>
                        </div>
                        {alias !== null && <div className='gridItem'>
                            <label className='formLabel'>Alias:</label>
                            <Select
                                onChange={(e)=>{setAliasId(e)}}
                                searchable
                                className='formInput'
                                data={alias}
                            />
                        </div>}
                        <div className='gridItem'>
                            <label className='formLabel'>Post:</label>
                            <TextInput className='formInput' onChange={(e)=>{setPost(e.currentTarget.value)}}/>
                        </div>
                        <div className='gridItem'>
                            <label className='formLabel'>NIT:</label>
                            <TextInput className='formInput' onChange={(e)=>{setNit(e.currentTarget.value)}}/>
                        </div>
                        <div className='gridItem'>
                         <label className='formLabel'>DUI:</label>
                            <TextInput className='formInput' onChange={(e)=>{setDui(e.currentTarget.value)}}/>
                        </div>
                        <div className='gridItem'>
                            <label className='formLabel'>Phone:</label>
                            <TextInput className='formInput' onChange={(e)=>{setPhone(e.currentTarget.value)}}/>
                        </div>
                        <div className='gridItem'>
                            <label className='formLabel'>Email:</label>
                            <TextInput className='formInput' onChange={(e)=>{setEmail(e.currentTarget.value)}}/>
                        </div>
                    </div>
                    <Button leftIcon={<AiFillSave/>} type='submit'>Save</Button>
                </form>
            </div>
        </div>
    );
}
 
export default AddStaff;