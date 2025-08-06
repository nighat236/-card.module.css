import React from 'react';
import './CSS/style.css';
import card from './CSS/card.module.css';

function StudentCard() {
  return (
    <div>
      <div className={card.card}>
        <h1 className={card.heading}>Student Card</h1>
        <img
          className={card.img}
          src="https://images.unsplash.com/photo-1464863979621-258859e62245?q=80&w=386&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        <div>
          <h3 className={card.sname}>MARIA KHAN</h3>
          <h4>BS-CS</h4>
        </div>
      </div>
    </div>
  );
}

export default StudentCard;
