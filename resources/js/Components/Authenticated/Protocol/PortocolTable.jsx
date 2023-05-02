import Protocol from "@/Helpers/Protocol";
import React from "react";
import Table from "@/Components/Table/Table";
import Button from "@/Components/Buttons/Button";

export const ProtocolTable=(props)=>{
    let protocols=props.protocols.data

    return(
        <Table route={route('protocols.index')}>
            <Table.Search />
            {protocols && protocols.length>0?
                <>
                <Table.Inner>
                <Table.HeaderRow>
                <Table.Header name="type" sortable={true}>
                    Tipo
                </Table.Header>
                <Table.Header name="date" sortable={true}>
                    Data
                </Table.Header>
                <Table.Header name="referral" sortable={true}>
                    Riferimento
                </Table.Header>
                <Table.Header name="expiring_date" sortable={true}>
                    Data di scadenza
                </Table.Header>
                <Table.Header>
                </Table.Header>
            </Table.HeaderRow>
            <Table.Body>
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
                </Table.Body>
                </Table.Inner>
                <Table.Pagination paginated={props.protocols} />
                </>:
                <p>Nessun protocollo presente</p>}
        </Table>
    )
}

