import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import img from '../../images/doc_2.png'
const Choose = () => {
    return (
        <div>
            <h1>Why Choose us?</h1>
            <Container>
            
            <Row className="py-5 bg-dark text-light d-flex align-items-center" lg={2} md={1} xs={1}>
            <Col>

            <h4>Over 20 years of experience.</h4>
            <p className="text-primary">We've served our patients over 20 years successfully</p>
            <h4>We have experienced Doctor's.</h4>
            <p className="text-primary">we have qualitiful doctors as well as nurse who give services honestly</p>
            <h4>We are improving everyday.</h4>
            <p className="text-primary">We try our best to improve our services. You also can give your valuable feedback</p>
            </Col>
            <Col>
            <img className="img-fluid" src={img} alt="" />
            </Col>
            </Row>
            </Container>
        </div>
    );
};

export default Choose;