import React, { useState } from 'react';
import CsLogo from '../assets/images/logo.png';
import Background from '../assets/images/background.jpg';
import {Navigate} from 'react-router-dom';

const Home = (props) => {
    
    const [redirect, setRedirect] = useState(false);

    if(redirect){
        return <Navigate to={'/login'} />
    }
    return (
        <div className='homeContainer'>
            <img src={Background} alt="Background" className='backgroundImage'/>
            <img className='cellphoneBackground' src="https://cdn.pixabay.com/photo/2015/03/20/16/13/head-682484__340.jpg" alt="Cellphone background" />
            <div className='presentationCard'>
                <h1 className='title'>CS Companion</h1>
                <h3 className=''>Welcome !</h3>
                <p>CS Copanion is a private tool of CS Corporativo S.A de C.V</p>
                <p>Contact CS Corporativo S.A de C.V to access this tool </p>
                <p>If you have an account you can login <a onClick={()=>{
                    setRedirect(true);
                }}>here</a></p>
            </div>
            <div className='logo'>
                <img src={CsLogo} alt="CS Logo" />
            </div>
        </div>  
    );
}
 
export default Home;