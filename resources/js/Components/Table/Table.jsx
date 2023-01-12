import React from 'react';


const Table=({className="",children})=>{
    return(
            <table className={"w-full box-content "+className}>
                {children}
            </table>
    )
}

const Row=({className="",children})=>{
    return(<tr className={className}>{children}</tr>)
}

const Field=({className="",children})=>{
    return(<td className={className+" mr-1"}>{children}</td>)
}

const Header=({className="",children})=>{
    return(<th className={className+" mr-1"}>{children}</th>)
}

Table.Row=Row;
Table.Field=Field;
Table.Header=Header;
export default Table;
