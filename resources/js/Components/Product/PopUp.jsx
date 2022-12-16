import {React} from 'react';
import CloseButton from "@/Components/Buttons/CloseButton";

const PopUp=(props)=>{

    const preventClosing = (e) => {
        e.stopPropagation();
    }


    return(

        <div>
        <div className={(props.open?"":"opacity-0 pointer-events-none ")+"transition-opacity overflow-auto  fixed top-0 left-0 z-50 w-full h-full bg-zinc-900/50 p-10"} onClick={(e)=>props.triggerClose(e)}>
            <div onClick={(e)=>preventClosing(e)} className="relative">
                <CloseButton onClick={(e)=>props.triggerClose(e)}/>
                {props.children}
            </div>
        </div>
    </div>
    );
}



export default PopUp;
