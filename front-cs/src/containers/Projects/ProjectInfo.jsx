import React, { useState, useEffect } from 'react';
import { getProjectById } from '../../api/projects';
import { getSalesByProjectId } from '../../api/sales';
import { useNavigate } from 'react-router-dom';
import { getClientById } from '../../api/client';
import { Button } from '@mantine/core';
import {BsFillTrashFill} from 'react-icons/bs';
import {AiFillEdit} from 'react-icons/ai';
import { deleteProject } from '../../api/projects';
import Notiflix from 'notiflix';
import { Divider } from 'antd';

const ProjectInfo = (props) => {
    // Navigate
    const navigate = useNavigate();
    // Project info states
    const [project, setProject] = useState(null)
    const [client,setClient] = useState(null);

    useEffect(()=>{
        getProjectById(props.params.id)
        .then((res)=>{
            setProject(res.project[0]);
        })
        .catch((err)=>{
            console.log(err);
        })
        getSalesByProjectId(props.params.id)
        .then((res)=>{
            getClientById(res.sales[0].client_id)
            .then((res)=>{
                setClient(res.client[0]);
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
        deleteProject(props.params.id)
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
            {project !== null && <div className='secondaryContainer'>
                <h1>{project.name}</h1>
                <Divider/>
                <table>
                    <tr>
                        <td>Address:</td>
                        <td>{project.address}</td>
                    </tr>
                    <tr>
                        <td>City:</td>
                        <td>{project.city}</td>
                    </tr>
                    <tr>
                        <td>Country:</td>
                        <td>{project.country}</td>
                    </tr>
                </table>
            </div>}
            <div>
                <Button leftIcon={<AiFillEdit/>} style={{margin:'10px'}} onClick={()=>{navigate('/editProject/'+props.params.id)}}>
                    Edit
                </Button>
                <Button color='red' leftIcon={<BsFillTrashFill/>} onClick={onDelete}>
                    Delete
                </Button>
            </div>
        </div>
    );
}
 
export default ProjectInfo;