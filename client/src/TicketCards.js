
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
width: '20rem',
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
  window.location.reload(false);  

}

const styletext={
  color:"blue",
  fontSize:"20px",
}


const buttonStyle={
  left:"280px",
  position: "absolute",
  fontFamily:"sinkin sans",
  fontWeight:"bold",
  fontSize:"10px"

}


    return (
     <Col style={style} >
      
     <Card border="dark"  >
        <Card.Header>
        <Button style={buttonStyle} variant="danger" size="sm" onClick={handleDelete} >X</Button>
          Date: {date} 
          </Card.Header>
        <Card.Body>
            
          <Card.Text style={styletext}>Parked Car# {car_id} </Card.Text>
          <Card.Text>Rate per Hour (Initial Entry $10 + $3/hour) </Card.Text>
          <Card.Text>Number of {hours} hours parked </Card.Text>
          <Card.Text>Rate per Day (Initial Entry $35/hour) </Card.Text>
          <Card.Text>Number of {days} days parked</Card.Text>
          <Card.Text>Paid:{paid?"Yes":"No"}</Card.Text>
          <Card.Text>Amount Due:{(paid===true)?  <div>&nbsp;$0</div>:  <div>$ {10+(3*hours)+(35*days)}</div> }</Card.Text>
           

    
        </Card.Body>
      </Card>

    </Col>
    )
}

export default TicketCards