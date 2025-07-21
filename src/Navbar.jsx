import React from 'react';

function Navbar() {
  return (
    <nav style={{ backgroundColor: 'green', padding: '10px' }}>
      <ul style={{ display: 'flex', listStyle: 'none', color: 'white', gap: '20px' }}>
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

export default Navbar;
