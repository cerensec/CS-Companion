import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectContacts } from '../../slices/contactSlice';
import { Card, Text, Button } from '@mantine/core';
import { selectSuppliers } from '../../slices/supplierSlice';
import { Divider } from 'antd';


const SupplierContacts = (props) => {
    // Navigation
    const navigate = useNavigate();
    // Data
    const contacts = useSelector(selectContacts);
    const supplier = useSelector(selectSuppliers);

    return (  
        <div className="componentContainer">
            <h1>Supplier Contacts</h1>
            <Divider/>
            <div className='secondaryContainer'>
                {contacts !== null && <div className='projectContainer'>
                    {contacts.map((contact)=>{
                        if(contact.supplier_id !== null){
                            return(
                                <Card key={contact.id} className='projectCard' shadow="xl" p="md">
                                    <Card.Section>
                                        <Text size='xl' weight={500}>
                                            {contact.name}
                                        </Text>
                                    </Card.Section>
                                    
                                    {supplier.map((sup)=>{
                                        if(sup.id === contact.supplier_id){
                                            return (
                                                <Text key={sup.id}>
                                                    {sup.name}
                                                </Text>
                                            )
                                        }
                                    })}
                                    <Button className='cardButton' onClick={()=>{
                                        navigate('/contactInfo/'+contact.id);
                                    }}>
                                        More info
                                    </Button>
                                </Card>
                            )
                        }
                    })}
                </div>}
            </div>
        </div>
    );
}
 
export default SupplierContacts;