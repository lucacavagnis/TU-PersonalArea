import {InTuttoUfficioTag} from "@/Components/Authenticated/Product/Tags/InTuttoUfficioTag";
import {PayedTag} from "@/Components/Authenticated/Product/Tags/PayedTag";

export default function Tags({lot, extended=false}){
    return(
        <div className="flex mb-2 group">
            <InTuttoUfficioTag isInWarehouse={lot.locations&&lot.locations.length>0} extended={extended}/>
            <PayedTag isPayed={lot.protocol_lot&&lot.protocol_lot.protocol&&lot.protocol_lot.protocol.type} extended={extended} />
        </div>

    )
}
