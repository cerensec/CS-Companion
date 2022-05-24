import React, { useState } from 'react';
import { Divider } from 'antd';
import { TextInput, Button } from '@mantine/core';
import { AiFillSave } from 'react-icons/ai';
import { getUserByEmail, updateUser } from '../../api/user';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../slices/userSlice';
import { setUser } from '../../slices/userSlice';
import Notiflix from 'notiflix';

const EditPro = (props) => {
    // Dispatch
    const dispatch = useDispatch();
    // Navigation
    const navigate = useNavigate();
    // User selector
    const user = useSelector(selectUser);
    // Add form states
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");

    const onSubmit = () =>{
        let data = {
            firstName: firstName === "" ? user.infos.firstName : firstName,
            lastName: lastName === "" ? user.infos.lastName : lastName,
            email: email === "" ? user.infos.email : email,
        }
        
        updateUser(user.infos.id,data)
        .then((res)=>{
            console.log(res)
            if(res.status === 200){
                Notiflix.Notify.success(res.msg);
                getUserByEmail({email:data.email})
                .then((res)=>{
                    let user = res.user[0];
                    user.token = localStorage.getItem("token")
                    dispatch(setUser(user));
                })
                navigate('/profile');
            }else{
                Notiflix.Notify.failure(res.msg);
            }
        })
    }

    return (  
        <div className='componentContainer'>
            <h1>Edit Profile</h1>
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
                            <TextInput defaultValue={user.infos.firstName} className='formInput' onChange={(e)=>{setFirstName(e.currentTarget.value)}}/>
                        </div>
                        <div className='gridItem'>
                            <label className='formLabel'>Last Name:</label>
                            <TextInput defaultValue={user.infos.lastName} className='formInput' onChange={(e)=>{setLastName(e.currentTarget.value)}}/>
                        </div>
                        <div className='gridItem'>
                            <label className='formLabel'>Email:</label>
                            <TextInput defaultValue={user.infos.email} className='formInput' onChange={(e)=>{setEmail(e.currentTarget.value)}}/>
                        </div>
                    </div>
                    <Button type='submit' leftIcon={<AiFillSave/>}>Save</Button>
                </form>
            </div>
        </div>
    );
}
 
export default EditPro;