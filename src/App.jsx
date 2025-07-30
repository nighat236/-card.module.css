

// import React from 'react';
// import CurrentDate from './CurrentDate';
// import Navbar from './Navbar';
// import About from './About';
// import Portfolio from './Portfolio'; 

import React, { useState } from "react";
import LifeCycle from "./LifeCycle";

function App() {
  const [display, setDisplay] = useState(true);

  return (
    <>
      <h1 style={{ color: "chocolate" }}>Learn (with) Shahid Naeem</h1>
      
      {display ? <LifeCycle /> : null}
      
      <br />
      <button onClick={() => setDisplay(!display)}>Hide/Display</button>
    </>
  );
}

export default App;




{/* <Navbar />
       <h1 className="text-3xl font-bold text-purple-600 text-center">
  Welcome to My Portfolio
</h1>
      <CurrentDate />
      <About /> 
      <Portfolio />
    </> */}


