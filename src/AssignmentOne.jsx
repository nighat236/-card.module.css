import { useState } from "react";

function AssignmentOne(){
    const [num,setNum]=useState(1);
    return(
        <>
        <h1>Hit Counter</h1>
        <h1>Counter:{num}</h1>
        <button onClick={()=>setNum(num+1)} >Plus Me</button>
        <button onClick={()=>setNum(num-1)} >Minus</button>
         <button onClick={() => setNum(0)}>Reset</button>

       
        </>
    )
}
export default AssignmentOne;
