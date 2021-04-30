import React,{useContext} from 'react'
import './App.css';
import Quote from './Quote'
import ButtonContainer from './ButtonContainer'
import {AppContext} from './Context'
function App() {
   
  const {background}= useContext(AppContext)
  
  return (
    <div style={{background}}  className="App">
      <Quote />
      <ButtonContainer/>
    </div>
  );
}

export default App;

// useReducer
// useContext
// Redux