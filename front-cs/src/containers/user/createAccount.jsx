import React, { useState } from 'react';
import { Divider, Select } from 'antd';
import { TextInput, Button } from '@mantine/core';
import { AiFillSave } from 'react-icons/ai';
import { saveUser } from '../../api/user';
import { useNavigate } from 'react-router-dom';
import Notiflix from 'notiflix';

const CreateAccount = (props) => {
    // Select Option
    const {Option} = Select;
    // Navigation
    const navigate = useNavigate();
    // Add form states
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("");

    const onSubmit = () =>{
        let data = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
            role: role
        }
        saveUser(data)
        .then((res)=>{
            if(res.status === 200){
                Notiflix.Notify.success(res.msg);
                navigate('/profile');
            }else{
                Notiflix.Notify.failure(res.msg);
            }
        })
    }

    return (  
        <div className='componentContainer'>
            <h1>Create an account</h1>
            <Divider/>
            <div className='secondaryContainer'>
                <form 
                    onSubmit={(e)=>{
                        e.preventDefault();
                        onSubmit();
                    }}
                >
                    <div className='gridWrapper'>
                        <div className='gridItem'>
                            <label className='formLabel'>First Name:</label>
                            <TextInput className='formInput' onChange={(e)=>{setFirstName(e.currentTarget.value)}}/>
                        </div>
                        <div className='gridItem'>
                            <label className='formLabel'>Last Name:</label>
                            <TextInput className='formInput' onChange={(e)=>{setLastName(e.currentTarget.value)}}/>
                        </div>
                        <div className='gridItem'>
                            <label className='formLabel'>Email:</label>
                            <TextInput className='formInput' onChange={(e)=>{setEmail(e.currentTarget.value)}}/>
                        </div>
                        <div className='gridItem'>
                            <label className='formLabel'>Password:</label>
                            <TextInput className='formInput' onChange={(e)=>{setPassword(e.currentTarget.value)}}/>
                        </div>
                        <div className='gridItem'>
                            <label className='formLabel'>Role:</label>
                            <Select className='formInput' onChange={(e)=>{setRole(e)}}>
                                <Option value="user">User</Option>
                                <Option value="admin">Admin</Option>
                            </Select>
                        </div>
                    </div>
                    <Button type='submit' leftIcon={<AiFillSave/>}>Create</Button>
                </form>
            </div>
        </div>
    );
}
 
export default CreateAccount;