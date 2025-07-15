import React from 'react'

function SpreadInReact() {
    const maleStudents=['Zahid','Asad','Subhan',"Asif"];
    const feMaleStudents=['Hania','Harram','Anaya','Maryam'];
    const allStudents=[...maleStudents,...feMaleStudents];
    
  return (
    <div>
        <h3> List Of All Students</h3>
            <ul>{
                allStudents.map((students,index)=>
                    
                 <li key={index}>{students}</li>   

            )
                
                }





            </ul>
        

    </div>
  )
}

export default SpreadInReact