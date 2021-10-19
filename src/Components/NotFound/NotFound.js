import React from 'react';
import { Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const NotFound = () => {
    return (
        //404 page
        <div>
              <div>
            <h1 style={{color:'#e5e5e5',fontSize:'150px'}}>404</h1>
            <h4 className="fw-bold">Oops! The page you requested was not found</h4>
            <p>Make sure that you have typed the correct URL</p>
            <NavLink to='/home'>
            <Button variant="outline-primary">Back to home page</Button>{' '}
            </NavLink>
        </div>
        </div>
    );
};

export default NotFound;