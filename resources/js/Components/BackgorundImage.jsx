import React from 'react';

export default function BackgroundImage({name,className,defaultClassName}){
    const imageUrl=()=>{
        return(name?'/images/'+name:'')
    }

    const classes=className+" "+(name?"":defaultClassName);

    return(
        <div className={classes} style={{backgroundImage: 'url('+imageUrl(name)+')'}}></div>
    )
}
