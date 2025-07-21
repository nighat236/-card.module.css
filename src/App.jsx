

import React from 'react';
import CurrentDate from './CurrentDate';
import Navbar from './Navbar';
import About from './About';
import Portfolio from './Portfolio'; 

function App() {
  return (
    <>
      <Navbar />
       <h1 className="text-3xl font-bold text-purple-600 text-center">
  Welcome to My Portfolio
</h1>
      <CurrentDate />
      <About /> 
      <Portfolio />
    </>
  );
}

export default App;





