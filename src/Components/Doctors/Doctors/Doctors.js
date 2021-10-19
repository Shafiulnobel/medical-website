import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Doctor from '../Doctor/Doctor';

const Doctors = () => {
    //data load
    const[doctors,setDoctors]=useState([])
    useEffect(()=>{
      fetch('./service.json')
      .then(res=>res.json())
      .then(data=>setDoctors(data))
    },[])
    return (
        <div className="my-5">
            <h2 style={{color:'#3c276c'}}>OUR DOCTORS</h2>
            <Row xs={1} md={2} lg={3} className="g-4">

                {
              doctors.map(doctor=><Doctor
              doctor={doctor}
              key={doctor.id}
              ></Doctor>)
                }
            </Row>
        </div>
    );
};

export default Doctors;