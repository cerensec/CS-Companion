import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextInput,Button } from '@mantine/core';
import { getAllProjects, saveProject } from '../../api/projects';
import { useDispatch } from 'react-redux';
import { setProjects } from '../../slices/projectSlice';
import {AiFillSave} from 'react-icons/ai';
import Notiflix from 'notiflix';

const AddProject = (props) => {
    // Navigation
    const navigate = useNavigate();
    // Dispatch
    const dispatch = useDispatch();
    // Add form states
    const [name,setName] = useState("");
    const [address,setAddress] = useState("");
    const [city,setCity] = useState("");
    const [country,setCountry] = useState("");

    const onSubmit = () =>{
        let data = {
            name: name,
            address: address,
            city: city,
            country: country
        };
        
        saveProject(data)
        .then((res)=>{
            if(res.status === 200){
                Notiflix.Notify.success(res.msg);
                getAllProjects()
                .then((res)=>{
                    dispatch(setProjects(res.projects))
                    navigate('/projects');
                })
                .catch((err)=>{
                    console.log(err);
                })
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
            <h1>Add new Project</h1>
            <div className='secondaryContainer'>
                <form onSubmit={(e)=>{
                    e.preventDefault();
                    onSubmit();
                }}>
                    <div className='gridWrapper'>
                        <div className='gridItem'>
                            <TextInput label="Name:" onChange={(e)=>{setName(e.currentTarget.value)}}/>
                        </div>
                        <div className='gridItem'>
                            <TextInput label="Address:" onChange={(e)=>{setAddress(e.currentTarget.value)}}/>
                        </div>
                        <div className='gridItem'>
                            <TextInput label="City:" onChange={(e)=>{setCity(e.currentTarget.value)}}/>
                        </div>
                        <div className='gridItem'>
                            <TextInput label="Country:" onChange={(e)=>{setCountry(e.currentTarget.value)}}/>
                        </div>
                    </div>
                    <Button leftIcon={<AiFillSave/>} type='submit'>Save</Button>
                </form>
            </div>
        </div>
    );
}
 
export default AddProject;