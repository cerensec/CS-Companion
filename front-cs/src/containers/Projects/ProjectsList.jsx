import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Text, Button } from '@mantine/core';
import { useSelector } from 'react-redux';
import { selectProjects } from '../../slices/projectSlice';
import { Divider } from 'antd';

const ProjectList = (props) => {
    const navigate = useNavigate();

    const projects = useSelector(selectProjects);

    return (  
        <div className='componentContainer'>
            <h1>Projects</h1>
            <Divider/>
            {projects !== undefined && <div className='projectContainer'>
                {/* Iteration pour afficher les projects */}
                {projects.map((project)=>{
                    return(
                        <Card key={project.id} className='projectCard' shadow="xl" p="md">
                            <Card.Section>
                                <Text weight={500}>
                                    {project.name}
                                </Text>
                            </Card.Section>
                            <Text size='sm'>
                                {project.address}
                            </Text>
                            <Text size='xs'>
                                {project.city},{project.country}
                            </Text>

                            <Button size='xs' className='cardButton' onClick={()=>{
                                navigate('/projectInfo/'+project.id);
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
 
export default ProjectList;