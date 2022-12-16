import React from "react";

export default function Status({status}){

    let bg;
    let text;

    switch(status)
    {
        case "pending":
            bg="bg-amber-500";
            text="In attesa";
            break;
        default:
        case "approved":
            bg="bg-green-500";
            text="Approvato";
            break;
        case "rejected":
            bg="bg-rose-500";
            text="Rifiutato";
            break;
    }


    return(
        <div className="">
            <div className={"block w-3 h-3 mr-4 rounded-full inline-block "+bg}></div>
            {text}
        </div>
    )
}
