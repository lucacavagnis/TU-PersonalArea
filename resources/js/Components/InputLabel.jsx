import React from 'react';

export default function InputLabel({ forInput, value, className, children, required=false }) {
    return (
        <label htmlFor={forInput} className={`block relative font-medium text-sm text-gray-700 w-fit ` + className}>
            {required && <span className="absolute -right-2 top-0 text-rose-500">*</span>}
            {value ? value : children}
        </label>
    );
}
