import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import img from '../../../doctor.svg'
const Banner = () => {
    //banner
    return (
        <div className="bg">
            <Container className="pt-5 text-start">
            
            <Row lg={2} xs={1}>
                <Col className="d-flex align-items-center justify-content-center">
              <div>
              <h4 className="pt-5">HELLO, WE ARE <span className="text-primary">MEDIKAL!</span></h4>
            <h1>We Care <br /> About Your <br /> Health</h1>
           <div className="py-5">
            <NavLink to="/appointment">
            <Button className="text-white" variant="info">Book Appointment</Button>{' '}
            </NavLink>
          
           <NavLink to="/about">
            <Button className="text-white" variant="primary">About us</Button>{' '}
            </NavLink>
           </div>
              </div>
                </Col>
                <Col className="d-flex align-items-center">
                <img className="img-fluid" src={img} alt="" />
                </Col>
            </Row>
           
            </Container>
        </div>
    );
};

export default Banner;