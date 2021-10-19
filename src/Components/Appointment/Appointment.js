
import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';

const Appointment = () => {
    return (
        //appointment section
        <div>
            <Container>
   <h1>Appoint <span className="text-warning">Here!</span></h1>       
<Form className="text-start">
  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
    </Form.Group>
  </Row>

  <Form.Group className="mb-3" controlId="formGridAddress1">
    <Form.Label>Address</Form.Label>
    <Form.Control placeholder="Your address" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formGridAddress2">
    <Form.Label>Phone number</Form.Label>
    <Form.Control placeholder="Phone number" />
  </Form.Group>

  <Row className="mb-3">
   

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>Select Doctor</Form.Label>
      <Form.Select defaultValue="Choose Doctors...">
        <option>Choose Doctors...</option>
        <option>Dr. Asif Abrar</option>
        <option>Dr. Andew Gomes</option>
        <option>Dr. Jessica</option>
        <option>Dr. Bijay Marma</option>
        <option>Dr. Kashfia Jahan</option>
        <option>Dr. Abir Khan</option>
      </Form.Select>
    </Form.Group>

  </Row>


  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
</Container>
        </div>
    );
};

export default Appointment;