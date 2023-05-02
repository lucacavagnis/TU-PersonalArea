import Price from "@/Components/Admin/Product/Price";

export default function ReservedPrice({fullPrice,reservedPrice,className}){
    return(
        <div><p className={className}><Price value={fullPrice} className="line-through text-slate-500"/> <Price value={reservedPrice} /></p></div>
    )
}
