import React, {useEffect, useState} from 'react'
import CarCards from './CarCards'
import CarEditor from './CarEditor'
import Board from './components/Board'
import Content from './Content'
import Sidebar from './Sidebar'
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';


function Home() {

    const [cars, setCars] = useState([])
    const [toggleEdit,setToggleEdit]=useState(false)
    const [displayCar,setDisplayCar]=useState({})

  


    function handleEdit(){
        setToggleEdit(toggleEdit===false);
    }


    function handleDisplay(id){
        const findCar = cars.find(cars => cars.id === id)
        setDisplayCar(findCar);
        setToggleEdit(toggleEdit===true);
        console.log("home displaycar",displayCar)
       }

   
    useEffect((e) => {
        fetch(' /cars')    
        .then(resp => resp.json())
        .then(data => setCars(data))
      }, [])


      console.log(cars)
    const contentDisplay = cars.map((cars) => {
        return   <CarCards 
        key={cars.id}
        {...cars}
        cars={cars}
        toggleEdit={toggleEdit}
        setToggleEdit={setToggleEdit}
        handleEdit={handleEdit}
        handleDisplay={handleDisplay}
     
       

        

        
    />
    
    })

    


    return (

        
        <Container fluid="md">
        
        
        
    <Row>
        
        <Col >
            <Sidebar 
                contentDisplay={contentDisplay}
                handleDisplay={handleDisplay}
             
                />
        </Col>
    
        <Col xs={8} md={8}>
            <Content 
                contentDisplay={contentDisplay} 
                cars={cars} 
                setCars={setCars} 
                handleEdit={handleEdit} 
                toggleEdit={toggleEdit} 
                setToggleEdit={setToggleEdit}
                displayCar={displayCar}
              
                
                
                />
        </Col>
    </Row>  
        
      </Container>
    )
}
export default Home;