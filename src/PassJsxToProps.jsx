import React from 'react';

function PassJsxToProps({ children }) {
  return (
    <div style={{color:"green",border:"5px solid",padding:"10px",width:"600px",borderRadius:"10px"}}>
           {children}

    </div>
  )
}

export default PassJsxToProps;


