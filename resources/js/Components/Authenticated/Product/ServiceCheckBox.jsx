import react from 'react';
import Checkbox from "@/Components/Checkbox";

export default function ServiceCheckBox(props){
    return(
        <div className="mr-6">
            <label className="ml-2 text-sm align-middle" htmlFor={props.name}>
            <Checkbox handleChange={(e)=>props.handleChange(e)} name={props.name} value={props.value} checked={props.checked} className="mr-2"/>
             {props.children}</label>
        </div>
    )
}
