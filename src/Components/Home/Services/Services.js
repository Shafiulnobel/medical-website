import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {
    //data load
    const[services,setServices]=useState([]);
    useEffect(()=>{
       fetch('./service.json')
       .then(res=>res.json())
       .then(data=>setServices(data));
    },[])
    return (
        <div>
            <Container className="my-5">
            <h3>OUR SERVICES</h3>
            <Row xs={1} md={2} lg={3} className="g-4">
            {
                services.map(service=><Service
                service={service}
                key={service.id}
                >
                    
                </Service>)
            }
            </Row>
            </Container>
        </div>
    );
};

export default Services;