import React from 'react';
import WeatherContext from '../context/WeatherContext'


const TemperatureAverage = () => {

  const {cities} = React.useContext(WeatherContext)

    // const cities = [{
    //   name: "london",
    //   temperature: 7
    // }]

  let totalTemp = 0

  for(const city of cities){
    totalTemp += city.temperature
  }

  const averageT = totalTemp / cities.length

  if(cities.length === 0){
    return (
      <div>
        Add some cities to view their average temperatures.
      </div>
    );
  }else{
    return (
      <div>
        The average is <b>{averageT.toFixed(2)}</b> degrees Celcius.
      </div>
    );
  }

  
    
  };

  export default TemperatureAverage;
