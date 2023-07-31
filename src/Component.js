import React,{useEffect, useState} from 'react'

function Component() {
    const [count,setCount] =useState(0)
    const [count2,setCount2] =useState(0)

    useEffect(()=>{
        console.log('Moounting......')
        console.log('Count1......'+count)
        console.log('Count2......'+count2)
        return()=>{
            console.log('clean up'+count);
            
    }
    },[count,count2])
  return (
    <div> 
        <button onClick={()=>setCount(count+1)}><h2>incement</h2></button>
        <h1>hello world count 2 : {count}</h1>
        <button onClick={()=>setCount2(count2+1)}><h2>incement</h2></button>
        <h1>hello world count 2 : {count2}</h1>
    </div>
  )
}

export default Component