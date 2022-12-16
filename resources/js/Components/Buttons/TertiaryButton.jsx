import React from 'react';
import Button from "@/Components/Buttons/Button";

export default function TertiaryButton(props){
    const classes=(props.disabled?"text-indigo-300":"text-indigo-700 cursor-pointer hover:text-indigo-500") + " block w-fit font-medium text-sm transition-colors  " + props.className ;
    const {className,...others} = props;
    return(
        <Button className={classes+" "+className} {...others}>{props.children}</Button>
    )
}
