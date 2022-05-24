import React, { useState } from 'react';
import Background from '../../assets/images/bgBlueprint.jpg';
import { At } from 'tabler-icons-react';
import { TextInput,Button } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { forgotPassword } from '../../api/user';

const Forgot = (props) => {
    // Navigation
    const navigate = useNavigate();
    // Form states
    const [email, setEmail] = useState("");

    const onSubmit = () =>{
        let data = {
            email: email
        }
        forgotPassword(data)
        .then((res)=>{
            navigate('/login');
        })
        .catch((err) => {
            console.log(err);
        });
    }

    return (  
        <div className='homeContainer'>
            <img src={Background} alt="Background" className='backgroundImage'/>
            <div className='presentationCard'>
                <h1 className='title'>Forgot your password</h1>
                <form
                    onSubmit={(e)=>{
                        e.preventDefault();
                        onSubmit();
                    }}
                >
                    <TextInput
                        label="Email:" 
                        placeholder="Your email" 
                        icon={<At size={14} />}
                        onChange={(e)=>{setEmail(e.currentTarget.value)}}
                    />
                    <div style={{display:'flex',flexDirection:'column'}}>
                        <Button style={{marginTop:'10px'}} type='submit'>Send</Button>
                    </div>
                </form>
            </div>
        </div>  
    );
}
 
export default Forgot;