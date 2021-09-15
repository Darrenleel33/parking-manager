import React, {useState} from 'react'
import { useHistory } from 'react-router'
import Alert from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'

import Card from 'react-bootstrap/Card'

function AddCarForm() {
    
    const [Owner, setOwner]=useState('')
    const [color, setColor]=useState('')
    const [licensePlate, setlicensePlate]=useState('')
    const [vehicleMake, setVehicleMake]=useState('')
    const [vehicleModel, setVehicleModel]=useState('')

    const [showAddCar, setShowAddCar]=useState(null)
    const [showAddTicket, setShowAddTicket]=useState(null)

    const [date, setDate]= useState()
    const [hours, setHours]= useState()
    const [days, setDays]= useState()
    const [paid, setPaid]= useState()
    
   

    const newCarInfo = {
       Owner:Owner,
       licensePlate:licensePlate,
       color:color,
       vehicleMake: vehicleMake,
       vehicleModel: vehicleModel
    }
    
    const newTicketInfo = {
       date:date,
       hours:hours,
       days:days,
       paid: paid,
    
    }
 
    function handleCarAlert(){
      setShowAddCar(true)
    }
    function handleTicketAlert(){
      setShowAddTicket(true)
    }


     function handleSubmitCar(e) {
       e.preventDefault()
       fetch(' /cars', {
           method: 'POST',
           headers: {'Content-Type': 'application/json'},
           body: JSON.stringify(newCarInfo)
       })
       .then(res => res.json())
       .then(data => {console.log(data)})
       .then(handleCarAlert())
      
   
      }
      















      
      function handleSubmitTicket(e) {
        e.preventDefault()
        fetch(' /tickets', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newTicketInfo)
        })
        .then(res => res.json())
        .then(data => {console.log(data)})
        .then(handleTicketAlert())
       
    
       }

















      const linkStyle = {
        textAlign:"center",
        fontFamily:"sinkin sans",
        fontWeight:"bold",
        fontSize:"18px",
    };
      const header={
      
        fontFamily:"sinkin sans",
        fontWeight:"bold",
        fontSize:"34px",
      }
      
      const styleAlert={
        fontSize: "15px",
        fontFamily:"arial",
      }


      const addTicketStyle={
        left: "100px"
      }

      
      return (
        <div style={linkStyle} >
         <Form >
    <br></br>
    <br></br>
      <h3 style={header}> Add a Car to the Parking Lot </h3>
      {showAddCar? <Alert style={styleAlert} key="idx" variant="outline-success" onClick={e=>setShowAddCar(false)} >
   A NEW CAR HAS BEEN ADDED !
    </Alert>: ""}
    
    <br></br>
    <br></br>

  <Form.Group as={Row} className="mb-3" controlId="formHorizontalOwner">
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <Form.Label column sm={2}> Owner Name </Form.Label>
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
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
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
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
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
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
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
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
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


      <Button type="submit" onClick={handleSubmitCar}>Add New Car</Button>
      <br></br>
      <br></br>
      <br></br>
  
</Form>















<Card>
       <Form >

        <br></br>
        <br></br>
        <h3 style={header} >Add a New Ticket</h3>
        {showAddTicket? <Alert style={styleAlert} key="idx" variant="outline-success" onClick={e=>setShowAddTicket(false)} >
   A NEW TICKET HAS BEEN ADDED !
    </Alert>: ""}
        <br></br>
        <br></br>

        <Form.Group as={Row} className="mb-3" controlId="formHorizontalLicensePlate">
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Form.Label column sm={4}> Purchase Date  </Form.Label>
  
        <Col sm={2}>
    
     <Form.Control 
       value={date}
       onChange={e => setDate(e.target.value)}
       placeholder="Date"
       type="date"
       name="Date"
       required
      />
  </Col>
</Form.Group>




<Form.Group as={Row} className="mb-3" controlId="formHorizontalHours">
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Form.Label column sm={4}> # of HOURS Parked </Form.Label>
  
        <Col sm={2}>
    
     <Form.Control 
       value={hours}
       onChange={e => setHours(e.target.value)}
       placeholder="Hours"
       type="number"
       min="0"
       name="Hours"
       required
      />
  </Col>
</Form.Group>



<Form.Group as={Row} className="mb-3" controlId="formHorizontalDays">
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Form.Label column sm={4}> # of DAYS Parked  </Form.Label>
  
      <Col sm={2}>
    
     <Form.Control 
       value={days}
       onChange={e => setDays(e.target.value)}
       placeholder="Days"
       type="number"
       min="0"
       name="days"
       required
      />
  </Col>
</Form.Group>



  <Form.Group style={addTicketStyle} >
<Form.Label column sm={4}> Paid ?</Form.Label>
      <Form.Check
        inline
        value={true}
        label="Yes"
        name="group1"
        type="radio"
        id={`inline-radio-1`}
        />
      <Form.Check
        inline
        value={false}
        label="No"
        name="group1"
        type="radio"
        id={`inline-radio-2`}
        />
        
        </Form.Group>




<Button type="submit" onClick={handleSubmitTicket}>Add New Ticket</Button>

</Form>
</Card>

        
    </div>
     
     );
   }
export default AddCarForm