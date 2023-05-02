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

export const ProtocolsTable=(props)=>{
    let protocols=props.protocols.data
    function excerpt(str, nwords) {
        var words = str.split(' ');
        words.splice(nwords, words.length-1);
        return words.join(' ') +
            (words.length !== str.split(' ').length ? '...' : '');
    }

    return(
                    <Table route={route('admin.protocols.index')}>
                        <Table.Search />
                        {protocols && protocols.length>0?
                            <>
                        <Table.Inner>
                        <Table.HeaderRow>
                            <Table.Header name="id" sortable={true} >
                                ID
                            </Table.Header>
                            <Table.Header name="company_id" sortable={true}>
                                Azienda
                            </Table.Header>
                            <Table.Header name="date" sortable={true}>
                                Data
                            </Table.Header>
                            <Table.Header name="type" sortable={true}>
                                Tipo
                            </Table.Header>
                            <Table.Header name="referral" sortable={true}>
                                Riferimento
                            </Table.Header>
                            <Table.Header name="expiring_date" sortable={true} >
                                Data scadenza
                            </Table.Header>
                            <Table.Header>
                            </Table.Header>
                        </Table.HeaderRow>
                        <Table.Body>
                            {protocols.map((p)=>{
                                return(
                                    <Table.Row key={p.id}>
                                        <Table.Field>
                                            {p.id}
                                        </Table.Field>
                                        <Table.Field>
                                            {p.company.name}
                                        </Table.Field>
                                        <Table.Field>
                                            {Protocol.getDate(p)}
                                        </Table.Field>
                                        <Table.Field>
                                            {Protocol.typeText(p)}
                                        </Table.Field>
                                        <Table.Field>
                                            {excerpt(p.referral,5)}
                                        </Table.Field>
                                        <Table.Field>
                                            {Protocol.getExpireDate(p)}
                                        </Table.Field>
                                        <ActionColumn read={route('admin.protocols.show',p.id)} update={route('admin.protocols.edit',p.id)} del={route('admin.protocols.destroy',p.id)}/>
                                    </Table.Row>
                                )
                            })}
                        </Table.Body>
                        </Table.Inner>
                        <div className="flex w-full justify-between items-center">
                            <Button type="link" href={route('admin.protocols.create')}>Crea nuovo</Button>
                            <Table.Pagination paginated={props.protocols} />
                        </div>
                                </>:
                            <p>Nessun protocollo presente</p>}
                    </Table>
    )
}

