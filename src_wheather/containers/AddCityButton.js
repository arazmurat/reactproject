import React,{useState,useContext} from "react";
import WeatherContext from '../context/WeatherContext'

const AddCityButton = () => {

  const context = React.useContext(WeatherContext)

  const [name, setName] = React.useState('')

  const submitCity = () => {
    context.addCity(name, Math.ceil(Math.random() * 10))
    setName('')
  }



    return (
      <div className="add-city-form">

        <input 
        value={name} 
        onChange={(e)=> setName(e.target.value)} 
        className="input" />

        <button 
        onClick={submitCity} 
        className="input" 
        >Add</button>
        
      </div>
    );
  };

  export default AddCityButton;
