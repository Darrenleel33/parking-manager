import React, {useState} from 'react'
import { useHistory } from 'react-router'
import Alert from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'


function AddCarForm() {
    
    const [Owner, setOwner]=useState('')
    const [color, setColor]=useState('')
    const [licensePlate, setlicensePlate]=useState('')
    const [vehicleMake, setVehicleMake]=useState('')
    const [vehicleModel, setVehicleModel]=useState('')
    const [showAdd, setShowAdd]=useState(null)
    
   

    const newCarInfo = {
       Owner:Owner,
       licensePlate:licensePlate,
       color:color,
       vehicleMake: vehicleMake,
       vehicleModel: vehicleModel
    }
   
 

    function handleAlert(){
      setShowAdd(true)
    }

     function handleSubmit(e) {
       e.preventDefault()
       fetch(' /cars', {
           method: 'POST',
           headers: {'Content-Type': 'application/json'},
           body: JSON.stringify(newCarInfo)
       })
       .then(res => res.json())
       .then(data => {console.log(data)})
       .then(handleAlert())
      
   
      }
   


      
      
      return (
        <div>

<h3> Add a Car to the Parking Lot </h3>
     

     <Form>

  <Form.Group as={Row} className="mb-3" controlId="formHorizontalOwner">
    <Form.Label  column sm={2}> Owner Name </Form.Label>
    <Col sm={3}>
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

  <Form.Group as={Row} className="mb-3" controlId="formHorizontalLicensePlate">
    <Form.Label column sm={2} >License Plate</Form.Label>
    <Col sm={3}>
      <Form.Control 
       value={licensePlate}
       onChange={e => setlicensePlate(e.target.value)}
       placeholder="License Plate"
       type="text"
       name="License Plate"
       required
       />
    </Col>
  </Form.Group>

  <Form.Group as={Row} className="mb-3" controlId="formHorizontalColor">
    <Form.Label column sm={2} > Car Color </Form.Label>
    <Col sm={3}>
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
    <Form.Label column sm={2}> Brand of the Car </Form.Label>
    <Col sm={3}>
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


  <Form.Group as={Row} className="mb-3" controlId="formHorizontalVehicleMake">
    <Form.Label 
      column sm={2}
      >
      Model of the Car
    </Form.Label>
    <Col sm={3}>
      <Form.Control     
        value={vehicleModel}
        onChange={e => setVehicleModel(e.target.value)}
        placeholder="Vehicle Model"
        type="text"
        name="Vehicle Model"
        required/>
    </Col>
  </Form.Group>


  <Form.Group as={Row} className="mb-3">
    <Col sm={{ span: 10, offset: 2 }}>
      <Button type="submit" onClick={handleSubmit}>Add New Car</Button>
    </Col>
  </Form.Group>
</Form>

{showAdd? <Alert key="idx" variant="outline-success" onClick={e=>setShowAdd(false)} >
    Added a New Car to the Parking Lot
    </Alert>: ""}

    </div>
     
     );
   }
export default AddCarForm