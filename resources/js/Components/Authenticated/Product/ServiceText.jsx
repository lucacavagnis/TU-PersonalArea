import react from 'react';
import Checkbox from "@/Components/Inputs/Checkbox";
import TextInput from "@/Components/Inputs/TextInput";

export default function ServiceText(props){
    return(
        <div className="mr-6">
            <label className="ml-2 text-sm align-middle flex" htmlFor={props.name}>
                {props.children}
            <TextInput handleChange={(e)=>props.handleChange(e)} name={props.name} placeholder={props.placeholder} className="mx-2 p-0 text-sm pl-2 "/>
             </label>
        </div>
    )
}
