import {lightColor, qtyTextColor} from "@/Helpers/Product";

export default function Quantity({product,size="big"}){
    const qtyRemaining=product.qty_available-product.qty_requested;

    return(
        <div className="mb-4">
            {size==="small"?
                <span className={qtyTextColor(product)+" font-bold text-sm uppercase"}>{qtyRemaining} di {product.qty_total}</span>
                :<h3 className="uppercase font-bold mb-2"><span className={lightColor(product)+" h-3 w-3 inline-block rounded-full mr-2"}></span><span className="align-middle">{qtyRemaining} disponibile su {product.qty_total}</span></h3>}
            <div className="w-full h-2 rounded bg-slate-200 relative"><div className=" h-full absolute left-0 bg-emerald-700 rounded" style={{width: qtyRemaining/product.qty_total*100+"%"}}></div></div>
        </div>
    )
}
