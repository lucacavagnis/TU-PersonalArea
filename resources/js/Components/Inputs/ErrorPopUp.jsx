import {twMerge} from "tailwind-merge";

export const ErrorPopUp=(active,title,message,className)=>{
    return(
        <div className={(active&&"opacity-0")+twMerge(className,"transition-opacity p-8 rounded bg-rose-700 text-white")}>
            <h3>{title}</h3>
            <p>{message}</p>
        </div>
    )
}
