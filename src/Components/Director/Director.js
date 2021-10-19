import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Director.css'
const Director = (props) => {
    const{id,name,designation,description,img}=props.director;
    return (
        //director info
        <div>
    <Col>
      <Card className="card">
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title className="custom-color">{name}</Card.Title>
          <Card.Text>
            <span className="text-warning">{designation}</span>
          </Card.Text>
          <Card.Text>
            {description}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
        </div>
    );
};

export default Director;