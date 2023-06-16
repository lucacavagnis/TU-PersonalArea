import React from "react";

export default function Status({status}){

    let bg;
    let dotBG;
    let text;

    switch(status)
    {
        case "pending":
            bg="bg-amber-200";
            dotBG="bg-amber-500";
            text="In attesa";
            break;
        default:
        case "approved":
            bg="bg-green-200";
            dotBG="bg-green-500";
            text="Approvato";
            break;
        case "rejected":
            bg="bg-rose-200";
            dotBG="bg-rose-500";
            text="Rifiutato";
            break;
    }


    return(
        <div className={"w-fit px-2 py-1 rounded-full text-sm text-slate-900 "+bg}>
            <div className={"block w-3 h-3 mr-2 rounded-full inline-block "+dotBG}></div>
            {text}
        </div>
    )
}
