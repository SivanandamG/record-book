import React, { useState } from "react";
import Dialogform from "./Components/Dialog";
import './App.css';
import AllotmentTable from "./Components/Allotment";

function App() {
const [data,setData] = useState([]);
let handleData = (form)=>{
  setData([...data,form]);
  console.log(data);
}
  return (
    <div className="App">
      <AllotmentTable list = {data}/>
      <Dialogform handleData={handleData} list = {data}/>
    </div>
  );
}

export default App;
