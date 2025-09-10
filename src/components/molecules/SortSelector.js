import React from 'react';

export default function SortSelector({ options, selected, onSelect }) {
    return (
        <select value={selected} onChange={e => onSelect(e.target.value)} className="sortselector">
            {options.map(opt => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
        </select>
    );
}
