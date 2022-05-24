import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAllStaff } from '../../api/staff';
import { Card, Text, Button } from '@mantine/core';

const Staff = (props) => {

    const navigate = useNavigate();

    const [staff,setStaff] = useState(null);

    useEffect(()=>{
        getAllStaff()
        .then((res)=>{
            console.log(res);
            setStaff(res.staff);
        })
        .catch((err)=>{
            console.log(err);
        })
    },[])

    return (  
        <div className='componentContainer'>
            <h1>Staff</h1>
            {staff !== null && <div className='projectContainer'>
                {/* Iteration pour afficher les projects */}
                {staff.map((staff)=>{
                    return(
                        <Card key={staff.id} className='projectCard' shadow="xl" p="md">
                            <Card.Section>
                                <Text weight={500}>
                                    {staff.firstName} {staff.lastName}
                                </Text>
                            </Card.Section>
                            <Text size='md'>
                                Post:
                                <Text>
                                    {staff.post}
                                </Text>
                            </Text>
                            <Button className='cardButton' onClick={()=>{
                                navigate('/staffInfo/'+staff.id);
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
 
export default Staff;