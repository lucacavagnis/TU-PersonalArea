import React from 'react';
import {MdClose} from "react-icons/all";

export default function CloseButton(props){
    return(
    <div className="absolute right-4 top-4 z-50">
        <MdClose onClick={props.onClick} className="scale-150 cursor-pointer"/>
    </div>
    )
}
