import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword,sendEmailVerification,updateProfile } from "firebase/auth";
import React, { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { NavLink } from "react-router-dom";
import useAuth from '../../../hooks/useAuth';

const Login = () => {
   
    
    const{handleEmailChange,handlePasswordChange,handleLogin,error,signInUsingGoogle}=useAuth();
    return (
      //login page
        <div>
<Container>

<Form onSubmit={handleLogin} className="text-start mx-auto">
<h2 className="text-primary">Please Login</h2>
   
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
      Don't have an account? 
      <NavLink to="/register">
          <span>create account</span>
      </NavLink>
    </Form.Text>
  </Form.Group>
  
  <Button variant="primary" type="submit">
    Login
  </Button>
</Form>

     <div className="text-start my-3">
       <h4 className="text-info">or</h4>
     <Button className="text-light fw-bold" onClick={signInUsingGoogle} variant="warning"><i className="fab fa-google text-light fs-2"></i> Google Login</Button>{' '}
     </div>
     </Container>
        </div>
    );
};

export default Login;