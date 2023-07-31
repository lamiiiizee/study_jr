import "./App.css";
import Header from "./partials/Header";
import Footer from "./partials/Footer";
import { useState } from "react";
import Counter from "./Counter";
import Employee from "./Employee";
import Component from "./Component";


function App() {

  const [count, setCount] = useState(0)
  const [state, setStte] = useState(false)
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
    count,
    place : 'kondotty'
  }
  let employee = [{
    name : 'ribin',
    age : '18',
    place : 'kilikkall'
  },{
    name : 'vibin',
    age : '19',
    place : 'chattiparamp'
  },
  {
    name : 'lamiiz',
    age : '20',
    place : 'kondotty'
  }]
  return (
    <div>
      <Header header={header} />
      <div>
        <button onClick={addCount}><h1>Add</h1></button>
        <button onClick={minusCount}><h1>minus</h1></button>
        <Counter title='1st conter' count={object.count} ></Counter>
        <Counter {...object} ></Counter>
        <Counter title='3rd conter' count={count} ></Counter>
        {/* {
          employee.map((object,imdex)=>{
            return(
              <Employee key={imdex} name={object.name} age={object.age} place={object.place}/>
            )
          })
        } */}
        {/* same output 2 method */}
          {/* {
          employee.map((object,imdex)=>{
            return(
              <Employee key={imdex} {...object}/>
            )
          })
        } */}
        {/* same output 3 method */}

            {
          employee.map((object,imdex)=>
          
              <Employee key={imdex} {...object}/>
          
          )
        }

        <div className="component">
          {/* <h1 onClick={()=>setStte(!state)}>mount/unmount</h1>
           {state ?  <Component/> : null} */}
           {/* 2 method same uotput */}
          <h1 onClick={()=>setStte(!state)}>mount/unmount</h1>
           {state &&  <Component/>}
        </div>
      </div>
      <Footer footer={footer} />
    </div>
  );
}

export default App;
