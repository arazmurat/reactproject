import React, { useState } from "react";
import { MyContext } from "../context/MyContext";
import Family from "./Family";
import "./App.css";

const initialState = {
  name: "Bootcamp",
  age: 100,
  cool: true,
};

function App() {
  const [state, setstate] = useState(initialState);

  const growAYearOlder = () => {
    console.log("hmm");
    setstate({ ...state, age: state.age + 1 });
  };

  return (
    <MyContext.Provider value={{ state, growAYearOlder }}>
      <div className="App">
        <p>I am the app</p>
        <Family />
      </div>
    </MyContext.Provider>
  );
}

export default App;





//import React, { Component } from 'react';



//import MyProvider from "../context/MyContext"
//import Family from "./Family";
//import "./App.css"

//class App extends Component {
//  render() {
//    return (
//      <MyProvider>
//        <div className="App">
//          <p>I am the app</p>
//          <Family />
//        </div>
//      </MyProvider>
//    );
//  }
//}


//export default App;