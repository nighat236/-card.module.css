import React, { useState } from 'react';

function InLineStyling() {
  const [grid,setGrid]=useState(true);
  const [empCard, setEmpCard] = useState({
    border: '4px solid gray',
    width: '200px',
    margin: '10px',
    borderRadius: '10px',
    boxShadow: '5px 5px 5px 0px grey',
  });
  function setTheme(bgColor, textColor, bcolor) {
    setEmpCard({
      ...empCard,
      backgroundColor: bgColor,
      color: textColor,
      borderColor: bcolor,
    });
  }

  return (
    <>
      <h1 style={{ color: 'green' }}> Employee Card</h1>
      <button onClick={() => setTheme('maroon', 'white', 'maroon')}>
        Maroon Theme
      </button>
      <button onClick={() => setTheme('White', 'black', 'gray')}> Default Theme</button>
      <button onClick={()=>setGrid(!grid)}>Grid ON/OFF</button>
     
     
      <div style={{ display: grid? 'flex':'block', flexWrap: 'wrap' }}>
        <div style={empCard}>
          <img
            style={{
              width: '200px',
              borderTopRightRadius: '5px',
              borderTopLeftRadius: '5px',
            }}
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <div>
            <div style={{ textAlign: 'center' }}>
              <h2> Sonia Hussain</h2>
              <h3>Digital Marketing</h3>
            </div>
          </div>
        </div>
         <div style={empCard}>
          <img
            style={{
              width: '200px',
              borderTopRightRadius: '5px',
              borderTopLeftRadius: '5px',
            }}
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <div>
            <div style={{ textAlign: 'center' }}>
              <h2> Sonia Hussain</h2>
              <h3>Digital Marketing</h3>
            </div>
          </div>
        </div>
         <div style={empCard}>
          <img
            style={{
              width: '200px',
              borderTopRightRadius: '5px',
              borderTopLeftRadius: '5px',
            }}
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <div>
            <div style={{ textAlign: 'center' }}>
              <h2> Sonia Hussain</h2>
              <h3>Digital Marketing</h3>
            </div>
          </div>
        </div>
         <div style={empCard}>
          <img
            style={{
              width: '200px',
              borderTopRightRadius: '5px',
              borderTopLeftRadius: '5px',
            }}
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <div>
            <div style={{ textAlign: 'center' }}>
              <h2> Sonia Hussain</h2>
              <h3>Digital Marketing</h3>
            </div>
          </div>
        </div>
         <div style={empCard}>
          <img
            style={{
              width: '200px',
              borderTopRightRadius: '5px',
              borderTopLeftRadius: '5px',
            }}
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <div>
            <div style={{ textAlign: 'center' }}>
              <h2> Sonia Hussain</h2>
              <h3>Digital Marketing</h3>
            </div>
          </div>
        </div>
         <div style={empCard}>
          <img
            style={{
              width: '200px',
              borderTopRightRadius: '5px',
              borderTopLeftRadius: '5px',
            }}
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <div>
            <div style={{ textAlign: 'center' }}>
              <h2> Sonia Hussain</h2>
              <h3>Digital Marketing</h3>
            </div>
          </div>
        </div>
         <div style={empCard}>
          <img
            style={{
              width: '200px',
              borderTopRightRadius: '5px',
              borderTopLeftRadius: '5px',
            }}
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <div>
            <div style={{ textAlign: 'center' }}>
              <h2> Sonia Hussain</h2>
              <h3>Digital Marketing</h3>
            </div>
          </div>
        </div>
         <div style={empCard}>
          <img
            style={{
              width: '200px',
              borderTopRightRadius: '5px',
              borderTopLeftRadius: '5px',
            }}
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <div>
            <div style={{ textAlign: 'center' }}>
              <h2> Sonia Hussain</h2>
              <h3>Digital Marketing</h3>
            </div>
          </div>
        </div>
         <div style={empCard}>
          <img
            style={{
              width: '200px',
              borderTopRightRadius: '5px',
              borderTopLeftRadius: '5px',
            }}
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <div>
            <div style={{ textAlign: 'center' }}>
              <h2> Sonia Hussain</h2>
              <h3>Digital Marketing</h3>
            </div>
          </div>
        </div>
         <div style={empCard}>
          <img
            style={{
              width: '200px',
              borderTopRightRadius: '5px',
              borderTopLeftRadius: '5px',
            }}
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <div>
            <div style={{ textAlign: 'center' }}>
              <h2> Sonia Hussain</h2>
              <h3>Digital Marketing</h3>
            </div>
          </div>
        </div>
         <div style={empCard}>
          <img
            style={{
              width: '200px',
              borderTopRightRadius: '5px',
              borderTopLeftRadius: '5px',
            }}
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <div>
            <div style={{ textAlign: 'center' }}>
              <h2> Sonia Hussain</h2>
              <h3>Digital Marketing</h3>
            </div>
          </div>
        </div>
         <div style={empCard}>
          <img
            style={{
              width: '200px',
              borderTopRightRadius: '5px',
              borderTopLeftRadius: '5px',
            }}
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <div>
            <div style={{ textAlign: 'center' }}>
              <h2> Sonia Hussain</h2>
              <h3>Digital Marketing</h3>
            </div>
          </div>
        </div>
         <div style={empCard}>
          <img
            style={{
              width: '200px',
              borderTopRightRadius: '5px',
              borderTopLeftRadius: '5px',
            }}
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <div>
            <div style={{ textAlign: 'center' }}>
              <h2> Sonia Hussain</h2>
              <h3>Digital Marketing</h3>
            </div>
          </div>
        </div>
         <div style={empCard}>
          <img
            style={{
              width: '200px',
              borderTopRightRadius: '5px',
              borderTopLeftRadius: '5px',
            }}
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <div>
            <div style={{ textAlign: 'center' }}>
              <h2> Sonia Hussain</h2>
              <h3>Digital Marketing</h3>
            </div>
          </div>
        </div>
         <div style={empCard}>
          <img
            style={{
              width: '200px',
              borderTopRightRadius: '5px',
              borderTopLeftRadius: '5px',
            }}
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <div>
            <div style={{ textAlign: 'center' }}>
              <h2> Sonia Hussain</h2>
              <h3>Digital Marketing</h3>
            </div>
          </div>
        </div>
         <div style={empCard}>
          <img
            style={{
              width: '200px',
              borderTopRightRadius: '5px',
              borderTopLeftRadius: '5px',
            }}
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <div>
            <div style={{ textAlign: 'center' }}>
              <h2> Sonia Hussain</h2>
              <h3>Digital Marketing</h3>
            </div>
          </div>
        </div>
         <div style={empCard}>
          <img
            style={{
              width: '200px',
              borderTopRightRadius: '5px',
              borderTopLeftRadius: '5px',
            }}
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <div>
            <div style={{ textAlign: 'center' }}>
              <h2> Sonia Hussain</h2>
              <h3>Digital Marketing</h3>
            </div>
          </div>
        </div>
         <div style={empCard}>
          <img
            style={{
              width: '200px',
              borderTopRightRadius: '5px',
              borderTopLeftRadius: '5px',
            }}
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <div>
            <div style={{ textAlign: 'center' }}>
              <h2> Sonia Hussain</h2>
              <h3>Digital Marketing</h3>
            </div>
          </div>
        </div>
         <div style={empCard}>
          <img
            style={{
              width: '200px',
              borderTopRightRadius: '5px',
              borderTopLeftRadius: '5px',
            }}
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <div>
            <div style={{ textAlign: 'center' }}>
              <h2> Sonia Hussain</h2>
              <h3>Digital Marketing</h3>
            </div>
          </div>
        </div>
         <div style={empCard}>
          <img
            style={{
              width: '200px',
              borderTopRightRadius: '5px',
              borderTopLeftRadius: '5px',
            }}
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <div>
            <div style={{ textAlign: 'center' }}>
              <h2> Sonia Hussain</h2>
              <h3>Digital Marketing</h3>
            </div>
          </div>
        </div>
         <div style={empCard}>
          <img
            style={{
              width: '200px',
              borderTopRightRadius: '5px',
              borderTopLeftRadius: '5px',
            }}
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <div>
            <div style={{ textAlign: 'center' }}>
              <h2> Sonia Hussain</h2>
              <h3>Digital Marketing</h3>
            </div>
          </div>
        </div>
         <div style={empCard}>
          <img
            style={{
              width: '200px',
              borderTopRightRadius: '5px',
              borderTopLeftRadius: '5px',
            }}
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <div>
            <div style={{ textAlign: 'center' }}>
              <h2> Sonia Hussain</h2>
              <h3>Digital Marketing</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default InLineStyling;
