import React from 'react';

export default function Tab(props) {
    return (
        <div className={"bg-white overflow-hidden shadow-sm sm:rounded-lg " + props.containerClassName} >
            <div className={"p-6 bg-white border-b border-gray-200 " + props.className}>{props.children}</div>
        </div>
    );
}
