import Protocol from "@/Helpers/Protocol";
import Tab from "@/Components/Tab";
import React, {useState} from "react";
import Table from "@/Components/Table/Table";
import ActionColumn from "@/Components/Table/ActionColumn";
import {useForm} from "@inertiajs/inertia-react";
import {useStateWithCallbackLazy} from "use-state-with-callback";
import {Inertia} from "@inertiajs/inertia";
import Pagination from "@/Components/Pagination";
import Button from "@/Components/Buttons/Button";

export const ProtocolTable=(props)=>{
    let protocols=props.protocols.data
    let inputs=props.inputs
    const [data,setData]=useState({
        orderBy: inputs&&inputs.orderBy?inputs.orderBy:"date",
        orderDir: inputs&&inputs.orderDir?inputs.orderDir:"desc",
        search: inputs&&inputs.search?inputs.search:'',
        page: inputs&&inputs.page?inputs.page:1,
    })

    const columnTitleOnClick=(name,dir)=>{
        setData(data=>({...data, orderDir:dir, orderBy: name}))
        Inertia.get(route('protocols.index'),{...data, orderDir:dir, orderBy: name},{
            only: ['protocols','inputs'],
        })
    }

    const searchUpdate=(e)=>{
        setData(data=>({...data, search:e.target.value}))
    }

    const searchSubmit=()=>{
        Inertia.get(route('protocols.index'),data,{
            only: ['protocols','inputs'],
        })
    }

    return(<>

        {(protocols && protocols.length>0 || inputs.search!=="")?
        (<>
            <Table.Search keyword={data.search} update={searchUpdate} submit={searchSubmit}/>
            <Table>
            <Table.Row>
                <Table.Header name="type" sortable={true} onClick={columnTitleOnClick} initial={data.orderDir} current={data.orderBy}>
                    Tipo
                </Table.Header>
                <Table.Header name="date" sortable={true} onClick={columnTitleOnClick} initial={data.orderDir} current={data.orderBy}>
                    Data
                </Table.Header>
                <Table.Header name="referral" sortable={true} onClick={columnTitleOnClick} initial={data.orderDir} current={data.orderBy}>
                    Riferimento
                </Table.Header>
                <Table.Header name="expiring_date" sortable={true} onClick={columnTitleOnClick} initial={data.orderDir} current={data.orderBy}>
                    Data di scadenza
                </Table.Header>
                <Table.Header>
                </Table.Header>
            </Table.Row>
            {protocols.map((p)=>{
                return(
                    <Table.Row key={p.id}>
                        <Table.Field>
                            {Protocol.typeText(p)}
                        </Table.Field>
                        <Table.Field>
                            {Protocol.getDate(p)}
                        </Table.Field>
                        <Table.Field>
                            {p.referral}
                        </Table.Field>
                        <Table.Field>
                            {Protocol.getExpireDate(p)}
                        </Table.Field>
                        <Table.Field>
                            <Button href={route('protocols.show',p.id)} kind="tertiary">Dettagli</Button>
                        </Table.Field>
                    </Table.Row>
                )
            })}
        </Table> {(protocols && props.protocols.total>10 && <Pagination links={props.protocols.links} />)}</>):
        <p>Nesun protocollo presente</p>}
        </>
    )
}

