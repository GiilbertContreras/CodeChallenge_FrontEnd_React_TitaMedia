import React from 'react';

export default function Badge({ label, onRemove }) {
    return (
        <div className="badge">
            {label}
            <button onClick={onRemove} title="Remove">×</button>
        </div>
    );
}
