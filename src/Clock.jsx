import React, { useEffect, useState } from 'react';

function Clock({ tcolor,bcolor }) { // ✅ Props destructured
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalID = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalID);
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <div
        style={{
          display: 'inline-block',
          color: tcolor, // ✅ Now works correctly
          backgroundColor: 'yellow',
          padding: '10px 20px',
          borderRadius: '8px',
          fontSize: '24px',
          fontWeight: 'bold',
        }}
      >
        {time.toLocaleTimeString()} {/* This shows time with AM/PM */}
      </div>
    </div>
  );
}

export default Clock;

