import React from 'react';
import Table from "@/Components/Table/Table";
import Button from "@/Components/Buttons/Button";
import Status from "@/Components/Authenticated/Order/Status";
import {upperCase} from "lodash/string";

export default function OrdersTable({orders}){
    const fieldsWidth=["w-1/6","w-1/6","w-1/3","w-1/6","w-1/12","w-1/6"];
    const rowClasses="pt-4 pb-4";

    return(
        <Table>
            <Table.Row className={"text-slate-500 pb-2 pt-2 border-b border-t border-slate-100"}>
                <Table.Field className={fieldsWidth[0]}>Codice interno</Table.Field>
                <Table.Field className={fieldsWidth[1]}>Status</Table.Field>
                <Table.Field className={fieldsWidth[2]}>Indirizzo</Table.Field>
                <Table.Field className={fieldsWidth[3]}>Data</Table.Field>
                <Table.Field className={fieldsWidth[4]}>Qt.à</Table.Field>
                <Table.Field className={fieldsWidth[5]}>Azioni</Table.Field>
            </Table.Row>

            {orders.map((order)=>{
                let qty=0;
                order.order_products.map((order_product)=>{
                    qty+=order_product.quantity;
                })

                return(
                    <Table.Row key={order.id} className={"border-b border-slate-100 text-sm"+" "+rowClasses}>
                        <Table.Field className={fieldsWidth[0]}>{upperCase(order.ioc)}</Table.Field>
                        <Table.Field className={fieldsWidth[1]}><Status status={order.status} /></Table.Field>
                        <Table.Field className={fieldsWidth[2]}>{order.place.address_first_line} <br /> {order.place.address_second_line}</Table.Field>
                        <Table.Field className={fieldsWidth[3]}>{order.date}</Table.Field>
                        <Table.Field className={fieldsWidth[4]}>{qty}</Table.Field>
                        <Table.Field className={fieldsWidth[5]}><Button type="link" kind="tertiary" href={route('orders.show',order.id)} className="mt-0 align-middle">Dettagli</Button></Table.Field>
                    </Table.Row>
                )
            })}
        </Table>
    )
}


