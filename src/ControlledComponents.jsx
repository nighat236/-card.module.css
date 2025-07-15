import React, { useState } from 'react'

function ControlledComponents() {
    const [name,setName]=useState('');
    const [password,setPassword]=useState('');
    const [phone,setPhone]=useState('');

    // function clearData(){
    //     setName('');
    //     setPassword('');
    //     setPhone();


    // }
  return (
    <div>
        <h1> Controlled Components</h1>
        {/* <form action=""> */}
            <input type="text" value={name} onChange={(event)=> setName(event.target.value)} placeholder='Enter Your Name'/>
            <br /><br />
            <input type="password"value={password} onChange={(event)=> setPassword(event.target.value)}placeholder='Enter Your Password'/>
            <br /><br />
            <input type="tel"value={phone} onChange={(event)=> setPhone(event.target.value)}placeholder='Enter Your Phone No.'/>
             <br /><br />
             {/* <button>Submit</button> */}
             <button>Submit</button>
             <button onClick={() =>{setName ('');setPassword('');setPhone ('')}}>Clear Data</button>
             <h2>{name}</h2>
             <h2>{password}</h2>
             <h2>{phone}</h2>

            

           
           


        {/* </form> */}
    </div>
  )
}

export default ControlledComponents