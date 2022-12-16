import React from 'react';
import Button from "@/Components/Buttons/Button";

export default function PrimaryButton(props){
    const classes=(props.disabled?"bg-blue-400 cursor-default":"bg-blue-700 cursor-pointer hover:bg-blue-600") + " block w-fit rounded-md font-medium text-sm text-slate-50 py-2 px-4 mt-4 transition-colors  " + props.className ;
    const {className,...others} = props;
    return(
        <Button className={classes+" "+className} {...others}>{props.children}</Button>
    )
}
