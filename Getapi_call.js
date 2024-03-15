import { useEffect, useState } from "react";
// import "./App.css";

import React from "react";

function App() {
  const [data, setdata] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3030/user").then((result) => {
      result.json().then((res) => {
        setdata(res );
      });
    });

    // axios.get("http://localhost:3000/user")
    // .then(res=>{
    //   setdata()
    // })
  }, []);
  console.warn(data);

  return (
    <div>
      <h1>api</h1>
      <table border="1">
        <tr>
          <td>ID</td>
          <td>Name</td>
          <td>Email</td>
          <td>Mobile</td>
        </tr>
      

      {
        data.map((item)=>
        <tr>
        <td>{item.userID}</td>
        <td>{item.name}</td>
        <td>{item.email}</td>
        <td>{item.mobile}</td>
      </tr>

        
        )
      }

  
      </table>
    </div>
  );
}

export default App;
