import React from 'react';
import Table from "@/Components/Table/Table";
import ActionButton from "@/Components/Admin/Company/ActionButton";
import {BsThreeDotsVertical} from "react-icons/all";

const ActionColumn=({className,read,update,del})=>{
    return(
            <Table.Field><ActionButton>
                <ActionButton.Trigger><div><BsThreeDotsVertical></BsThreeDotsVertical></div></ActionButton.Trigger>
                <ActionButton.Content>
                    {read && <ActionButton.Link href={read} method="get">Dettagli</ActionButton.Link>}
                    {update && <ActionButton.Link href={update} method="get">Modifica</ActionButton.Link>}
                    {del && <ActionButton.Link href={del} method="get">Elimina</ActionButton.Link>}
                </ActionButton.Content>
            </ActionButton>
            </Table.Field>
    )
}

const Header=({className})=>{
    return(
        <Table.Field className={className}>
            Azioni
        </Table.Field>
        )
}

ActionColumn.Header=Header;

export default ActionColumn;
