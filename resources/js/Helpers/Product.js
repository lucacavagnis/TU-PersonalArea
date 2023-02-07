export const lightColor=(product)=>{
    const qtyRemaining=product.qty_available-product.qty_requested;
    let qtyLightCLass;
    if(qtyRemaining===0)
        qtyLightCLass="bg-rose-600";
    else if(qtyRemaining<=product.qty_total/5)
        qtyLightCLass="bg-amber-600";
    else
        qtyLightCLass="bg-emerald-600";

    return qtyLightCLass;
}

export const qtyTextColor=(product)=>{
    const qtyRemaining=product.qty_available-product.qty_requested;
    let qtyLightCLass;
    if(qtyRemaining===0)
        qtyLightCLass="text-rose-600";
    else if(qtyRemaining<=product.qty_total/5)
        qtyLightCLass="text-amber-600";
    else
        qtyLightCLass="text-emerald-600";

    return qtyLightCLass;
}

export const isExpired=(product)=>{
    return product.remaining_days===0;
}
