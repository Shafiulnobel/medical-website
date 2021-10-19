import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import img_1 from '../../images/photo-1594824476967-48c8b964273f.jpg'
import img_2 from '../../images/photo-1612349317150-e413f6a5b16d.jpg'
import img_3 from '../../images/photo-1622253692010-333f2da6031d.jpg'

const Review = () => {
    return (
        <div>
            <h1 className="my-5">What People Say About Us!</h1>
            <Container className="">
           
      <Row lg={2} xs={1} md={1} className="bg-warning py-5 d-flex align-items-center my-5">
          <Col>
          <img className="img-fluid w-25" src='https://i.ibb.co/sjmTnKW/Asset-6-300x.png' alt="" />
          </Col>
          <Col>
          <p className="text-light fw-bold">"I'm quite satisfied with their service and the environment is really good! <br />
          Their behaiviour was awesome. just loved them!"
          </p>
          
          </Col>
      </Row>
      <Row lg={2} xs={1} md={1} className="bg-warning py-5 d-flex align-items-center my-5">
          <Col>
          <img className="img-fluid w-25" src='https://i.ibb.co/bK3YK6r/Asset-2-300x.png' alt="" />
          </Col>
          <Col>
          <p className="text-light fw-bold">"I'm quite satisfied with their service and the environment is really good! <br />
          Their behaiviour was awesome. just loved them!"
          </p>
          
          </Col>
      </Row>
      <Row lg={2} xs={1} md={1} className="bg-warning py-5 d-flex align-items-center my-5">
          <Col>
          <img className="img-fluid w-25" src='https://i.ibb.co/pnM9Cgv/Asset-1-300x.png' alt="" />
          </Col>
          <Col>
          <p className="text-light fw-bold">"I'm quite satisfied with their service and the environment is really good! <br />
          Their behaiviour was awesome. just loved them!"
          </p>
          
          </Col>
      </Row>
      </Container>
        </div>
    );
};

export default Review;