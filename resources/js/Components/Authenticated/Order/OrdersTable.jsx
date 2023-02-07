import React from 'react';
import Table from "@/Components/Table/Table";
import Button from "@/Components/Buttons/Button";
import Status from "@/Components/Authenticated/Order/Status";
import {upperCase} from "lodash/string";

export default function OrdersTable({orders}){
    const rowClasses="[&>*]:py-4";
    const headerClasses="text-left";



        return(
            <Table>
                <Table.Row className={"text-slate-500 pb-2 pt-2 border-b border-t border-slate-100 "+rowClasses}>
                    <Table.Header className={headerClasses}>Codice interno</Table.Header>
                    <Table.Header className={headerClasses}>Status</Table.Header>
                    <Table.Header className={headerClasses}>Indirizzo</Table.Header>
                    <Table.Header className={headerClasses}>Data</Table.Header>
                    <Table.Header className={headerClasses}>Q.tà</Table.Header>
                    <Table.Header className={headerClasses}></Table.Header>
                </Table.Row>

                {orders.map((order)=>{

                    let qty=0;
                    order.order_products.map((order_product)=>{
                        qty+=order_product.quantity;
                    })

                    return(
                        <Table.Row key={order.id} className={"border-b border-slate-100 text-sm"+" "+rowClasses}>
                            <Table.Field>{upperCase(order.ioc)}</Table.Field>
                            <Table.Field><Status status={order.status} /></Table.Field>
                            <Table.Field>{order.place.address_first_line} <br /> {order.place.address_second_line}</Table.Field>
                            <Table.Field>{order.date}</Table.Field>
                            <Table.Field>{qty}</Table.Field>
                            <Table.Field><Button type="link" kind="tertiary" href={route('orders.show',order.id)} className="mt-0 align-middle">Dettagli</Button></Table.Field>
                        </Table.Row>
                    )
                })}
            </Table>
        )
    }


