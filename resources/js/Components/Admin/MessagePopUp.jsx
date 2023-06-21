import Tab from "@/Components/Tab";
import {twMerge} from "tailwind-merge";

export const MessagePopUp=({positive=true,children,className,active})=>{

    return(
        <Tab containerClassName={twMerge("fixed right-10 border-l-4 shadow-lg min-w-[200px] h-auto transition-all bottom-10 ",className)+" "+(!active && "opacity-0 bottom-20 pointer-events-none")+" "+(positive?"border-green-600":"border-red-600")}>
            {children}
        </Tab>
    )
}
