import React, {useState, useEffect} from 'react'
import TicketCards from './TicketCards'
import TicketEditor from './TicketEditor'
import Alert from 'react-bootstrap/button'


function Tickets() {

    const [tickets, setTickets] = useState([])
    const [ticketNumber, setTicketNumber]=useState("")
    const [showAlert, setShowAlert]=useState(false)
 


    useEffect((e) => {
        fetch(' /tickets')    
        .then(resp => resp.json())
        .then(data => {
            setTickets(data)
        })
      }, [])







      const ticketArray = tickets.map((tickets) => {
        return  <TicketCards 
        key={tickets.id}
        tickets={tickets}
        {...tickets}
        ticketNumber={ticketNumber}
        setTicketNumber={setTicketNumber}
        showAlert={showAlert}
        setShowAlert={setShowAlert}
   
    />
      })

  
      const linkStyle = {
        textAlign: "center",
        backgroundImage: `url(${process.env.PUBLIC_URL + "/brickwallbg.png"})`,
        minWidth: "100%",
        minHeight: "100%",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        fontFamily:"sinkin sans",
        fontWeight:"bold",
        fontSize:"15px",
    };

    const head={
        fontFamily:"sinkin sans",
        fontWeight:"bold",
        fontSize:"45px",
        color:"darkOrange",
        webkitTextStrokeWidth: "0.5px",
        webkitTextStrokeColor: "white"
    }

  

  return (
    <div style={linkStyle}>
           
    <br></br>
    <br></br>
    <br></br>
    <br></br>
            <h3 style={head} >Parking Receipt Log</h3>         
        {showAlert? <Alert  key="idx" variant="danger" onClick={e=>setShowAlert(false)} >
       TICKET# {ticketNumber}  HAS BEEN DELETED !
        </Alert>: ""}
    <br></br>
    <br></br>
    
         {ticketArray}
    
            
            
        </div>
    )
}

export default Tickets