import React from 'react'

function SpreadOprerator() {
  // const fruits=['apple','orange','banna','Lichi'];
  // const morefruits=[...fruits,'mango','peach'];
  // console.log(morefruits)
  const student={
    name:"Fiza",
    age: '10'
  }
  const newStudent={...student,class: '5th'};

  console.log(newStudent);
  return (
    <div>
      <h1>Spread Oprerator</h1>
      
    </div>
  )
}

export default SpreadOprerator;