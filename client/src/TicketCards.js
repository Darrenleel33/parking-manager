
import React, { useState } from 'react'
import TicketEditor from './TicketEditor'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Col } from 'react-bootstrap';

function TicketCards({ id, tickets, date, hours, car_id, paid, days, handleDelete, setTicketNumber, ticketNumber,setShowAlert}) {



//add a new ticket

// add car name in serializer

// do some math for price of receipts

// const chargeHourly = 10 + 3*{hours}
// const chargeDaily = 35

const style={

float:"left",
width: '16rem',
margin: "5px",
backgroundOpacity:"0.3"

}

function handleDelete(){
  console.log("delete", tickets.id)
  const id = tickets.id
  setTicketNumber(id)
  setShowAlert(true)

  fetch(` /tickets/${id}`, {
   method: "DELETE",
  })
  // window.location.reload(false);  

}



    return (
     <Col style={style} >
      
     <Card border="dark"  >
        <Card.Header>Parking Receipts #{id} </Card.Header>
        <Card.Body>
            
          <Card.Title>Date: {date} </Card.Title>
          <Card.Text>Number of {hours} hours parked</Card.Text>
          <Card.Text>Number of {days} days parked</Card.Text>
          <Card.Text>Paid:{paid?"Yes":"No"}</Card.Text>
           

        <Button variant="outline-danger" size="sm" onClick={handleDelete} >Delete</Button>
    
        </Card.Body>
      </Card>

    </Col>
    )
}

export default TicketCards