import React, { useState } from 'react'

function CheckBox() {
  const[makeup,setMakeup]=useState([]);

  const  myMakeup=(event)=>{

    console.log(event.target.value,event.target.checked);
    if(event.target.checked){
      setMakeup([...makeup,event.target.value]);
    } else{
      setMakeup([...makeup.filter((item)=> item != event.target.value )])
    }
  }
  return (
    <div>
       <h2>Select Your Makeup</h2>
       <input type="checkbox"onChange={myMakeup} id='lipstic'value='Lipstic'/>
       <label htmlFor="lipstic">Lipstic</label>
       <br /><br />

       <input type="checkbox" onChange={myMakeup} id='maskara' value='Maskara'/>
       <label htmlFor="'maskara">'Maskara</label>
       <br /><br />
       
       <input type="checkbox"onChange={myMakeup} id='liner'value='Liner'/>
       <label htmlFor="liner">Liner</label>
       <br /><br />

       <input type="checkbox"onChange={myMakeup} id='nailpolish'value='NailPolish'/>
       <label htmlFor="nailpolish">NailPolish</label>
       <br /><br />

       <input type="checkbox"onChange={myMakeup}id='eyeshadow'value='EyeShadow'/>
       <label htmlFor="eyeshadow">EyeShadow</label>
       <br /><br />
       <h1>{makeup.toString()}</h1>

    </div>
  )
}

export default CheckBox;