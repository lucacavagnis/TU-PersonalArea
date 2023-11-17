import React from 'react';

export default function BackgroundImage({name,className,defaultClassName}){
    const classes=className+" "+(name?"":defaultClassName);

    return(
        <div className={classes} style={{backgroundImage: 'url('+imageUrl(name)+')'}}></div>
    )
}

export const imageUrl=(name)=>{
    return(encodeURI(name?'/storage/'+name:''))
}
