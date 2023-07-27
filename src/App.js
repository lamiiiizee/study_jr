import "./App.css";
import Header from "./partials/Header";
import Footer from "./partials/Footer";
import { useState } from "react";

function App() {

  const [count,setCount] =useState(0)
  const  addCount=()=> {
    setCount(count+1)
  console.log(count);
}
  const header = "header";
  const footer = "footer";
  return (
    <div>
      <Header header={header} />
      <div>
        <h1 style={{ backgroundColor: "red" }}>lamiiz</h1>
        <h1 style={{ color: "red" }}>lamiiz</h1>
        <br />
        <br></br>
        <p>lamiiz</p>

        <button onClick={addCount}>Add</button>
        <h1>conter : {count}</h1>
      </div>
      <Footer footer={footer} />
    </div>
  );
}

export default App;
