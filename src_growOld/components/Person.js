import React, { Component, useContext } from "react";
import { MyContext } from "../context/MyContext";

// class Person extends Component {
//   render() {
//     return (
//       <div className="person">
//         <MyContext.Consumer>
//           {(context) => (
//             <React.Fragment>
//               <p>Age: {context.state.age}</p>
//               <p>Name: {context.state.name}</p>
//               <button onClick={context.growAYearOlder}>🍰🍥🎂</button>
//             </React.Fragment>
//           )}
//         </MyContext.Consumer>
//       </div>
//     )
//   }
// }

const Person = () => {
  const context = useContext(MyContext);
  console.log(context)
  return (
    <div className="person">
      <p>Age: {context.state.age}</p>
      <p>Name: {context.state.name}</p>
      <button onClick={context.growAYearOlder}>🍰🍥🎂</button>
    </div>
  );
};

export default Person;