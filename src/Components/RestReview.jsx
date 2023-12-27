import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import ListGroup from 'react-bootstrap/ListGroup';
function RestReview({review}) {
    console.log(review);//Array
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
  return (
    <div> <p variant="primary" onClick={handleShow}>
    Reviews
  </p>

  <Offcanvas show={show} onHide={handleClose}>
    <Offcanvas.Header closeButton>
      <Offcanvas.Title>Reviews</Offcanvas.Title>
    </Offcanvas.Header>
    <Offcanvas.Body>
      <div>
        {
            review?.map(item=>(
                
    <ListGroup>
      <ListGroup.Item>Name : {item.name}</ListGroup.Item>
      <ListGroup.Item>Date : {item.date}</ListGroup.Item>
      <ListGroup.Item>Ratings : {item.rating}</ListGroup.Item>
      <ListGroup.Item>Comments : {item.comments}</ListGroup.Item>
      <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
    </ListGroup>


            ))
        }
      </div>
    </Offcanvas.Body>
  </Offcanvas></div>
  )
}

export default RestReview