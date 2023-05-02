import React from 'react';
import {MdClose} from "react-icons/all";

export default function CloseButton({onClick}){
    return(
    <div className="absolute right-4 top-4 z-50">
        <MdClose onClick={onClick} className="scale-150 cursor-pointer"/>
    </div>
    )
}
