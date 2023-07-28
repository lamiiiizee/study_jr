import "./App.css";
import Header from "./partials/Header";
import Footer from "./partials/Footer";
import { useState } from "react";
import Counter from "./Counter";

function App() {

  const [count, setCount] = useState(0)
  const addCount = () => {
    setCount(count + 1)
    console.log(count);
  }
  const minusCount = () => {
    setCount(count - 1)
    console.log(count);
  }
  const header = "header";
  const footer = "footer";

  let object = {
    title : '2nd conter',
    count 
  }
  return (
    <div>
      <Header header={header} />
      <div>
        <h1 style={{ backgroundColor: "red" }}>lamiiz</h1>
        <h1 style={{ color: "red" }}>lamiiz</h1>
        <br />
        <br></br>
        <p>lamiiz</p>

        <button onClick={addCount}><h1>Add</h1></button>
        <button onClick={minusCount}><h1>minus</h1></button>
        <Counter title='1st conter' count={object.count} ></Counter>
        <Counter {...object} ></Counter>
        <Counter title='3rd conter' count={count} ></Counter>
      </div>
      <Footer footer={footer} />
    </div>
  );
}

export default App;
