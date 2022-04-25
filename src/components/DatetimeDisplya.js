import React from 'react';
import { CountDownStyle } from '../styles/datetimeStyle';

const DateTimeDisplay = ({ value, type, isDanger }) => {
  return (
    <CountDownStyle className={isDanger ? 'countdown danger' : 'countdown'}>
      <p style={{fontSize:'2rem'}}>{value}</p>
      <span style={{color:'hsl(237deg 18% 59%)', width:'20vw', margin:'0%'}}>{type}</span>
    </CountDownStyle>
  );
};

export default DateTimeDisplay;