import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import './Doctor.css'
const Doctor = (props) => {
    const{id,specialist,doctor,time,name}=props.doctor;
    return (
        //doctor's info
        <div>
            <Col>
      <Card style={{border:'2px solid #5bc0de',}} className="card py-3 card">
        <div className="d-flex justify-content-center">
        <Card.Img style={{width:'25%' }} variant="top" src={doctor} />
        </div>
        <Card.Body>
          <Card.Title className="custom-color">{specialist}</Card.Title>
          <Card.Text>
            <span className="text-warning">{name}</span>
          </Card.Text>
          <Card.Text className="text-primary">
          <i className="far fa-clock px-2"></i>{time}
          </Card.Text>
          <Button variant="outline-info">Appoint</Button>{' '}
        </Card.Body>
      </Card>
    </Col>
        </div>
    );
};

export default Doctor;