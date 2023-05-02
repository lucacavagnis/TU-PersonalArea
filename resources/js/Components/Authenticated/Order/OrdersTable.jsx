import React, {useState} from 'react';
import Table from "@/Components/Table/Table";
import Button from "@/Components/Buttons/Button";
import Status from "@/Components/Authenticated/Order/Status";
import {upperCase} from "lodash/string";
import {Inertia} from "@inertiajs/inertia";
import Protocol from "@/Helpers/Protocol";
import Pagination from "@/Components/Pagination";

export default function OrdersTable(props){
    let orders=props.orders.data

    return(
        <Table route={route('orders.index')}>
            <Table.Search />
            {orders && orders.length>0?
                <>
                    <Table.Inner>
                        <Table.HeaderRow>
                            <Table.Header name="ioc" sortable={true} >
                                Codice interno
                            </Table.Header>
                            <Table.Header name="status" sortable={true} >
                                Status
                            </Table.Header>
                            <Table.Header name="place.address_first_line" sortable={true} >
                                Indirizzo
                            </Table.Header>
                            <Table.Header name="date" sortable={true} >
                                Data
                            </Table.Header>
                            <Table.Header>
                            </Table.Header>
                        </Table.HeaderRow>
                        <Table.Body>
                            {orders.map((o)=>{
                                return(
                                    <Table.Row key={o.id}>
                                        <Table.Field>
                                            {o.ioc}
                                        </Table.Field>
                                        <Table.Field>
                                            {<Status status={o.status} />}
                                        </Table.Field>
                                        <Table.Field>
                                            {o.place.address_first_line} <br /> {o.place.address_second_line}
                                        </Table.Field>
                                        <Table.Field>
                                            {o.date}
                                        </Table.Field>
                                        <Table.Field>
                                            <Button href={route('orders.show',o.id)} kind="tertiary">Dettagli</Button>
                                        </Table.Field>
                                    </Table.Row>
                                )
                            })}
                        </Table.Body>
                    </Table.Inner>
                    <Table.Pagination paginated={props.orders} />
                </>:
                <p>Nessun ordine presente</p>}
        </Table>
    )
    }


