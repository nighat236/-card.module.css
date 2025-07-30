import React, { useState } from 'react';
import Clock from './Clock';

function DropDowns() {
  const [tcolor, setColor]=useState('black') // ✅ useState sahi likha
  const[bcolor,setBcolor]=useState('yellow');

  const handleChange = (event) => {
    setColor(event.target.value); // ✅ Select box se value lo
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h1 style={{ color: 'green' }}>Digital Clock</h1>

      <label htmlFor="time"> Select Time Color: </label>
      <select
        id="time"
        onChange={(event)=>setColor(event.target.valuecd)}
        style={{ padding: '8px', margin: '10px' }}
        value={tcolor}
      >
        <option value="Red">Red</option>
        <option value="Blue">Blue</option>
        <option value="Yellow">Yellow</option>
        <option value="Orange">Orange</option>
        <option value="Pink">Pink</option>
        <option value="Purple">Purple</option> {/* ✅ Corrected */}
        <option value="Brown">Brown</option>
        <option value="Green">Green</option>
      </select>

      {/* 👇 Pass selected color as prop to Clock */}
      <Clock tcolor={tcolor}bcolor={bcolor}/>
    </div>
  );
}

export default DropDowns;
