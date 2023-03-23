import ApplicationLogo from "@/Components/ApplicationLogo";
import {MdOutlineCreditCardOff,MdOutlineCreditCard} from "react-icons/all";

export default function Tags({product, extended=false}){
    return(
        <div className="flex mb-2 group">
            {product.protocol_product && <div className="flex  mr-2 items-center"><ApplicationLogo className="w-4"/>{extended && <span className="ml-2">In Tutto Ufficio</span>}</div>}
            {<div className="flex  mr-2 items-center">{(product.protocol_product&&product.protocol_product.protocol&&product.protocol_product.protocol.type)?<><MdOutlineCreditCard className="text-slate-700"/>{extended && <span className="ml-2">Già fatturato</span>}</>:<><MdOutlineCreditCardOff className="text-slate-700"/>{extended && <span className="ml-2">Da fatturare</span>}</>}</div>}
        </div>

    )
}
