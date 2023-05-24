import ApplicationLogo from "@/Components/ApplicationLogo";

export const InTuttoUfficioTag=({isInWarehouse,extended})=>{
    return(
        <>
            {isInWarehouse && <div className="flex  mr-2 items-center"><ApplicationLogo className="w-4"/>{extended && <span className="ml-2">Pronta consegna</span>}</div>}
        </>
    )
}
