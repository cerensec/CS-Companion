import './App.css';
import { Routes,Route } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';
import { useSelector } from 'react-redux';
import { selectUser } from './slices/userSlice';
import { useState } from 'react';
import 'antd/dist/antd.css';
import RequireAuth from './helpers/requireAuth';
import SideBarMenu from './components/SideBarMenu';
import Dashboard from './containers/dashboard';
import Home from './containers/home';
import Login from './containers/user/login';
import Logout from './containers/user/logout';
import ProjectList from './containers/Projects/ProjectsList';
import ProjectInfo from './containers/Projects/ProjectInfo';
import AddProject from './containers/Projects/AddProject';
import EditProject from './containers/Projects/EditProject';
import Alias from './containers/Workers/Alias';
import Staff from './containers/Workers/Staff';
import StaffInfo from './containers/Workers/StaffInfo';
import AddStaff from './containers/Workers/AddStaff';
import EditStaff from './containers/Workers/EditStaff';
import Clients from './containers/Clients/Clients';
import ClientInfo from './containers/Clients/ClientInfo';
import AddClient from './containers/Clients/AddClient';
import EditClient from './containers/Clients/EditClient';
import ClientContacts from './containers/Clients/ClientContacts';
import ContactInfo from './containers/Clients/ContactInfo';
import AddContact from './containers/addContact';
import EditContact from './containers/editContact';
import Suppliers from './containers/Suppliers/supplier';
import SupplierContacts from './containers/Suppliers/SupplierContacts';
import Payroll from './containers/Payroll/Payroll';
import AddPayroll from './containers/Payroll/AddPayroll';
import EditPayroll from './containers/Payroll/EditPayroll';
import Purchase from './containers/Purchase/Purchase';
import PaymentType from './containers/Purchase/PaymentType';
import Label from './containers/Purchase/Label';
import AddPurchase from './containers/Purchase/AddPurchase';
import EditPurchase from './containers/Purchase/EditPurchase';
import Sales from './containers/Sales/Sales';
import Invoice from './containers/Sales/Invoice';
import AddInvoice from './containers/Sales/AddInvoice';
import EditInvoice from './containers/Sales/EditInvoice';
import Profile from './containers/user/profile';
import CreateAccount from './containers/user/createAccount';
import Forgot from './containers/user/forgot';
import EditProfile from './containers/user/editProfile';


function App() {
  const user = useSelector(selectUser);
  const [toggle,setToggle] = useState(true);

  return (
    <MantineProvider theme={{colors:{'blue':['#253875', '#253875', '#253875', '#253875', '#253875', '#253875', '#253875', '#253875', '#253875', '#253875']}}}>
      <div className="App">
        {user.isLogged && <SideBarMenu onCollapse={(toggle)=>{
          setToggle(toggle);
        }}/>}
        <div className={`container ${toggle ? "inactive" : ""}`}>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/logout' element={<Logout/>}/>
            <Route path='/forgot' element={<Forgot/>}/>
            <Route path='/dashboard' element={<RequireAuth child={Dashboard} auth={true}/>}/>
            <Route path='/projects' element={<RequireAuth child={ProjectList} auth={true}/>}/>
            <Route path='/addProject' element={<RequireAuth child={AddProject} auth={true}/>}/>
            <Route path='/projectInfo/:id' element={<RequireAuth child={ProjectInfo} auth={true}/>}/>
            <Route path='/editProject/:id' element={<RequireAuth child={EditProject} auth={true}/>}/>
            <Route path='/alias' element={<RequireAuth child={Alias} auth={true}/>}/>
            <Route path='/staff' element={<RequireAuth child={Staff} auth={true}/>}/>
            <Route path='/staffInfo/:id' element={<RequireAuth child={StaffInfo} auth={true}/>}/>
            <Route path='/addStaff' element={<RequireAuth child={AddStaff} auth={true}/>}/>
            <Route path='editStaff/:id' element={<RequireAuth child={EditStaff} auth={true}/>}/>
            <Route path='/clients' element={<RequireAuth child={Clients} auth={true}/>}/>
            <Route path='/clientInfo/:id' element={<RequireAuth child={ClientInfo} auth={true}/>}/>
            <Route path='/addClient' element={<RequireAuth child={AddClient} auth={true}/>}/>
            <Route path='/editClient/:id' element={<RequireAuth child={EditClient} auth={true}/>}/>
            <Route path='/clientContacts' element={<RequireAuth child={ClientContacts} auth={true}/>}/>
            <Route path='/contactInfo/:id' element={<RequireAuth child={ContactInfo} auth={true}/>}/>
            <Route path='/addContact' element={<RequireAuth child={AddContact} auth={true}/>}/>
            <Route path='/editContact/:id' element={<RequireAuth child={EditContact} auth={true}/>}/>
            <Route path='/suppliers' element={<RequireAuth child={Suppliers} auth={true}/>}/>
            <Route path='/supplierContacts' element={<RequireAuth child={SupplierContacts} auth={true}/>}/>
            <Route path='/payroll' element={<RequireAuth child={Payroll} auth={true}/>}/>
            <Route path='/addPayroll' element={<RequireAuth child={AddPayroll} auth={true}/>}/>
            <Route path='/editPayroll/:id' element={<RequireAuth child={EditPayroll} auth={true}/>}/>
            <Route path='/purchase' element={<RequireAuth child={Purchase} auth={true}/>}/>
            <Route path='/addPurchase' element={<RequireAuth child={AddPurchase} auth={true}/>}/>
            <Route path='/editPurchase/:id' element={<RequireAuth child={EditPurchase} auth={true}/>}/>
            <Route path='/paymentType' element={<RequireAuth child={PaymentType} auth={true}/>}/>
            <Route path='/labels' element={<RequireAuth child={Label} auth={true}/>}/>
            <Route path='/sales' element={<RequireAuth child={Sales} auth={true}/>}/>
            <Route path='/invoice' element={<RequireAuth child={Invoice} auth={true}/>}/>
            <Route path='/addInvoice' element={<RequireAuth child={AddInvoice} auth={true}/>}/>
            <Route path='/editInvoice/:id' element={<RequireAuth child={EditInvoice} auth={true}/>}/>
            <Route path='/profile' element={<RequireAuth child={Profile} auth={true}/>}/>
            <Route path='/editProfile/:id' element={<RequireAuth child={EditProfile} auth={true}/>}/>
            <Route path='/createAccount' element={<RequireAuth child={CreateAccount} auth={true}/>}/>
          </Routes>
        </div>
      </div>
    </MantineProvider>
  );
}

export default App;
