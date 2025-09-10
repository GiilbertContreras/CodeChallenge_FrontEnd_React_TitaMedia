// /atoms/Logo.js
import React from 'react';
import logo from '../../../assets/logo.png';
// import './Logo.css';

export default function Logo({ size = 50 }) {
  return <img className="logo" src={logo} alt="Logo" width={size} />;
}