import {lightColor, qtyTextColor} from "@/Helpers/Product";

export default function Quantity({total,partial,size="big"}){

    return(
        <div className="mb-4">
            {size==="small"?
                <span className={qtyTextColor(partial,total)+" font-bold text-sm uppercase"}>{partial} di {total}</span>
                :<h3 className="uppercase font-bold mb-2"><span className={lightColor(partial,total)+" h-3 w-3 inline-block rounded-full mr-2"}></span><span className="align-middle">{partial} disponibile su {total}</span></h3>}
            <div className="w-full h-2 rounded bg-slate-200 relative"><div className=" h-full absolute left-0 bg-emerald-700 rounded" style={{width: partial/total*100+"%"}}></div></div>
        </div>
    )
}
