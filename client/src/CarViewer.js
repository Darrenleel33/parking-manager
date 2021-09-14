import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function CarViewer({cars, handleEdit, handleDelete, id, displayCar}) {
   


function handleDelete(){
    console.log("delete", cars.id)
    const id = displayCar.id

    fetch(` /cars/${id}`, {
     method: "DELETE",
    })
    window.location.reload(false);  
  
}








    return (
        
        <div>
        &nbsp;&nbsp;
        <Card bg="secondary" text="white" style={{ width: '20rem'}} >
        <Card.Header >CURRENT CAR </Card.Header>
        <Card.Body>
            
          <Card.Title>License Plate: {displayCar.licensePlate}</Card.Title>
          <Card.Title>Owner: {displayCar.Owner}</Card.Title>
          <Card.Text>Color: {displayCar.color}</Card.Text>
          <Card.Text>Vehicle Make: {displayCar.vehicleMake}</Card.Text>
          <Card.Text>Vehicle Model: {displayCar.vehicleModel}</Card.Text>
           
        <Button variant="success" size="sm" type="submit" onClick={handleEdit}>Edit Details</Button>
        &nbsp;&nbsp;
        <Button variant="danger" size="sm" onClick={handleDelete}>Remove Car</Button>
        &nbsp;&nbsp;
        <Button variant="primary" size="sm">ticket Info</Button>
        </Card.Body>
      </Card>
        </div>
     
    )
}
export default CarViewer