import React from "react";

export default function Price(props){
    const parsed = Number(props.value).toFixed(2).toString().replace('.',',') + " €";

    return(<span className={props.className}>{
      parsed
    }</span>)
}
