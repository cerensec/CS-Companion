import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextInput,Button } from '@mantine/core';
import { updateProject, getProjectById, getAllProjects } from '../../api/projects';
import { useDispatch } from 'react-redux';
import { setProjects } from '../../slices/projectSlice';
import { Divider } from 'antd';
import { AiFillSave } from 'react-icons/ai';
import Notiflix from 'notiflix';

const EditProject = (props) => {
    // Dispatch 
    const dispatch = useDispatch();
    // Navigation 
    const navigate = useNavigate();
    // Edit Form states
    const [project, setProject] = useState(null);
    const [name,setName] = useState("");
    const [address,setAddress] = useState("");
    const [city,setCity] = useState("");
    const [country,setCountry] = useState("");

    useEffect(()=>{
        getProjectById(props.params.id)
        .then((res)=>{
            setProject(res.project[0]);
        })
        .catch((err)=>{
            console.log(err);
        })
    },[])

    const onSubmit = () =>{
        // We check if nothing was changed to send the same information for the update
        let data = {
            name: name === "" ? project.name : name,
            address: address === "" ? project.address : address,
            city: city === "" ? project.city : city,
            country: country === "" ? project.country : country
        }
        updateProject(props.params.id,data)
        .then((res)=>{
            if(res.status === 200){
                Notiflix.Notify.success(res.msg);
                getAllProjects()
                .then((res)=>{
                    dispatch(setProjects(res.projects));
                })
                .catch((err)=>{
                    console.log(err);
                })
                navigate('/projectInfo/'+props.params.id);
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
            <h1>Add new Project</h1>
            <Divider/>
            <div className='secondaryContainer'>
                {project != null &&
                <form onSubmit={(e)=>{
                    e.preventDefault();
                    onSubmit();
                }}>
                    <div className='gridWrapper'>
                        <div className='gridItem'>
                            <label className='formLabel'>Name:</label>
                            <TextInput className='formInput' defaultValue={project.name} onChange={(e)=>{setName(e.currentTarget.value)}}/>
                        </div>
                        <div className='gridItem'>
                            <label className='formLabel'>Address:</label>
                            <TextInput className='formInput' defaultValue={project.address} onChange={(e)=>{setAddress(e.currentTarget.value)}}/>
                        </div>
                        <div className='gridItem'>
                            <label className='formLabel'>City:</label>
                            <TextInput className='formInput' defaultValue={project.city} onChange={(e)=>{setCity(e.currentTarget.value)}}/>
                        </div>
                        <div className='gridItem'>
                            <label className='formLabel'>Country:</label>
                            <TextInput className='formInput' defaultValue={project.country} onChange={(e)=>{setCountry(e.currentTarget.value)}}/>
                        </div>
                    </div>
                    <Button leftIcon={<AiFillSave/>} type='submit'>Save</Button>
                </form>}
            </div>
        </div>
    );
}
 
export default EditProject;