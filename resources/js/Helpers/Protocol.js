import {format} from "date-fns";
export const typeText=(protocol)=>{
    return protocol.type?"Conto aperto":"Conto chiuso";
}

export const getDate=(protocol)=>{
    return format(new Date(protocol.date),'dd/MM/yyyy');
}

export const getExpireDate=(protocol)=>{
    return format(new Date(protocol.expiring_date),'dd/MM/yyyy');
}

const Protocol={};

Protocol.typeText=typeText;
Protocol.getDate=getDate;
Protocol.getExpireDate=getExpireDate;

export default Protocol;
