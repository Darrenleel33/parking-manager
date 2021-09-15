import React, { useEffect , useState } from 'react'
import CarEditor from './CarEditor'
import CarViewer from './CarViewer'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Fade from 'react-bootstrap/Fade';

function CarCards({cars, toggleEdit, setToggleEdit, handleEdit, handleDisplay }) {
    
    const [open, setOpen] = useState(false);

    function handleDisplayClick(){
        handleDisplay(cars.id)
        console.log ("carcard", cars.id)
        
    }
    

    function handleDelete(){
        console.log("delete", cars.id)
        const id = cars.id
    
        fetch(` /cars/${id}`, {
         method: "DELETE",
        })
        window.location.reload(false);  
      
    }
    
    const headerColor={
      backgroundColor:"lightBlue",
      fontFamily:"sinkin sans",
      fontWeight:"bold",
      fontSize:"20px"
    }

   const text ={
    fontFamily:"sinkin sans",
    fontWeight:"bold",
    fontSize:"20px",
    
   }

   
   const style = {
    margin: "5px",
    float: "left",

  }
   const buttonStyle = {
    left:"250px",
    position: "absolute",
    fontFamily:"sinkin sans",
    fontWeight:"bold",
    fontSize:"10px"

  }
    return (
      <div style={style}>
  &nbsp;&nbsp;
        <Card border="dark" style={{ width: '18rem'}} onClick={handleDisplayClick}>
          <Card.Header style={headerColor}>
               <Button style={buttonStyle} variant="danger" size="sm" onClick={handleDelete}>X</Button>
               Parked Car #{cars.id}
           </Card.Header>
        <Card.Body>
            
          <Card.Title style={text}>License Plate: {cars.licensePlate}</Card.Title>
          <Card.Title style={text}>Owner: {cars.Owner}</Card.Title>
          <Card.Text>Color: {cars.color}</Card.Text>
          <Card.Text>Vehicle Make: {cars.vehicleMake}</Card.Text>
          <Card.Text>Vehicle Model: {cars.vehicleModel}</Card.Text>
           
      

        </Card.Body>
      </Card>
    
      </div>
 
    )
} 

export default CarCards