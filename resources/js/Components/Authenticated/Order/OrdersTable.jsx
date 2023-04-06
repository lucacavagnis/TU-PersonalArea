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
    let inputs=props.inputs
    const [data,setData]=useState({
        orderBy: inputs&&inputs.orderBy?inputs.orderBy:"date",
        orderDir: inputs&&inputs.orderDir?inputs.orderDir:"desc",
        search: inputs&&inputs.search?inputs.search:'',
        page: inputs&&inputs.page?inputs.page:1,
    })

    const columnTitleOnClick=(name,dir)=>{
        setData(data=>({...data, orderDir:dir, orderBy: name}))
        Inertia.get(window.location.href,{...data, orderDir:dir, orderBy: name},{
            only: ['orders','inputs'],
        })
    }

    const searchUpdate=(e)=>{
        setData(data=>({...data, search:e.target.value}))
    }

    const searchSubmit=()=>{
        Inertia.get(window.location.href,data,{
            only: ['orders','inputs'],
        })
    }

    return(<>

            {(orders && orders.length>0 || inputs.search!=="")?
                (<>
                    <Table.Search keyword={data.search} update={searchUpdate} submit={searchSubmit}/>
                    <Table>
                        <Table.Row>
                            <Table.Header name="ioc" sortable={true} onClick={columnTitleOnClick} initial={data.orderDir} current={data.orderBy}>
                                Codice interno
                            </Table.Header>
                            <Table.Header name="status" sortable={true} onClick={columnTitleOnClick} initial={data.orderDir} current={data.orderBy}>
                                Status
                            </Table.Header>
                            <Table.Header name="place.address_first_line" sortable={true} onClick={columnTitleOnClick} initial={data.orderDir} current={data.orderBy}>
                                Indirizzo
                            </Table.Header>
                            <Table.Header name="date" sortable={true} onClick={columnTitleOnClick} initial={data.orderDir} current={data.orderBy}>
                                Data
                            </Table.Header>
                            <Table.Header>
                            </Table.Header>
                        </Table.Row>
                        {orders.map((o)=>{
                            return(
                                <Table.Row key={o.id}>
                                    <Table.Field>
                                        {o.ioc}
                                    </Table.Field>
                                    <Table.Field>
                                        {o.status}
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
                    </Table> {(props.orders && props.orders.total>10 && <Pagination links={props.orders.links} />)}</>):
                <p>Nesun protocollo presente</p>}
        </>
    )
    }


