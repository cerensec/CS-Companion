import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectUser } from '../slices/userSlice';
import {BsFillArrowRightCircleFill,BsFillArrowLeftCircleFill, BsFillPersonFill} from 'react-icons/bs'
import {AiFillDashboard,AiFillIdcard,AiOutlineTeam,AiOutlineLogout, AiOutlineMenu} from 'react-icons/ai';
import {FaRegBuilding,FaHammer,FaPeopleCarry,FaBoxOpen, FaTimes} from 'react-icons/fa';
import {MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp,MdFormatListNumbered,MdAddCircleOutline,MdContacts,MdPayments} from 'react-icons/md';
import {BiPurchaseTagAlt} from 'react-icons/bi';

const SideBarMenu = (props) => {
    const user = useSelector(selectUser);
    const [toggle,setToggle] = useState(true);
    const [projects,setProjects] = useState(true);
    const [workers,setWorkers] = useState(true);
    const [clients,setClients] = useState(true);
    const [suppliers,setSuppliers] = useState(true);
    const [payroll,setPayroll] = useState(true);
    const [sales,setSales] = useState(true);
    const [purchase,setPurchase] = useState(true);

    useEffect(() => {
      props.onCollapse(toggle);
    
    }, [toggle])
    

    return (  
        <div className={`sideBar ${toggle ? 'inactive' : ""}`}>

            <div className='top'>
                <div className='userInfo'>
                    <div className='userLogo'>
                        {user.infos.firstName[0]}{user.infos.lastName[0]}
                    </div>
                    <div className='info'>
                        <Link className='subMenuLink' style={{color:'white',textDecoration:'underline'}} to={'/profile'}>{user.infos.firstName} {user.infos.lastName}</Link>
                        <p className='email'>{user.infos.email}</p>
                    </div>
                    {console.log(window.innerWidth)}
                    <div className='hamburguerMenu'>
                        {toggle ? <AiOutlineMenu onClick={()=>{setToggle(!toggle)}}/> : <FaTimes onClick={()=>{setToggle(!toggle)}}/> }
                    </div>
                    <div className='toggleBtn'>
                        {toggle ? <BsFillArrowRightCircleFill onClick={()=>{setToggle(!toggle)}}/> : <BsFillArrowLeftCircleFill onClick={()=>{setToggle(!toggle)}}/>}
                    </div>
                </div>
            </div>

            <hr className='solid'/>

            <div className='mainMenu'>
                <ul>
                    <li className='menuItem'>
                        <div style={{display:'flex'}}>
                            <Link className='menuLogo' to={'/dashboard'}><AiFillDashboard size={22}/></Link>
                            <Link style={{color:'white'}} className='menuLink' to={'/dashboard'}> Dashboard</Link>
                        </div>
                    </li>
                    <li className='menuItem'>
                        <div style={{display:'flex'}}>
                            <Link className='menuLogo' to={'/dashboard'}><BsFillPersonFill size={22}/></Link>
                            <Link style={{color:'white'}} className='menuLink' to={'/profile'}> Profile</Link>
                        </div>
                    </li>
                    <li className='menuItem'>
                        <div style={{display:'flex',width:'fit-content'}} onClick={()=>{setProjects(!projects)}}>
                            <span style={{color:'white'}}><FaRegBuilding size={22}/></span>
                            <span className='menuLink'>Projects</span>
                            <span>{projects ? <MdOutlineKeyboardArrowDown className='subMenuArrow' size={20}/> : <MdOutlineKeyboardArrowUp className='subMenuArrow' size={20}/>}</span>
                        </div>
                        <ul className={`subMenu ${projects ? "hide" : ""}`}>
                            <li className='subMenuItem'>
                                <Link className='menuLogo' to={'/projects'}><MdFormatListNumbered size={18}/></Link>
                                <Link className='subMenuLink' to={'/projects'}>List</Link>
                            </li>
                            <li>
                                <Link className='menuLogo' to={'/addProject'}><MdAddCircleOutline size={18}/></Link>
                                <Link className='subMenuLink' to={'/addProject'}>Add new project</Link>
                            </li>
                        </ul>
                    </li>
                    <li className='menuItem'>
                        <div style={{display:'flex',width:'fit-content'}} onClick={()=>{setWorkers(!workers)}}>
                            <span style={{color:'white'}}><FaHammer size={22}/></span>
                            <span className='menuLink'>Workers</span>
                            <span>{workers ? <MdOutlineKeyboardArrowDown className='subMenuArrow' size={20}/> : <MdOutlineKeyboardArrowUp className='subMenuArrow' size={20}/>}</span>
                        </div>
                        <ul className={`subMenu ${workers ? "hide" : ""}`}>
                            <li className='subMenuItem'>
                                <Link className='menuLogo' to={'/alias'}><AiFillIdcard size={18}/></Link>
                                <Link className='subMenuLink' to={'/alias'}>Alias</Link>
                            </li>
                            <li>
                                <Link className='menuLogo' to={'/staff'}><FaPeopleCarry size={18}/></Link>
                                <Link className='subMenuLink' to={'/staff'}>Staff</Link>
                            </li>
                            <li>
                                <Link className='menuLogo' to={'/addStaff'}><MdAddCircleOutline size={18}/></Link>
                                <Link className='subMenuLink' to={'/addStaff'}>Add new staff</Link>
                            </li>
                        </ul>
                    </li>
                    <li className='menuItem'>
                        <div style={{display:'flex',width:'fit-content'}} onClick={()=>{setPayroll(!payroll)}}>
                            <span style={{color:'white'}}><MdPayments size={22}/></span>
                            <span className='menuLink'>Payroll</span>
                            <span>{payroll ? <MdOutlineKeyboardArrowDown className='subMenuArrow' size={20}/> : <MdOutlineKeyboardArrowUp className='subMenuArrow' size={20}/>}</span>
                        </div>
                        <ul className={`subMenu ${payroll ? "hide" : ""}`}>
                            <li>
                                <Link className='menuLogo' to={'/payroll'}><MdFormatListNumbered size={18}/></Link>
                                <Link className='subMenuLink' to={'/payroll'}>List</Link>
                            </li>
                            <li>
                                <Link className='menuLogo' to={'/addPayroll'}><MdAddCircleOutline size={18}/></Link>
                                <Link className='subMenuLink' to={'/addPayroll'}>Add new payroll</Link>
                            </li>
                        </ul>
                    </li>
                    <li className='menuItem'>
                        <div style={{display:'flex',width:'fit-content'}} onClick={()=>{setClients(!clients)}}>
                            <span style={{color:'white'}}><AiOutlineTeam size={22}/></span>
                            <span className='menuLink'>Clients</span>
                            <span>{clients ? <MdOutlineKeyboardArrowDown className='subMenuArrow' size={20}/> : <MdOutlineKeyboardArrowUp className='subMenuArrow' size={20}/>}</span>
                        </div>
                        <ul className={`subMenu ${clients ? "hide" : ""}`}>
                            <li className='subMenuItem'>
                                <Link className='menuLogo' to={'/clients'}><MdFormatListNumbered size={18}/></Link>
                                <Link className='subMenuLink' to={'/clients'}>List</Link>
                            </li>
                            <li className='subMenuItem'>
                                <Link className='menuLogo' to={'/clientContacts'}><MdContacts size={18}/></Link>
                                <Link className='subMenuLink' to={'/clientContacts'}>Contacts</Link>
                            </li>
                            <li>
                                <Link className='menuLogo' to={'/addClient'}><MdAddCircleOutline size={18}/></Link>
                                <Link className='subMenuLink' to={'/addClient'}>Add new client</Link>
                            </li>
                            <li>
                                <Link className='menuLogo' to={'/addContact'}><MdAddCircleOutline size={18}/></Link>
                                <Link className='subMenuLink' to={'/addContact'}>Add new contact</Link>
                            </li>
                        </ul>
                    </li>
                    <li className='menuItem'>
                        <div style={{display:'flex',width:'fit-content'}} onClick={()=>{setSuppliers(!suppliers)}}>
                            <span style={{color:'white'}}><FaBoxOpen size={22}/></span>
                            <span className='menuLink'>Suppliers</span>
                            <span>{suppliers ? <MdOutlineKeyboardArrowDown className='subMenuArrow' size={20}/> : <MdOutlineKeyboardArrowUp className='subMenuArrow' size={20}/>}</span>
                        </div>
                        <ul className={`subMenu ${suppliers ? "hide" : ""}`}>
                            <li className='subMenuItem'>
                                <Link className='menuLogo' to={'/suppliers'}><MdFormatListNumbered size={18}/></Link>
                                <Link className='subMenuLink' to={'/suppliers'}>List</Link>
                            </li>
                            <li className='subMenuItem'>
                                <Link className='menuLogo' to={'/supplierContacts'}><MdContacts size={18}/></Link>
                                <Link className='subMenuLink' to={'/supplierContacts'}>Contacts</Link>
                            </li>
                            <li>
                                <Link className='menuLogo' to={'/addContact'}><MdAddCircleOutline size={18}/></Link>
                                <Link className='subMenuLink' to={'/addContact'}>Add new contact</Link>
                            </li>
                        </ul>
                    </li>
                    <li className='menuItem'>
                        <div style={{display:'flex',width:'fit-content'}} onClick={()=>{setSales(!sales)}}>
                            <span style={{color:'white'}}><MdPayments size={22}/></span>
                            <span className='menuLink'>Sales</span>
                            <span>{sales ? <MdOutlineKeyboardArrowDown className='subMenuArrow' size={20}/> : <MdOutlineKeyboardArrowUp className='subMenuArrow' size={20}/>}</span>
                        </div>
                        <ul className={`subMenu ${sales ? "hide" : ""}`}>
                            <li>
                                <Link className='menuLogo' to={'/sales'}><MdFormatListNumbered size={18}/></Link>
                                <Link className='subMenuLink' to={'/sales'}>Sales list</Link>
                            </li>
                            <li>
                                <Link className='menuLogo' to={'/invoice'}><MdFormatListNumbered size={18}/></Link>
                                <Link className='subMenuLink' to={'/invoice'}>Invoice list</Link>
                            </li>
                            <li>
                                <Link className='menuLogo' to={'/addInvoice'}><MdAddCircleOutline size={18}/></Link>
                                <Link className='subMenuLink' to={'/addInvoice'}>Add new invoice</Link>
                            </li>
                        </ul>
                    </li>
                    <li className='menuItem'>
                        <div style={{display:'flex',width:'fit-content'}} onClick={()=>{setPurchase(!purchase)}}>
                            <span style={{color:'white'}}><BiPurchaseTagAlt size={22}/></span>
                            <span className='menuLink'>Purchases</span>
                            <span>{purchase ? <MdOutlineKeyboardArrowDown className='subMenuArrow' size={20}/> : <MdOutlineKeyboardArrowUp className='subMenuArrow' size={20}/>}</span>
                        </div>
                        <ul className={`subMenu ${purchase ? "hide" : ""}`}>
                            <li>
                                <Link className='menuLogo' to={'/purchase'}><MdFormatListNumbered size={18}/></Link>
                                <Link className='subMenuLink' to={'/purchase'}>Purchase list</Link>
                            </li>
                            <li>
                                <Link className='menuLogo' to={'/paymentType'}><MdFormatListNumbered size={18}/></Link>
                                <Link className='subMenuLink' to={'/paymentType'}>Payment Type list</Link>
                            </li>
                            <li>
                                <Link className='menuLogo' to={'/labels'}><MdFormatListNumbered size={18}/></Link>
                                <Link className='subMenuLink' to={'/labels'}>Label list</Link>
                            </li>
                            <li>
                                <Link className='menuLogo' to={'/addPurchase'}><MdAddCircleOutline size={18}/></Link>
                                <Link className='subMenuLink' style={{fontSize:'0.8em'}} to={'/addPurchase'}>Add new purchase</Link>
                            </li>
                        </ul>
                    </li>
                    <li className='menuItem'>
                        <div style={{display:'flex'}}>
                            <Link style={{color:'white',paddingTop:'0.15rem'}} to={'/logout'}><AiOutlineLogout size={18}/></Link>
                            <Link className='menuLink' to={'/logout'}>Logout</Link>
                        </div>
                    </li>
                </ul>
            </div>
                
        </div>
    );
}
 
export default SideBarMenu;