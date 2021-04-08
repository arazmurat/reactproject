import React, {useState} from "react";
import Form from './Form'

function App() {
  const [data, setdata] = useState(['',[],[],[]])

  function handleData(data) {
    const url =`https://en.wikipedia.org/w/api.php?action=opensearch&search=${data}&format=json&origin=*&limit=15`
    fetch(url)
    .then((response) => response.json())
    .then((response) => {
      console.log(response)
      setdata(response)
    })
  }
  
  return (
    <div className="container">
      <h1>Wikipedia Search with Function Component</h1>
      <Form handleData={handleData}/>
      <ul>
        {data[3].map((entry,index)=>{
          return (
            <a href={entry} target="_blank" key={index}>
              <li>
                {entry}
              </li>
            </a>
          )
        })}
      </ul>
      
    </div>
  );
}

export default App;
