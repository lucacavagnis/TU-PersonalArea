import Protocol from "@/Helpers/Protocol";
import React from "react";
import Table from "@/Components/Table/Table";
import CrudActionColumn from "@/Components/Table/CrudActionColumn";
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
                        <div className="flex w-full justify-between mb-4"><Table.NewButton href={route('admin.protocols.create')} className="m-0"/><Table.Search /></div>
                        {protocols && protocols.length>0?
                            <>
                        <Table.Inner>
                        <Table.HeaderRow>
                            <Table.Header name="id" sortable={true} className="w-[60px]">
                                ID
                            </Table.Header>
                            <Table.Header name="company_id" sortable={true} className="w-[170px]">
                                Azienda
                            </Table.Header>
                            <Table.Header name="date" sortable={true} className="w-[130px]">
                                Data
                            </Table.Header>
                            <Table.Header name="type" sortable={true} className="w-[150px]">
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
                                        <CrudActionColumn read={route('admin.protocols.show',p.id)} update={route('admin.protocols.edit',p.id)} del={route('admin.protocols.destroy',p.id)}/>
                                    </Table.Row>
                                )
                            })}
                        </Table.Body>
                        </Table.Inner>
                        <div className="flex w-full justify-between items-center">
                            <Table.NewButton href={route('admin.protocols.create')} className="m-0"/>
                            <Table.Pagination paginated={props.protocols} />
                        </div>
                                </>:<>
                                <p>Nessun protocollo presente</p>
                                <Button type="link" href={route('admin.protocols.create')}>Crea nuovo</Button>
                            </>
                            }
                    </Table>
    )
}

