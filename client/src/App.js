
import './App.css';
import Home from './Home';
import Tickets from './Tickets';
import React, {useState} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AddCarForm from './AddCarForm';
import Statistic from './Statistic';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function App() {
 
  
  const linkStyle = {
    margin: "1rem",
    textDecoration: "none",
    color: 'white',
    fontsize: "large"
  };

  return (
    <div>
   
 
  

    <Router>
      <div>
        <nav>
       
      <Navbar bg="primary" variant="dark">
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       <Navbar.Brand >Flatiron Parking</Navbar.Brand>
            
              <Link style={linkStyle} to="/">Home</Link>
            
              <Link style={linkStyle} to="/addCarForm">Add a New Car</Link>
          
              <Link style={linkStyle} to="/tickets">List of Tickets</Link>
           
              <Link style={linkStyle} to="/stats">Statistic</Link>
     </Navbar>
            
        
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/addCarForm">
            <AddCarForm />
          </Route>
          <Route path="/tickets">
            <Tickets/>
          </Route>
          <Route path="/stats">
            <Statistic/>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>

    </div>
   
  );
}




export default App
