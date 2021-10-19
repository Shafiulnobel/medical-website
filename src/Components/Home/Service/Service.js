import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Service = (props) => {
    const{id,name,description,img}=props.service;
    return (
      //service info
        <div>
    <Col>
      <Card>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            {description}
          </Card.Text>
          <Card.Text>
            <NavLink to={`/detail/${id}`}>
                <Button className="bg-info">More Info
                <i className="fas fa-arrow-right ps-3"></i>
                </Button>
            </NavLink>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
        </div>
    );
};

export default Service;