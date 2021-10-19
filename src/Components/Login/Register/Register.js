
import React from 'react';
import { Form,Button, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Register = () => {
    const{handleEmailChange,handlePasswordChange,handleRegistration,handleNameChange,error,signInUsingGoogle}=useAuth();
    return (
      //registration
        <div>
          <Container>
         
<Form onSubmit={handleRegistration} className="text-start mx-auto">
       <h2 className="text-primary">Please Register</h2>
{
    <Form.Group className="mb-3" controlId="formGridAddress1">
    <Form.Label>Name</Form.Label>
    <Form.Control onBlur={handleNameChange} placeholder="Enter your name" required/>
  </Form.Group>}
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control onBlur={handleEmailChange} type="email" placeholder="Enter email" required/>
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control onBlur={handlePasswordChange} type="password" placeholder="Password" required/>
    <Form.Text className="text-danger">
      {error}
    </Form.Text>
    <Form.Text>
      Already have an account? 
      <NavLink to="/login">
          <span>login</span>
      </NavLink>
    </Form.Text>
  </Form.Group>
  
  <Button variant="primary" type="submit">
    Register
  </Button>
</Form>
<div className="text-start">
<h4 className="text-info">or</h4>
<Button className="text-light fw-bold" onClick={signInUsingGoogle} variant="warning"><i className="fab fa-google text-light fs-2"></i> Register with google</Button>{' '}
</div>
</Container>
  </div>
    );
};

export default Register;