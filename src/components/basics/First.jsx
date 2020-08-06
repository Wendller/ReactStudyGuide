import React from 'react';
import Logo from '../../assets/logo192.png';
// import './first.css';

export default function FirstComponent() {
  return (
    <div>
      <h1>We're here to take over!</h1>
      <img className="app-logo" src={Logo} alt="React" />
    </div>
  );
}
