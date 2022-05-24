import React, { useState } from 'react';
import CsLogo from '../../assets/images/logo.png';
import Background from '../../assets/images/bgBlueprint.jpg';
import { useDispatch } from 'react-redux';
import {Link, Navigate} from 'react-router-dom';
import { loginUser } from '../../api/user';
import { setUser } from '../../slices/userSlice';
import { TextInput,PasswordInput,Button } from '@mantine/core';
import { At, Lock,AlertCircle } from 'tabler-icons-react';
import {FiLogIn} from 'react-icons/fi';

const Login = (props) => {

    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error,setError] = useState("");
    const [redirect, setRedirect] = useState(false);

    const onSubmitLogin = () =>{
        let data = {
            email: email,
            password: password
        };
        loginUser(data)
        .then((res)=>{
            if(res.status === 200){
                let myUser = res.user;
                myUser.token = res.token;
                dispatch(setUser(myUser));
                localStorage.setItem("token", res.token);
                setRedirect(true);
            }else{
                setError(res.msg);
            }
        })
        .catch((err)=>{
            setEmail(err);
        })
    }

    if(redirect){
        return <Navigate to={'/dashboard'}/>
    }

    return (
        <div className='homeContainer'>
            <img src={Background} alt="Background" className='backgroundImage'/>
            <img className='cellphoneBackground' src="https://cdn.pixabay.com/photo/2015/03/20/16/13/head-682484__340.jpg" alt="Cellphone background" />
            <div className='presentationCard'>
                <h1 className='title'>Login</h1>
                <form
                    onSubmit={(e)=>{
                        e.preventDefault();
                        onSubmitLogin();
                    }}
                >
                    {error !== "" && <div>
                        <AlertCircle color='red' size={13}/>
                        <span style={{color:'red'}}> Error {error}</span>
                        </div>}
                    <TextInput
                        label="Email:" 
                        placeholder="Your email" 
                        icon={<At size={14} />}
                        onChange={(e)=>{setEmail(e.currentTarget.value)}}
                    />
                    <PasswordInput
                        label="Password:"
                        placeholder='Your password'
                        icon={<Lock size={14}/>}
                        onChange={(e)=>{setPassword(e.currentTarget.value)}}
                    />
                    <div style={{display:'flex',flexDirection:'column'}}>
                        {/* I was told to don't put the mailing and the password change was via mail */}
                        {/* <Link style={{color:"#253875",marginTop:'5px'}} to={'/forgot'}>Forgot your password?</Link> */}
                        <Button leftIcon={<FiLogIn/>} style={{marginTop:'10px'}} type='submit'>Sign in</Button>
                    </div>
                </form>
            </div>
            <div className='logo'>
                <img src={CsLogo} alt="CS Logo" />
            </div>
            
        </div>  
    );
}
 
export default Login;