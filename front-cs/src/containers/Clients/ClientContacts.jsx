import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectContacts } from '../../slices/contactSlice';
import { selectClients } from '../../slices/clientSlice';
import { Card, Text, Button } from '@mantine/core';
import { Divider } from 'antd';

const ClientContacts = (props) => {
    // Navigate
    const navigate = useNavigate();
    // Data selectors 
    const contacts = useSelector(selectContacts);
    const clients = useSelector(selectClients);

    return (  
        <div className='componentContainer'>
            <h1>Clients Contacts</h1>
            <Divider/>
            {contacts !== null && <div className='secondaryContainer'>
                {contacts.map((contact)=>{
                    if(contact.client_id !== null){
                        return(
                            <div style={{margin:'auto'}}>
                                <Card key={contact.id} className='projectCard' shadow="xl" p="md">
                                    <Card.Section>
                                        <Text weight={500}>
                                            {contact.name}
                                        </Text>
                                    </Card.Section>
                                    {clients.map((client)=>{
                                        if(client.id === contact.client_id){
                                            return (
                                                <Text key={client.id} style={{fontSize:'0.9em'}}>
                                                    {client.name}
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
                            </div>
                        )
                    }
                })}
            </div>}
        </div>
    );
}
 
export default ClientContacts;