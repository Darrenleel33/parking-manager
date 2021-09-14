import React from 'react'

function TicketEditor(tickets, date, hours, car_id, paid, days) {
    return (
        <div>
           
               <h5>Date: {date} </h5>
               <h5>Car ID# {car_id}</h5>
               <h5>Number of {hours} hours parked</h5>
               <h5>Number of {days} days parked</h5>
               <h5>Paid:{paid?"yes":"no"}</h5>
               <button>Save Edit</button>
               <button>Cancel Edit</button>
        </div>
    )
}
export default TicketEditor