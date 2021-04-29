import React,{useContext} from "react";
import WeatherContext from '../context/WeatherContext'

const CityList = () => {

    const {cities} = React.useContext(WeatherContext)

    const {deleteCity} = React.useContext(WeatherContext);
  
  
    const handleDelete = (name) => {
      deleteCity(name);
    };

    return (
      <table className="city-list">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Delete City</th>
          </tr>
        </thead>
        <tbody>
          {cities.map((city, index)=>(
            <tr key={city.name}>
              <td>{city.name}</td>
              <td>{city.temperature}</td>
              <td><button 
              className="delete" 
              onClick={()=>handleDelete(city.name)} 
              >Delete</button></td>

            </tr>
          ))}
            
        </tbody>
      </table>
    );
  };

  export default CityList;
