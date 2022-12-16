import React from 'react';
import {twMerge} from "tailwind-merge";

export default function Checkbox({ name, value, handleChange, className }) {
    return (
        <input
            type="checkbox"
            name={name}
            value={value}
            className={twMerge("rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50",className)}
            onChange={(e) => handleChange(e)}
        />
    );
}
