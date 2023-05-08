export const lightColor=(partial,total)=>{
    let qtyLightCLass;
    if(partial===0)
        qtyLightCLass="bg-rose-600";
    else if(partial<=total/5)
        qtyLightCLass="bg-amber-600";
    else
        qtyLightCLass="bg-emerald-600";

    return qtyLightCLass;
}

export const qtyTextColor=(partial,total)=>{
    let qtyLightCLass;
    if(partial===0)
        qtyLightCLass="text-rose-600";
    else if(partial<=total/5)
        qtyLightCLass="text-amber-600";
    else
        qtyLightCLass="text-emerald-600";

    return qtyLightCLass;
}

export const isExpired=(protocol)=>{
    return protocol.remaining_days===0;
}

export const isTu=(el)=>{
    if(el.date)
        return !!el.protocol_lot;
    else if(el.sku && el.lots){
        el.lots.forEach((lot)=>{
            if(lot.protocol_lot)
                return true
        })
    }else
        return false

}

export const isCa=(product)=>{
    let ca=false;
    if(isTu(product) && product.protocol_lot.protocol.type===1)
        ca=true;

    return ca;
}
