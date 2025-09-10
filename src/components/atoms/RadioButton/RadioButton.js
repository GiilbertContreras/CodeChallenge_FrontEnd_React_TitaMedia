import React from 'react';

export default function RadioButton({ label, checked, onChange, name }) {
  return (
    <label className="radio-label">
      <input type="radio" name={name} checked={checked} onChange={onChange} />
      {label}
    </label>
  );
}