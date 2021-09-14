
import React, { useState } from 'react'
import TicketEditor from './TicketEditor'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function TicketCards({id, tickets, date, hours, car_id, paid, days}) {



//add a new ticket

// add car name in serializer

// do some math for price of receipts

// const chargeHourly = 10 + 3*{hours}
// const chargeDaily = 35

function handleTicketEdit(){
    
}

    return (
     <div >
     <Card border="dark" style={{ width: '18rem'}} >
        <Card.Header>Parking Receipts #{id} </Card.Header>
        <Card.Body>
            
          <Card.Title>Date: {date} </Card.Title>
          <Card.Text>Number of {hours} hours parked</Card.Text>
          <Card.Text>Number of {days} days parked</Card.Text>
          <Card.Text>Paid:{paid?"yes":"no"}</Card.Text>
           
        <Button variant="outline-success" size="sm" type="submit" onClick={handleTicketEdit}>Edit Details</Button>
        &nbsp;&nbsp;
        <Button variant="outline-danger" size="sm" >Delete (not working)</Button>
    
        </Card.Body>
      </Card>


{/* 

            <div >
                <h4>Parking Receipts # {id} </h4>
               
     
                <h5>Date: {date} </h5>
                <h5>Car ID# {car_id}</h5>
                <h5>Number of {hours} hours parked</h5>
                <h5>Number of {days} days parked</h5>
                <h5>Paid:{paid?"yes":"no"}</h5>
                <button onClick={handleTicketEdit}>Edit Ticket</button>
               
                <h5>$ {days===0 ? {chargeHourly}  : {chargeDaily} }</h5>
           
               
                <button >Edit Ticket</button>
                <button onClick={changePaid()}>{paid? "Mark as Unpaid": "Mark as Paid"}</button>
            </div> */}
    
    </div>
    )
}

export default TicketCards