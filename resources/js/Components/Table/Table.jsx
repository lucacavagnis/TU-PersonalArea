import React from 'react';


const Table=({className,children})=>{
    return(
            <div className={className}>
                {children}
            </div>
    )
}

const Row=({className,children})=>{
    return(<div className={"flex items-center "+className}>{children}</div>)
}

const Field=({className,children})=>{
    return(<div className={className+" mr-1"}>{children}</div>)
}

Table.Row=Row;
Table.Field=Field;
export default Table;
