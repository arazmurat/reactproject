import {createContext} from 'react'

const WeatherContext = createContext({
    cities: [],
    addCity: (name, temperature)=>{},
    deleteCity:(name)=>{}
})

export default WeatherContext