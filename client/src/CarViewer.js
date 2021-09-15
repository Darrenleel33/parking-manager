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

const style={
  backgroundColor:"lightBlue",
  backgroundPosition: "center",
  position:"absolute",
  height: "400px",
  width: "390px",
  top: "20px",
  fontFamily:"sinkin sans",
  fontSize: "25px"
  }


  const stick={
    position: "-webkit-sticky",
    position: "sticky"
  }
  const buttonStyle={
    
    fontFamily:"sinkin sans",
    fontWeight:'bold',
    fontSize: "16px"
  }

const bodyStyle={
  backgroundColor:"lightBlue"
}

    return (
        
        <div style={stick}>
        &nbsp;&nbsp;
        <Card bg="primary" style={style} >
        <Card.Header text="white">CURRENT CAR </Card.Header>
        <Card.Body style={bodyStyle}>
          <Card.Text>License Plate: {displayCar.licensePlate}</Card.Text>
          <Card.Text>Owner: {displayCar.Owner}</Card.Text>
          <Card.Text>Color: {displayCar.color}</Card.Text>
          <Card.Text>Vehicle Make: {displayCar.vehicleMake}</Card.Text>
          <Card.Text>Vehicle Model: {displayCar.vehicleModel}</Card.Text>
           
        <Button style={buttonStyle} variant="success" size="sm" type="submit" onClick={handleEdit}>Edit Details</Button>
        &nbsp;&nbsp;
        <Button style={buttonStyle} variant="danger" size="sm" onClick={handleDelete}>Remove Car</Button>
        &nbsp;&nbsp;
        <Button style={buttonStyle} variant="primary" size="sm">ticket Info</Button>
        </Card.Body>
      </Card>
        </div>
     
    )
}
export default CarViewer