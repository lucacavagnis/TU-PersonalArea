import {format} from "date-fns";

export const Pluralize=(singular,plural,qty)=>{
    if(qty===1)
        return singular
    else
        return plural
}

export const Format_date=(date)=>{
    return format(new Date(date),'dd/MM/yyyy');
}

export const Format_date_input=(date)=>{
    return format(new Date(date),'yyyy-MM-dd');
}

export const Placeholder=(value)=>{
    return value||value===0?value:'---'
}

export const getTypeText=(value)=>(value?"Conto aperto":"Conto depostio")
