import React from 'react';
import logo from '../../../assets/logo.png';

export default function Logo({ size = 50, className = '' }) {
  return <img className={className} src={logo} alt="Logo" width={size} />;
}