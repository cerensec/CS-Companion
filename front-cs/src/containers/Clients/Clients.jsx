import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAllClients } from '../../api/client';
import { Card, Text, Button } from '@mantine/core';

const Clients = (props) => {
    // Navigate
    const navigate = useNavigate();
    // Clients state
    const [clients, setClients] = useState(null);

    useEffect(()=>{
        getAllClients()
        .then((res)=>{
            setClients(res.client)
        })
        .catch((err)=>{
            console.log(err);
        })
    },[])

    return (  
        <div className='componentContainer'>
            <h1>Clients</h1>
            {clients !== null && <div className='projectContainer'>
                {/* Loop to load the clients */}
                {clients.map((client)=>{
                    return(
                        <Card key={client.id} className='projectCard' shadow="xl" p="md">
                            <Card.Section>
                                <Text style={{fontSize:'1em'}} weight={500}>
                                    {client.name}
                                </Text>
                            </Card.Section>

                            <Text style={{fontSize:'0.5em'}}>
                                {client.address}
                            </Text>
                            <Button size='xs' className='cardButton' onClick={()=>{
                                navigate('/clientInfo/'+client.id);
                            }}>
                                More info
                            </Button>
                        </Card>
                    )
                })}
            </div>}
        </div>
    );
}
 
export default Clients;