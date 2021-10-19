import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router';

const Detail = () => {
  //sigleServiceDetail

    const{serviceId}=useParams();
    const[details,setDetails]=useState([]);
    const [singleService,setSingleService]=useState({});
    useEffect(()=>{
       fetch('/service.json')
       .then(res=>res.json())
       .then(data=>setDetails(data))
    },[])

    useEffect(()=>{
    const found=  details.find(detail=>detail.id===parseInt(serviceId))
    setSingleService(found)
    },[details])
    return (
      //signle service detail
        <div>
        <Card style={{backgroundColor:'black'}} className="m-4 p-4">
          <Row lg={2}md={1}xs={1}>
            <Col>
            <img className="img-fluid" src={singleService?.img} alt="" />
            </Col>
            <Col className="my-3">
           <div>
           <div className="d-flex justify-content-center">
            <Card.Img variant="top" style={{width:'15%' }}  src={singleService?.doctor} />
            </div>
        
        <Card.Body>
          <Card.Title className="text-white">{singleService?.specialist}</Card.Title>
          <Card.Text className="text-white">
            {singleService?.description}
          </Card.Text>
          <Card.Text className="text-white">
            Specialist: <span className="text-info fw-bold">{singleService?.name}</span>
          </Card.Text>
          <Card.Text className="text-white">
            Duty Time: <span className="text-warning fw-bold">{singleService?.time}</span>
          </Card.Text>

        </Card.Body>
           </div></Col>
          </Row>
          
      </Card>
        </div>
    );
};

export default Detail;