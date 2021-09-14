import React, { useState } from 'react'
import CarEditor from './CarEditor';

import CarViewer from './CarViewer';

function Content({cars, setCar,toggleEdit, setToggleEdit, handleEdit, handleDelete, displayCar}) {



    const getContent = () => {
        if (toggleEdit===true) {
          return <CarEditor 
                    key={cars.id} 
                    setCar={setCar} 
                    cars={cars} 
                    toggleEdit={toggleEdit} 
                    setToggleEdit={setToggleEdit} 
                    handleEdit={handleEdit} 
                    displayCar={displayCar}
                   
                  />;
        } else if (toggleEdit===false) { 
          return <CarViewer 
                    cars={cars} 
                    toggleEdit={toggleEdit} 
                    setToggleEdit={setToggleEdit} 
                    handleEdit={handleEdit} 
                    displayCar={displayCar}
                   

                    />;
        } else if (toggleEdit===null){ 
          return "nothing"
        }  
      };
    
      return <div className="master-detail-element detail">{getContent()}</div>;
    }



export default Content;