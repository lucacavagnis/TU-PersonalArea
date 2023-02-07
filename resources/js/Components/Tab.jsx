import React from 'react';
import {twMerge} from "tailwind-merge";

export default function Tab({className,containerClassName,children}) {
    return (
        <div className={twMerge("bg-white shadow-sm sm:rounded-lg " , containerClassName)} >
            <div className={twMerge("p-6 bg-white border-b border-gray-200  sm:rounded-lg " , className)}>{children}</div>
        </div>
    );
}
