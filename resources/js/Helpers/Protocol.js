import {format} from "date-fns";
import {Format_date, getTypeText} from "@/Helpers/String";

export const type=['Conto Aperto','Conto Deposito']
export const typeText=(protocol)=>{
    if(!protocol)
        return undefined;
    return type[protocol.type];
}

export const getDate=(protocol)=>{
    return format(new Date(protocol.date),'dd/MM/yyyy');
}

export const getExpireDate=(protocol)=>{
    return Format_date(protocol.expiring_date);
}

const Protocol={};

Protocol.typeText=typeText;
Protocol.getDate=getDate;
Protocol.getExpireDate=getExpireDate;
Protocol.type=type

export default Protocol;
