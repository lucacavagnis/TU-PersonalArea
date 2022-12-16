import Price from "@/Components/Price";

export default function ReservedPrice(props){
    return(
        <div><p className={props.className}><Price value={props.fullPrice} className="line-through text-slate-500"/> <Price value={props.reservedPrice} /></p></div>
    )
}
