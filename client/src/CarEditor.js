import React, { useState } from 'react'

import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'


function CarEditor({cars, setCar, handleEdit, displayCar }) {
 const [id, setId]=useState(displayCar.id)
 const [Owner, setOwner]=useState(displayCar.Owner)
 const [licensePlate, setLicensePlate]=useState(displayCar.licensePlate)
 const [color, setColor]=useState(displayCar.color)
 const [vehicleMake, setVehicleMake]=useState(displayCar.vehicleMake)
 const [vehicleModel, setVehicleModel]=useState(displayCar.vehicleModel)


  function handleSubmit(e) {
    e.preventDefault()
    let info = {
       car_id:id,
       Owner:Owner,
       licensePlate:licensePlate,
       color:color,
       vehicleMake: vehicleMake,
       vehicleModel: vehicleModel
    }
    
    
    fetch(` /cars/${id}`, {
        method: 'PATCH',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(info)
    })
    .then(res => res.json())
    .then(data => {console.log(data)
    
    window.location.reload(false); 
    })
    // console.log(username)
    // console.log(password)
}
const style={
backgroundColor:"lightBlue",
backgroundPosition: "center",
position:"absolute",
height: "420px",
width: "420px",
top: "100px",
fontFamily:"sinkin sans",
fontWeight:"bold"
}

const text={
fontFamily:"sinkin sans",
fontWeight:"bold",
fontSize:"18px",
}
const text2={
fontFamily:"sinkin sans",
fontWeight:"bold",
fontSize:"25px",
}

return (
  
<div>

<Form style={style} >

<br></br>
<h3 style={text2}>Editing Mode</h3>

<Form.Group as={Row} className="mb-3" controlId="formHorizontalLicensePlate">
&nbsp;&nbsp;&nbsp;
  <Form.Label style={text} column sm={4}> License Plate </Form.Label>
  
  <Col sm={7}>
    
    <Form.Control 
       value={licensePlate}
       onChange={e => setLicensePlate(e.target.value)}
       placeholder="License Plate"
       type="text"
       name="License Plate"
       required
      />
  </Col>
</Form.Group>



<Form.Group as={Row} className="mb-3" controlId="formHorizontalOwner">
&nbsp;&nbsp;&nbsp;
  <Form.Label  style={text} column sm={4}> Owner Name </Form.Label>
  <Col sm={7}>
    <Form.Control 
       value={Owner}
       onChange={e => setOwner(e.target.value)}
       placeholder="Car Owner"
       type="text"
       name="Car Owner"
       required
      />
  </Col>
</Form.Group>

<Form.Group as={Row} className="mb-3" controlId="formHorizontalColor">
&nbsp;&nbsp;&nbsp;
  <Form.Label style={text} column sm={4}> Color </Form.Label>
  <Col sm={5}>
    <Form.Control 
       value={color}
       onChange={e => setColor(e.target.value)}
       placeholder="Color"
       type="text"
       name="color"
       required
      />
  </Col>
</Form.Group>


<Form.Group as={Row} className="mb-3" controlId="formHorizontalVehicleMake">
&nbsp;&nbsp;&nbsp;
  <Form.Label style={text} column sm={4}> Vehicle Make </Form.Label>
  <Col sm={5}>
    <Form.Control 
       value={vehicleMake}
       onChange={e => setVehicleMake(e.target.value)}
       placeholder="Vehicle Make"
       type="text"
       name="Vehicle Make"
       required
      />
  </Col>
</Form.Group>

<Form.Group as={Row} className="mb-3" controlId="formHorizontalVehicleModel">
&nbsp;&nbsp;&nbsp;
  <Form.Label style={text} column sm={4}> Vehicle Model </Form.Label>
  <Col sm={5}>
    <Form.Control 
       value={vehicleModel}
       onChange={e => setVehicleModel(e.target.value)}
       placeholder="Vehicle Model"
       type="text"
       name="Vehicle Model"
       required
      />
  </Col>
</Form.Group>

<Form.Group as={Row} className="mb-3">
    <Col sm={{ span: 10, offset: 2 }}>
      <Button style={text} type="submit" variant="warning" onClick={handleSubmit}>Edit  Car</Button>
      &nbsp;&nbsp;
      <Button style={text} type="submit" variant="secondary" onClick={handleEdit}>Cancel</Button>
    </Col>
    <Col sm={{ span: 10, offset: 2 }}>
    </Col>
    
  </Form.Group>
</Form>
    
    </div>


);
}
export default CarEditor;