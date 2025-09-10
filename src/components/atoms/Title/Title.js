import React from 'react';
import './Title.module.css';

export default function Title({ level = 6, children, className }) {
  const Tag = `h${level}`;
  return <Tag className={className}>{children}</Tag>;
}