import React from 'react';

function InLineStyling() {
  const empCard = {
    border: '4px solid gray',
    width: '200px',
    margin: '10px',
    borderRadius: '10px',
    boxShadow: '5px 5px 5px 0px grey',
  };
  return (
    <>
      <h1 style={{ color: 'green' }}> Employee Card</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
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
              <h2 style={{ color: 'blue' }}> Sonia Hussain</h2>
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
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=388&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <div>
            <div style={{ textAlign: 'center' }}>
              <h2 style={{ color: 'blue' }}>Nighat Talib</h2>
              <h3>Web Developer</h3>
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
            src="https://plus.unsplash.com/premium_photo-1675626487177-c3d2f8d9ccf7?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <div>
            <div style={{ textAlign: 'center' }}>
              <h2 style={{ color: 'blue' }}>Fizza Tabish</h2>
              <h3>Web Designer</h3>
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
            src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=388&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <div>
            <div style={{ textAlign: 'center' }}>
              <h2 style={{ color: 'blue' }}>Zahida Talib</h2>
              <h3>Web Developer</h3>
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
              <h2 style={{ color: 'blue' }}> Sonia Hussain</h2>
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
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=388&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <div>
            <div style={{ textAlign: 'center' }}>
              <h2 style={{ color: 'blue' }}>Nighat Talib</h2>
              <h3>Web Developer</h3>
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
            src="https://plus.unsplash.com/premium_photo-1675626487177-c3d2f8d9ccf7?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <div>
            <div style={{ textAlign: 'center' }}>
              <h2 style={{ color: 'blue' }}>Fizza Tabish</h2>
              <h3>Web Designer</h3>
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
            src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=388&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <div>
            <div style={{ textAlign: 'center' }}>
              <h2 style={{ color: 'blue' }}>Zahida Talib</h2>
              <h3>Web Developer</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default InLineStyling;
