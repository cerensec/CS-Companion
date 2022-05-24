import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mantine/core';
import {BsFillTrashFill} from 'react-icons/bs';
import {AiFillEdit} from 'react-icons/ai';
import { getAliasById } from '../../api/alias';
import { getStaffById, deleteStaff } from '../../api/staff';
import Notiflix from 'notiflix';


const StaffInfo = (props) => {

    const navigate = useNavigate();
    const [staff,setStaff] = useState(null);
    const [alias,setAlias] = useState("");

    useEffect(()=>{
        getStaffById(props.params.id)
        .then((res)=>{
            console.log(res);
            setStaff(res.staff[0]);
            getAliasById(res.staff[0].alias_id)
            .then((res)=>{
                setAlias(res.alias[0].alias)
            })
            .catch((err)=>{
                console.log(err);
            })
        })
        .catch((err)=>{
            console.log(err);
        })
    },[])


    const onDelete = () =>{
        deleteStaff(props.params.id)
        .then((res)=>{
            if(res.status === 200){
                Notiflix.Notify.success(res.msg);
                navigate('/projects');
            }else{
                Notiflix.Notify.failure(res.err.sqlMessage);
            }
        })
    }

    return (  
        <div className='componentContainer'>
            {staff !== null && <div className='secondaryContainer'>
                <h1>{staff.firstName} {staff.lastName}</h1>
                <table>
                    <tr>
                        <td>Alias:</td>
                        <td>{alias}</td>
                    </tr>
                    <tr>
                        <td>Post:</td>
                        <td>{staff.post}</td>
                    </tr>
                    <tr>
                        <td>NIT:</td>
                        <td>{staff.nit}</td>
                    </tr>
                    <tr>
                        <td>DUI:</td>
                        <td>{staff.dui}</td>
                    </tr>
                    <tr>
                        <td>Phone:</td>
                        <td>{staff.phone}</td>
                    </tr>
                    <tr>
                        <td>Email:</td>
                        <td>{staff.email}</td>
                    </tr>
                </table>
            </div>}
            <div>
                <Button leftIcon={<AiFillEdit/>} style={{margin:'10px'}} onClick={()=>{navigate('/editStaff/'+props.params.id)}}>
                    Edit
                </Button>
                <Button color='red' leftIcon={<BsFillTrashFill/>} onClick={onDelete}>
                    Delete
                </Button>
            </div>
        </div>
    );
}
 
export default StaffInfo;