import { Divider } from 'antd';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../../slices/userSlice';
import { Button } from '@mantine/core';
import {MdAddCircleOutline} from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { AiFillEdit } from 'react-icons/ai';

const Profile = (props) => {
    // User information
    const user = useSelector(selectUser);
    // Navigation
    const navigate = useNavigate();
    
    return (  
        <div className='componentContainer'>
            <h1>My profile</h1>
            <Divider/>
            <div className='secondaryContainer'>
                {user !== undefined && <table>
                    <tbody>
                        <tr>
                            <td>First Name:</td>
                            <td>{user.infos.firstName}</td>
                        </tr>
                        <tr>
                            <td>Last Name:</td>
                            <td>{user.infos.lastName}</td>
                        </tr>
                        <tr>
                            <td>Email:</td>
                            <td>{user.infos.email}</td>
                        </tr>
                        <tr>
                            <td>Role:</td>
                            <td>{user.infos.role}</td>
                        </tr>
                    </tbody>  
                </table>}
                 <div className='profileBottom'>
                    {user.infos.role === "admin" && <Button leftIcon={<MdAddCircleOutline/>} onClick={(e)=>{navigate('/createAccount')}} >Create an account</Button>}
                    <Button leftIcon={<AiFillEdit/>} style={{marginTop:'5px'}} onClick={()=>{navigate(`/editProfile/${user.infos.id}`)}}>Edit profile info</Button>
                </div>
            </div>
        </div>
    );
}
 
export default Profile;