import {Checkbox, FormControlLabel} from "@mui/material";
import React from "react";

const CategoriesDataManager={}
const data=(categories,product)=>{
    let data={};

    categories.forEach((c)=>{
        data[c.id]=!!(product && product.categories && product.categories.find((e)=>e.id===c.id));
    })
    return data
}

const input=(categories,data,onChange)=>{
    const parseCategories=(categories,parent,indent=0)=>{
        let input=[];

        categories.map((c)=>{
            if(c.parent_id===parent){
                const children=parseCategories(categories,c.id,indent+30);
                input.push(<FormControlLabel key={c.id} style={{"paddingLeft":indent+"px"}} value={c.id} control={<Checkbox name={c.id.toString()} checked={data[c.id]} onChange={onChange}/>} label={c.name.charAt(0).toUpperCase() + c.name.slice(1)} />)
                input.push(children)
            }
        })
        return input;
    }


    return(parseCategories(categories,null,0))
}


CategoriesDataManager.Input=input
CategoriesDataManager.Data=data

export default CategoriesDataManager
