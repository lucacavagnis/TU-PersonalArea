import {MdOutlineCreditCard, MdOutlineCreditCardOff} from "react-icons/all";

export const PayedTag=({isPayed,extended})=>{
    return(
        <>
            {<div className="flex  mr-2 items-center">{(!isPayed)?<><MdOutlineCreditCard className="text-slate-700"/>{extended && <span className="ml-2">Da fatturare</span>}</>:<><MdOutlineCreditCardOff className="text-slate-700"/>{extended && <span className="ml-2">Già fatturato</span>}</>}</div>}
        </>
    )
}
