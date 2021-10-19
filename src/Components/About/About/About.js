import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import img from '../../../images/doctor.png'
import img_1 from '../../../leaders/5.jpeg'
import img_2 from '../../../leaders/6-1.jpeg'
import img_3 from '../../../leaders/2-1.jpeg'
import './About.css'
import Director from '../../Director/Director';
const About = () => {
    //data load
    const [directors,setDirectors]=useState([]);
    useEffect(()=>{
      fetch('./director.json')
      .then(res=>res.json())
      .then(data=>setDirectors(data))
    },[])
    return (
        //About section
        <div>
            <Container>

            <h2 className="thin custom-color fs-4">We support people to do the extraordinary everyday.</h2>
            <Row xs={1} md={2} lg={2} className="d-flex align-items-center">
            <Col>
            
            <Row >
                <Col><hr className="w-75 text-info"/></Col>
                <Col className="text-start text-info">
                    <h4><span className="text-warning">Mediakal</span> is a national provider of home care and staffing services with over 30 years of experience and dedication to enhancing quality of life for others.</h4> <br />          
                    </Col>
            </Row>
            </Col>
            <Col>
            <img className="img-fluid" src={img} alt="" />
            </Col>
            </Row>
            <h2 className="thin custom-color fs-1 mt-5">Our leadership team</h2>
            
            <Row xs={1} md={2} lg={3} className="g-4">
  {
             directors.map(director=><Director
             director={director}
             key={director.id}
             >
                 
             </Director>)
  }
</Row>
            </Container>

        </div>
    );
};

export default About;