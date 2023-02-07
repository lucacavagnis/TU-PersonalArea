import React from 'react';
import Table from "@/Components/Table/Table";
import {BsThreeDotsVertical} from "react-icons/all";
import ActionButton from "@/Components/Admin/Company/ActionButton";
import Price from "@/Components/Price";

export default function ProductsTable({products}){
    const rowClasses="[&>*]:py-4";
    const headerClasses="text-left"

    function parseBoolean(value){
        return value?'Sì':'No'
    }

    return(
        <Table>
            <Table.Row className={"text-slate-500 pb-2 pt-2 border-b border-t border-slate-100 "+rowClasses}>
                <Table.Header className={headerClasses}>Sku</Table.Header>
                <Table.Header className={headerClasses}>Nome</Table.Header>
                <Table.Header className={headerClasses}>Prezo riservato</Table.Header>
                <Table.Header className={headerClasses}>Proprietà</Table.Header>
                <Table.Header className={headerClasses}>Fatturato</Table.Header>
                <Table.Header className={headerClasses}>Gestione magazzino</Table.Header>
                <Table.Header className={headerClasses}></Table.Header>
            </Table.Row>

            {products.map((product)=>{

                return(
                    <Table.Row key={product.id} className={"border-b border-slate-100 text-sm"+" "+rowClasses}>
                        <Table.Field>{product.sku}</Table.Field>
                        <Table.Field>{product.name}</Table.Field>
                        <Table.Field><Price value={product.reserved_price}/></Table.Field>
                        <Table.Field>{product.property?"Tutto Ufficio":"Altro"}</Table.Field>
                        <Table.Field>{product.payed?"Fatturato":"Da fatturare"}</Table.Field>
                        <Table.Field>{product.stock_managed?"Gestito":"Non gestito"}</Table.Field>
                        <Table.Field><ActionButton>
                            <ActionButton.Trigger><div><BsThreeDotsVertical></BsThreeDotsVertical></div></ActionButton.Trigger>
                            <ActionButton.Content>
                                <ActionButton.Link href={route('companies.show',product.id)} method="get">Dettagli</ActionButton.Link>
                                <ActionButton.Link href={route('companies.edit',product.id)} method="get">Modifica</ActionButton.Link>
                                <ActionButton.Link href={route('companies.destroy',product.id)} method="delete" className="bg-rose-600 hover:bg-rose-500 text-white">Elimina</ActionButton.Link>
                            </ActionButton.Content>
                        </ActionButton></Table.Field>
                    </Table.Row>
                )
            })}
        </Table>
    )
}




