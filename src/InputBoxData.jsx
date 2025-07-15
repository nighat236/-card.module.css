import React, { useState } from 'react'

function  InputBoxData() {
    const[val,setval]=useState("Zahida Talib")
  return (
    <div>
        <h1>Input Box Data</h1>
       
        <input type="text"value={val}onChange={(event)=>setval(event.target.value)} placeholder='Enter Your Name'/>
        <h1>{val}</h1>
        <button onClick={()=> setval("")}> Reset Form</button>
    </div>
  )
}

export default InputBoxData;