import React, { useEffect, useRef } from 'react';

export default function TextInput({
    type = 'text',
    name,
    value,
    className,
    containerClassName,
    autoComplete,
    required,
    isFocused,
    handleChange,
    max,
    min,
    placeholder,
}) {
    const input = useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <div className={(containerClassName??"")+" flex flex-col items-start"}>
            <input
                type={type}
                name={name}
                value={value}
                className={
                    `border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm ` +
                    className
                }
                ref={input}
                autoComplete={autoComplete}
                required={required}
                onChange={(e) => handleChange(e)}
                max={max??''}
                min={min??''}
                placeholder={placeholder??''}
            />
        </div>
    );
}
